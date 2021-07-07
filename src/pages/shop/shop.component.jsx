import React from "react";
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import "./shop.style.scss";

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionCategory from '../../components/collection-category/collection-category.component';
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';

import withSpinner from '../../components/with-spinner/with-spinner.component';

import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import { createStructuredSelector } from "reselect";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionCategoryWithSpinner = withSpinner(CollectionCategory);

class Shop extends React.Component
{
  componentDidMount() {

    const {fetchCollectionsStartAsync} = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const {match} = this.props;
    const loading = this.props.isCollectionFetching;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} /> } />
        <Route exact path={`${match.path}/:categoryId`} render={(props) => <CollectionCategoryWithSpinner isLoading={loading} {...props} /> } />
      </div>
    );

    // if (this.state.loading) {
    //   return <div>Loading...</div>
    // } else {
    //   return (
    //     <div className="shop-page">
    //       <Route exact path={`${match.path}`} component={CollectionOverview} />
    //       <Route exact path={`${match.path}/:categoryId`} component={CollectionCategory} />
    //     </div>
    //   );
    // }
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: state => !selectIsCollectionsLoaded(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

import React from "react";
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import "./shop.style.scss";

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionCategory from '../../components/collection-category/collection-category.component';
import {updateCollections} from '../../redux/shop/shop.actions';
import withSpinner from '../../components/with-spinner/with-spinner.component';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.util.js';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionCategoryWithSpinner = withSpinner(CollectionCategory);

class Shop extends React.Component
{
  unsubscribeFromSnapshot = null;

  state = {
    loading: true
  }

  componentDidMount() {
    const collectionRef = firestore.collection('collection');
    const {updateCollection} = this.props;

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionMap = await convertCollectionsSnapshotToMap(snapshot);
      updateCollection(collectionMap);
      this.setState({
        loading: false
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot = null;
  }

  render() {
    const {match} = this.props;
    const {loading} = this.state;

    if (this.state.loading) {
      return <div>Loading...</div>
    } else {
      // return (
      //   <div className="shop-page">
      //     <Route exact path={`${match.path}`} component={CollectionOverview} />
      //     <Route exact path={`${match.path}/:categoryId`} component={CollectionCategory} />
      //   </div>
      // );

      return (
        <div className="shop-page">
          <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} /> } />
          <Route exact path={`${match.path}/:categoryId`} render={(props) => <CollectionCategoryWithSpinner isLoading={loading} {...props} /> } />
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollection: collectionMap => dispatch(updateCollections(collectionMap))
})
export default connect(null, mapDispatchToProps)(Shop);

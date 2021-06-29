import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Homepage from "./pages/homepage/homepage.component.jsx";
import CheckoutPage from "./pages/checkout/checkout.component";
import Shop from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component";
import SigninAndSignOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import { auth, createUserProfileDocument, addCollectionAndDocuments } from "./firebase/firebase.util";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { selectShopCollection } from './redux/shop/shop.selectors';

import "./App.css";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });

        this.props.setCurrentUser(userAuth);
      } else {
        this.props.setCurrentUser(null);
      }
    });

   // populate shopeCollection data to firestore - This is one time process only
   // addCollectionAndDocuments('collection', this.props.collectionArray.map(({title, items}) => ({title, items})));

  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }



  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SigninAndSignOut />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionArray: selectShopCollection

});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import Test from "./test";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// redux stuff

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";

class App extends Component {
  /* we don't need constructor anymore*/

  unsubscribeFromAuth = null;

  // set user email and password in state

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // if userAuth exists get a snapshot of user data in database

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        /* userRef is the object we get back from our function.
        Voir firebase.utils.js dans function createUserProfileDocument()
        there is return userRef
        We use it to check if the database has updated at that ref with
        any new data. We check if the snapshot has changed
        */

        // give snapshot of user data in database

        userRef.onSnapshot((snapShot) => {
          /*console.log(snapShot.data());*/
          /* onSnapshot -> The moment it instantiates, it sends us a snapshot object
           * representing the data that is currently stored in database.
           * We don't get any data if we don't use the data() method. If we
           * log (snapShot) we don't have the data */

          // we create a new object with snapshot data

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
            /* snapShot.id -> we only get the id in snapShot, not
             * with snapShot.data. SnapShot.data() gives the properties
             * of the user in database displayName, email etc. So we
             * combine both to have properties and id */
          });

          /*   console.log(this.state);*/
          /*
           () => {
            console.log(this.state)
          }
          we log it as callback function because
           * setState() is asynchronous. If we log outside
           * of setState() we won't get anything because setState()
           * is not finished being called. We have to wait for setState()
           * to be fully called. */
        });

        // if no userAuth / signOut
      } else {
        setCurrentUser(userAuth);
        /* set currentUser to null*/
      }
    });
  }

  // close the subscription

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Homepage} />
          <Route path={"/shop"} component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect /> : <SignInAndSignUpPage />
            }
          />
          {/* <Redirect> ->prevent access to sign-in page if user already signed in
           redirect to homepage  */}
          <Route path={"/test"} component={Test} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  /*dispatch the new action that we are trying to pass
   * which is setCurrentUser in user.action.js*/
  /* 1) */
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
/* null -> our app doesn't need currentUser anymore because it
 * doesn't do anything with the currentUser value in its
 * component itself. So we pass null because we don't need
 * any state so props from our Reducer.*/

/* 1) dispatch() -> A way for Redux to know that whatever you're passing,
  whatever object you're passing me is going to be an action
  object that I'm going to pass to every Reducer we are going to call
  our action (from user.actions.js) but we are going to pass that user in
  so that what we are doing is we're invoking set current user with the user
   that will then be used as the payload. But this returns the object.
   So we're just dipatching the object and now we're gonna pass map dispatch
    the props as second argument of connect.
*/

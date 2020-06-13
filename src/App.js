import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import Test from "./test";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  // set user email and password in state

  componentDidMount() {
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

          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
              /* snapShot.id -> we only get the id in snapShot, not
               * with snapShot.data. SnapShot.data() gives the properties
               * of the user in database displayName, email etc. So we
               * combine both to have properties and id */
            },
          });
          console.log(this.state);
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
        this.setState({ currentUser: userAuth });
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path={"/"} component={Homepage} />
          <Route path={"/shop"} component={ShopPage} />
          <Route path={"/signin"} component={SignInAndSignUpPage} />
          <Route path={"/test"} component={Test} />
        </Switch>
      </div>
    );
  }
}

export default App;

import "./App.css";
import React, { useEffect } from "react";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";
import { auth } from "./firebase";
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, selectUser} from "./features/counter/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
        //Logged out
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/profile">
              <ProfileScreen/>
            </Route>
            <Route exact path="/">
              <Homescreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;

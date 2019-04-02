import React from "react";
import {Route, Redirect} from "react-router-dom"
import firebase from "./firebase"


export default function PrivateRoute({ component: Component, ...rest }) {
  console.log("rest", rest);
  console.log("component", Component);
  const isAuthen = firebase.auth().currentUser;
  console.log(isAuthen)
  return (
    <Route
      {...rest}
      render={props =>
        isAuthen ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location.pathname }
            }}
          />
        )
      }
    />
  );
}


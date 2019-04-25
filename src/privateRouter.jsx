import React from "react";
import { Route, Redirect } from "react-router-dom";
import firebase from "./firebase";
export const admin_uid = "qlibaU2unZULqUSUTHlmXBIGTlR2";
// const isAuthen = JSON.parse(localStorage.getItem("userInfo"));

export function AdminRoute({ component: Component, ...rest }) {
  const isAuthen = JSON.parse(localStorage.getItem("userInfo"));
  const isAdmin = isAuthen && isAuthen.uid === admin_uid;
  console.log("isAdmin", isAdmin);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin ? (
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

export default function PrivateRoute({ component: Component, ...rest }) {
  // console.log("rest", rest);
  // console.log("component", Component);
  const isAuthen = JSON.parse(localStorage.getItem("userInfo"));
  const isAdmin = isAuthen && isAuthen.uid === admin_uid;
  console.log("isAuthen && !isAdmin", isAuthen && !isAdmin);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthen && !isAdmin ? (
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

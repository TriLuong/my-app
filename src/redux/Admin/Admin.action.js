import { database } from "../../firebase";

//Action type
export const ADMIN_REQUEST = "ADMIN_REQUEST";
export const ADMIN_SUCCESS = "ADMIN_SUCCESS";

export function adminRequest() {
  return {
    type: ADMIN_REQUEST
  };
}

export function adminSuccess(data) {
  return {
    type: ADMIN_SUCCESS,
    data: data
  };
}

export function getData() {
  return async (dispatch) => {
    dispatch(adminRequest());
    var starCountRef = database.ref("users/");
    await starCountRef.on("value", function(snapshot) {
      dispatch(adminSuccess(snapshot.val()));
    });
  };
}

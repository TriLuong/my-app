//Action type
export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";

//Action Creator
export function searchRequest() {
  return {
    type: SEARCH_REQUEST
  };
}

//Action Creator
export function searchSuccess(data) {
  return {
    type: SEARCH_SUCCESS,
    payload: data
  };
}

//Action Creator
export function searchFail(error) {
  return {
    type: SEARCH_FAIL,
    error: error
  };
}

export function getProducts(input) {
  return dispatch => {
    dispatch(searchRequest());
    // console.log("input", input);
    // const linkProduct =
    //   "https://mapi.sendo.vn/mob/product/search?p=1&q=" + input;
    // console.log(linkProduct);
    return fetch(`https://mapi.sendo.vn/mob/product/search?p=1&q=${input}`)
      .then(r => r.json())
      .then(r => dispatch(searchSuccess(r.data)))
      .catch(error => dispatch(searchFail(error)));
  };
}

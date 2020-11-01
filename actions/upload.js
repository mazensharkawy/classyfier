import * as actionTypes from "../actions/actionTypes";
import Server from "../src/server";

const setUploaded = payload => {
  return {
    type: actionTypes.SET_UPLOADED,
    payload
  };
};
const setError = err => {
  return {
    type: actionTypes.SET_ERROR,
    payload: err
  };
};
export const upload = formData => {
  return async dispatch => {
    let response = await Server.upload(formData);
    if (response.status === 200) dispatch(setUploaded(true));
    else dispatch(setError("Failed while uploading"));
    //unzip
    // let response = await Server.unzip();
    // if (response.status === 200) dispatch(setUnzipped(true));
    // else dispatch(setError("Failed while unzipping"));
    //process
    // let response = await Server.process();
    // if (response.status === 200) dispatch(setProcessed(true));
    // else dispatch(setError("Failed while processing data"));
  };
};

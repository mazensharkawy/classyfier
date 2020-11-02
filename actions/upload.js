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
const setUnzipped = payload => {
  return {
    type: actionTypes.SET_UNZIPPED,
    payload
  };
};
export const uploadAndProcess = (formData, fileName) => {
  return async dispatch => {
    //upload
    let response = await Server.upload(formData);
    if (response.status === 200) dispatch(setUploaded(true));
    else dispatch(setError("Failed while uploading"));
    //unzip
    response = await Server.unzip(fileName);
    if (response.status === 200) dispatch(setUnzipped(true));
    else dispatch(setError("Failed while unzipping"));
    //process
    // let response = await Server.process();
    // if (response.status === 200) dispatch(setProcessed(true));
    // else dispatch(setError("Failed while processing data"));
  };
};

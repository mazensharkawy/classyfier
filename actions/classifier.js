import _ from "lodash";
import Server from "../src/server";
import * as actionTypes from "./actiontypes";

export const loadNewImage = payload => {
  return { type: actionTypes.LOAD_NEW_IMAGE, payload };
};
export const requestNewImage = () => {
  return (dispatch, getState) => {
    const { selectedProject } = _.get(getState(), "projects");
    return Server.requestNewImage(selectedProject).then(res => {
      dispatch(loadNewImage({ ...res }));
    });
  };
};

export const classify = () => {
  return (dispatch, getState) => {
    const { selectedClass, selectedProject, img } = _.get(
      getState(),
      "classifier"
    );
    return Server.classifyImage({
      imageClass: selectedClass,
      project: selectedProject,
      image: img
    }).then(dispatch(loadNewImage));
  };
};
export const selectClass = payload => {
  return {
    type: actionTypes.SET_SELECTED_CLASS,
    payload
  };
};
export const discard = () => {
  return (dispatch, getState) => {
    const { selectedProject, img } = _.get(getState(), "classifier");
    return Server.discardImage({ project: selectedProject, image: img }).then(
      dispatch(loadNewImage)
    );
  };
};

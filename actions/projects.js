import Server from "../src/server";
import * as actiontypes from "./actiontypes";

export const loadProjects = () => {
  return dispatch => {
    Server.getProjectsAvailable()
      .then(projects => dispatch(setProjects(projects)))
      .catch(error => {
        console.log({ error });
        dispatch(getDataFailed())
      });
  };
};
const setProjects = projects => ({
  type: actiontypes.SET_PROJECTS,
  payload: projects
});
export const getDataFailed = () => ({
  type: actiontypes.GET_DATA_FAILED
});

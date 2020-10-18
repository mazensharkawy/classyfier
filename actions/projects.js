import _ from "lodash";
import Server from "../src/server";
import * as actiontypes from "./actiontypes";

export const loadProjects = () => {
  return dispatch => {
    return Server.getProjectsAvailable()
      .then(projects => dispatch(setProjects(projects)))
      .catch(error => {
        console.log({ error });
        dispatch(getDataFailed());
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

export const toClassesPage = () => ({
  type: actiontypes.TO_CLASSES_PAGE
});

export const setSelectedProject = () => ({
  type: actiontypes.SET_SELECTED_PROJECT
});

export const selectProject = selectedProject => {
  return (dispatch, getState) => {
    const projects = _.get(getState(), "projects.projects");
    // this.setState({ selectedProject: _.trim(selectedProject) });
    
    dispatch(setSelectedProject(_.trim(selectedProject)));
    if (_.includes(_.keys(projects), selectedProject)) {
      // this.setState({ page: CLASSIFYING_PAGE });
      // redirect
    } else dispatch(toClassesPage());
  };
};

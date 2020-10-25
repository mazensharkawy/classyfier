import _ from "lodash";
import * as actiontypes from "./actiontypes";
import Router from "next/router";
import Server from "../src/server";

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

export const setSelectedProject = selectedProjectName => ({
  type: actiontypes.SET_SELECTED_PROJECT,
  payload: selectedProjectName
});

export const selectProject = selectedProject => {
  return (dispatch, getState) => {
    const projects = _.get(getState(), "projects.projects");
    dispatch(setSelectedProject(_.trim(selectedProject)));
    if (_.includes(_.keys(projects), selectedProject)) {
      Router.push(`/classifier/${selectedProject}`);
    } else dispatch(toClassesPage());
  };
};

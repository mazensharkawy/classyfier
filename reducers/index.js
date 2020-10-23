import { combineReducers } from "redux";
import auth from "./auth";
import projects from "./projects";
import classifier from "./classifier";

export default combineReducers({
  projects,
  auth,
  classifier
});

import { combineReducers } from "redux";
import auth from "./auth";
import projects from "./projects";
import classifier from "./classifier";
import pricing from "./pricing";

export default combineReducers({
  projects,
  auth,
  classifier,
  pricing
});

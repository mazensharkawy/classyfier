import { combineReducers } from "redux";
import auth from "./auth";
import projects from "./projects";
import classifier from "./classifier";
import pricing from "./pricing";
import upload from "./upload";

export default combineReducers({
  projects,
  auth,
  classifier,
  pricing,
  upload
});

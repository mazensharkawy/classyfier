import React from "react";
import { connect } from "react-redux";
import { loadProjects } from "../actions/projects";
import ClassesContainer from "../src/containers/ClassesContainer";
import MainAppContainer from "../src/containers/MainAppContainer";
import ProjectsContainer from "../src/containers/ProjectsContainer";
class projects extends React.Component {
  static getInitialProps = async ({ reduxStore, req, query, res }) => {
    await reduxStore.dispatch(loadProjects());
    return {};
  };
  state = {};
  render() {
    const { page } = this.props;
    return (
      <MainAppContainer>
        {page === 0 ? <ProjectsContainer /> : <ClassesContainer />}
      </MainAppContainer>
    );
  }
}

const mapStateToProps = ({ projects }) => ({ page: projects.page });
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(projects);

import React from "react"
import { loadProjects } from "../actions/projects"
import ProjectsContainer from "../src/containers/ProjectsContainer"
class projects extends React.Component {
    static getInitialProps = async ({ reduxStore, req, query, res }) => {
        await reduxStore.dispatch(loadProjects())
        return {}
    }
    render() {
        return <ProjectsContainer/>
    }
}

export default projects
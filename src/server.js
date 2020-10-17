const dev = process.env.NODE_ENV !== "production";
const SERVER_URL = dev ? "http://localhost:3000" : "SERVER_URL"
export default class Server {
  static createProject({ projectName, classes }) {
    return this.send({
      url: `${SERVER_URL}/api/create-project`,
      data: {
        projectName,
        classes
      }
    });
  }
  static discardImage({ project, image }) {
    return this.send({
      url: `${SERVER_URL}/api/discard-image`,
      data: {
        project,
        image
      }
    });
  }
  static classifyImage({ imageClass, project, image }) {
    return this.send({
      url: `${SERVER_URL}/api/classify-image`,
      data: {
        imageClass,
        project,
        image
      }
    });
  }
  static requestNewImage(project) {
    return this.get(`${SERVER_URL}/api/request-image/${project}`);
  }
  static getProjectsAvailable() {
    return this.get(`${SERVER_URL}/api/projects`).then(({ projects }) => projects);
  }
  static send({ url, data }) {
    let payload = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
      //   credentials: 'same-origin'
    };
    return fetch(url, payload).then(this.getData);
    // .catch(err => console.log(err));
    // .then(this.parseJson);
  }
  static get(url) {
    let payload = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    return fetch(url, payload).then(res => this.getData(res));
    // .catch(err => console.log(err));
    // .then(this.parseJson);
  }
  static getData(response) {
    return response.json();
  }
}

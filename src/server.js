const dev = process.env.NODE_ENV !== "production";
const SERVER_URL = dev ? "http://localhost:3000" : "SERVER_URL";
export default class Server {
  static async signout() {
    return this.send({
      url: `${SERVER_URL}/api/auth/signout`
    });
  }
  static async signin({ email, password, token, remember = false }) {
    return this.send({
      url: `${SERVER_URL}/api/login`,
      data: { email, password, remember }
    });
  }
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
  static loadPricingPlans() {
    return this.get(`${SERVER_URL}/api/pricings`);
  }
  static getProjectsAvailable() {
    return this.get(`${SERVER_URL}/api/projects`).then(
      ({ projects }) => projects
    );
  }
  static upload(formData) {
    let url = `${SERVER_URL}/api/upload`;
    let payload = {
      headers: {
        Accept: "application/json"
      },
      method: "POST",
      body: formData
    };
    return fetch(url, payload);
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

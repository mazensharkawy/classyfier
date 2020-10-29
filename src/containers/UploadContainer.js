import React, { Component } from "react";
import styled from "styled-components";
import Server from "../../src/server";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubmitButton = styled.button`
  width: 7vw;
  height: 3vw;
  margin-top: 10px;
  border-radius: 10px;
`;
class UploadContainer extends Component {
  handleUpload(e) {
    e.preventDefault();
    const file = document.querySelector('input[type="file"]').files[0];
    let formData = new FormData();
    formData.append("file", file);
    Server.upload(formData);
  }
  render() {
    return (
      <Container>
        <h2>upload your data</h2>
        <h5>must be compressed in form of zip</h5>
        <form onSubmit={this.handleUpload} encType="multipart/form-data">
          <input type="file" name="file" />
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </Container>
    );
  }
}
export default UploadContainer;

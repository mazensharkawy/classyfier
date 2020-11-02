import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { uploadAndProcess } from "../../actions/upload";

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
const Success = styled.h5`
  color: green;
`;
const Fail = styled(Success)`
  color: red;
`;
class UploadContainer extends Component {
  handleUpload = e => {
    e.preventDefault();
    const { uploadAndProcess } = this.props;
    const file = document.querySelector('input[type="file"]').files[0];
    let formData = new FormData();
    formData.append("file", file);
    // let fileName = `/${userName}/${file.name}`
    uploadAndProcess(formData, file.name);
  };
  render() {
    const { error, uploaded, unzipped } = this.props;
    return (
      <Container>
        {error && <Fail>{error}</Fail>}
        <h2>upload your data</h2>
        <h5>must be compressed in form of zip</h5>
        <form onSubmit={this.handleUpload} encType="multipart/form-data">
          <input type="file" name="file" />
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
        {uploaded && <Success>Uploaded successfully</Success>}
        {unzipped && <Success>Unzipped successfully</Success>}
      </Container>
    );
  }
}
const mapStateToProps = ({ upload }) => {
  return {
    error: upload.error,
    uploaded: upload.uploaded,
    unzipped: upload.unzipped
  };
};
const mapDispatchToProps = {
  uploadAndProcess
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadContainer);

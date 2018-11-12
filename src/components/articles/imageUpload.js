import React, { Component } from 'react';
import { connect } from 'react-redux';
import imageUpload from '../../actions/imageUpload';

class ImageUploader extends Component {
  handleChange = async (e) => {
    const { imageUploaded } = this.props;
    const file = e.target.files;
    const url = await this.props.imageUpload(file);
    imageUploaded(url);
  }

  render() {
    return (
      <div className="image-upload">
        <label htmlFor="file-input">
          <div className="fab" id="masterfab">+</div>
          <input onChange={this.handleChange} id="file-input" type="file" name="image" />
        </label>
      </div>
    );
  }
}
const mapStateToProps = ({ imageUploadReducer: { status, uploadedImage } }) => ({
  status,
  uploadedImage,
});

export default connect(mapStateToProps, { imageUpload })(ImageUploader);

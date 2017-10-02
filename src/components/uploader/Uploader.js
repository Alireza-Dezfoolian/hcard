import React from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Uploader.scss';
import { imageChanged } from '../.././actions/image-changed'

class Uploader extends React.Component {

  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '' };
    this.acceptableFiles = ['jpg', 'jpeg', 'png', 'svg', 'gif', 'bmp', 'wbm', 'ico'];
  }

  handleNewImage(e) {
    e.preventDefault();

    if (e.target && e.target.files && 'function' === typeof FileReader) {

      let reader = new FileReader();
      let file = e.target.files[0] || this.state.file;
      let isAcceptable = file.name ? this.acceptableFiles.indexOf(file.name.split('.').pop().toLowerCase()) > -1 : false;

      if (isAcceptable) {
        reader.onloadend = () => {
          this.setState({
            file,
            imagePreviewUrl: reader.result
          });
          this.props.imageChanged(this.state.imagePreviewUrl);
        }

        reader.readAsDataURL(file);

      } else {
        alert('This file format is not supported!');
      }
    } else {
       alert('Your browser dosn\'t support local file uploading!');
    }
  }

  render() {
    return (
      <div className="uploader-button">
        <label htmlFor="file" className="file-container press-button">Upload Avatar</label>
          <input className="fileInput" 
            type="file" 
            id="file"
            onChange={e => this.handleNewImage(e)} className="inputfile"/>
      </div>
    )
  }
}

Uploader.propTypes = {
  imageChanged: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    imgUrl: state
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ imageChanged: imageChanged }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Uploader);
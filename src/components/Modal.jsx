import React, { Component } from 'react';
import { BsXCircleFill } from 'react-icons/bs';
import getError from '../utils/validation';
import '../styles/Modal.css';

export default class Modal extends Component {
  state = {
    audioFile: null,
    error: null,
  };

  validateFile = () => {
    const { audioFile } = this.state;
    const validTypes = ['audio/mp4', 'audio/mpeg', 'audio/ogg'];
    const { audioList } = this.props; 
    const error = getError(audioFile, validTypes, audioList)
    this.setState({ error });
  }

  handleFileInput = async ({ target }) => {
    const [file] = target.files;
    
    if (!file) return;

    this.setState({
      audioFile: file,
    }, this.validateFile);
  };

  addNewAudio = () => {
    const { handleModal, updateAudios } = this.props; 
    const { audioFile } = this.state;
    updateAudios(audioFile);
    handleModal();
  };

  render() {
    const { handleModal } = this.props;
    const { audioFile, error } = this.state;

    return (
      <div className="Modal">
        <div className="Modal__wrapper">
          <div className="Modal__top-container">
            <h1 className="Modal__title">Escolha seu arquivo de áudio</h1>
            <button onClick={ handleModal } className="Modal__close-btn">
              <BsXCircleFill className="Modal__close-icon" />
            </button>
          </div>
          <input
            type="file"
            onChange={this.handleFileInput}
            name="audioFile"
            className="Modal__file-input"
            accept="audio/mp4, audio/mpeg, audio/ogg"
          />
          { error && <p className="Modal__error">{ error }</p> }
          <button
            onClick={this.addNewAudio}
            className="Modal__add-song-btn"
            disabled={!audioFile || error}
          >
            Adicionar
          </button>
        </div>
      </div>
    );
  }
}

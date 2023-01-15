import React, { Component } from 'react';
import { BsXCircleFill } from 'react-icons/bs';
import ModalErrors from './ModalErrors';
import getErrorList from '../utils/validation';

export default class Modal extends Component {
  state = {
    audioFile: null,
    valdidationErrors: [],
  };

  validateFile = () => {
    const { audioFile } = this.state;
    const validTypes = ['audio/mp4', 'audio/mpeg', 'audio/ogg'];
    const { audioList } = this.props; 
    const errors = getErrorList(audioFile, validTypes, audioList)
    
    this.setState({
      valdidationErrors: errors,
    });
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
    const { audioFile, valdidationErrors } = this.state;
  
    return (
      <div className="Modal">
        <div className="Modal__top-container">
          <h1>Escolha seu arquivo de áudio</h1>
          <button onClick={ handleModal } className="Modal__close-btn">
            <BsXCircleFill className="Modal__close-icon" />
          </button>
        </div>
        <div className="Modal__middle-container">
          <input
            type="file"
            onChange={this.handleFileInput}
            name="audioFile"
            accept="audio/mp4, audio/mpeg, audio/ogg"
          />
        </div>
        { !valdidationErrors.length || (
          <ModalErrors errorList={valdidationErrors} />
        ) }
        <button
          onClick={this.addNewAudio}
          className="Modal__add-song-btn"
          disabled={!audioFile || valdidationErrors.length}
        >
          Adicionar
        </button>
      </div>
    );
  }
}

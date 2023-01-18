import React, { Component } from 'react';
import { BsFileEarmarkMusicFill } from "react-icons/bs";
import AudioList from './AudioList';
import '../styles/FileManager.css';

export default class FileManager extends Component {
  render() {
    const {
      audioList, handleModal, removeAudio, setSelected, selectedAudio,
    } = this.props;

    return (
      <div className="FileManager">
        <div className="FileManager__btn-container">
          <button onClick={handleModal} className="FileManager__add-audio-btn">
            <BsFileEarmarkMusicFill className="FileManager__add-audio-icon" />
          </button>
        </div>
        <div className="FileManager__audios-container">
          { audioList.length === 0 ? (
            <p className="FileManager__empty-list-msg">
              Você ainda não adicionou suas músicas!
            </p>
          ) : (
            <AudioList
              selectedAudio={selectedAudio}
              setSelected={setSelected}
              removeAudio={removeAudio}
              audioList={audioList}
            />
          ) }
        </div>
      </div>
    );
  }
}

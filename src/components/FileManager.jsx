import React, { Component } from 'react';
import { BsFileEarmarkMusicFill } from "react-icons/bs";
import AudioList from './AudioList';

export default class FileManager extends Component {
  render() {
    const { audioList, handleModal, removeAudio, setSelected } = this.props;

    return (
      <div className="FileManager">
        <div className="FileManager__btn-container">
          <button onClick={handleModal} className="add-audio-btn">
            <BsFileEarmarkMusicFill />
          </button>
        </div>
        <div className="FileManager__audios-container">
          { audioList.length === 0 ? (
            <p className="FileManager__empty-audios-msg">
              Você ainda não adicionou suas músicas!
            </p>
          ) : (
            <AudioList audioList={audioList} removeAudio={removeAudio} />
          ) }
        </div>
      </div>
    );
  }
}

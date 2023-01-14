import React, { Component } from 'react';
import FileManager from './components/FileManager';
import Modal from './components/Modal';
import getAudioFileInfos from './utils/audioMetadata';
import copyArrayOfFiles from './utils/files';

export default class App extends Component {
  state = {
    audioList: [],
    displayModal: false,
    selectedAudio: null,
  };

  handleModal = () => {
    this.setState(({ displayModal }) => ({
      displayModal: !displayModal,
    }));
  };

  updateAudios = async (audio) => {
    const newAudio = await getAudioFileInfos(audio);
    this.setState(({ audioList }) => ({
      audioList: [...audioList, newAudio],
    }));
  };

  removeAudio = (index) => {
    this.setState(({ audioList }) => {
      const newAudios = copyArrayOfFiles(audioList);
      newAudios.splice(index, 1);
      return { audioList: newAudios };
    });
  };

  setSelectedAudio = () => {

  };

  render() {
    const { audioList, displayModal } = this.state;

    return (
      <div className="App">
        { displayModal && (
          <Modal
            audioList={audioList}
            updateAudios={this.updateAudios}
            handleModal={this.handleModal}
          />
        ) }
  
        <FileManager
          audioList={audioList}
          handleModal={this.handleModal}
          removeAudio={this.removeAudio}
          setSelected={this.setSelectedAudio}
        />
      </div>
    );
  }
}

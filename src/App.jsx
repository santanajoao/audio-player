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

  // fazer lógicas de seleção quando o elemento selecionado for removido 

  handleModal = () => {
    this.setState(({ displayModal }) => ({
      displayModal: !displayModal,
    }));
  };

  updateAudios = async (audio) => {
    const newAudio = await getAudioFileInfos(audio);
    this.setState(({ audioList }) => ({
      audioList: [...audioList, newAudio],
    }), () => this.setSelectedAudio(newAudio.name));
  };
  
  removeAudio = (index) => {
    this.setState(({ audioList }) => {
      const newAudios = copyArrayOfFiles(audioList);
      newAudios.splice(index, 1);
      return { audioList: newAudios };
    });
  };

  setSelectedAudio = (fileName) => {
    const { audioList } = this.state;
    const selected = audioList.find(({ name }) => name === fileName);
    this.setState({ selectedAudio: selected });
  };

  render() {
    const { audioList, displayModal, selectedAudio } = this.state;

    return (
      <div className="App">
        { displayModal && (
          <Modal
            updateAudios={this.updateAudios}
            handleModal={this.handleModal}
            audioList={audioList}
          />
        ) }
  
        <FileManager
          setSelected={this.setSelectedAudio}
          selectedAudio={selectedAudio}
          removeAudio={this.removeAudio}
          handleModal={this.handleModal}
          audioList={audioList}
        />
      </div>
    );
  }
}

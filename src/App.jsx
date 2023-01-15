import React, { Component } from 'react';
import AudioController from './components/AudioController';
import FileManager from './components/FileManager';
import Modal from './components/Modal';
import getAudioFileInfos from './utils/audioMetadata';
import copyArrayOfObjects from './utils/files';

export default class App extends Component {
  state = {
    audioList: [],
    displayModal: false,
    selectedAudio: {},
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
    }), () => this.setSelectedAudio(newAudio.name));
  };

  handleSelectedRemoved = (fileName, index) => {
    const { selectedAudio, audioList } = this.state;
    if (audioList.length === 0) {
      this.setState({ selectedAudio: {} });
    } else if (selectedAudio.name === fileName) {
      const newAudio = audioList[index - 1] || audioList[index];
      this.setState({ selectedAudio: newAudio });
    }
  };

  removeAudio = (fileName, index) => {
    this.setState(({ audioList }) => {
      const audiosCopy = copyArrayOfObjects(audioList);
      const newAudios = audiosCopy.filter(({ name }) => name !== fileName);
      return { audioList: newAudios };
    }, () => this.handleSelectedRemoved(fileName, index));
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

        <AudioController
          selectedAudio={selectedAudio}
        />

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

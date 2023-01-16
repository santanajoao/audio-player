import React, { Component } from 'react';
import defaultCover from '../assets/default-song-cover.jpg';
import {
  BsPlayFill, BsSkipBackwardFill, BsSkipForwardFill
} from 'react-icons/bs';
import '../styles/AudioController.css';

export default class AudioController extends Component {
  state = {
    isPlaying: false,
    audioElement: null,
  };

  componentDidUpdate(prevProps) {
    this.handleSelectedChange(prevProps);
  }

  handleSelectedChange = (prevProps) => {
    const { audioElement, isPlaying } = this.state;

    if (!audioElement) return null;

    const { selectedAudio: prevSelected } = prevProps;
    const { selectedAudio: currentSelected } = this.props;

    if (prevSelected.name === currentSelected.name) return null;

    if (Object.keys(currentSelected).length === 0) {
      audioElement.pause();
      this.setState({ audioElement: null, isPlaying: false });
      return;
    }

    if (!isPlaying) return;

    audioElement.pause();
    this.setState({ isPlaying: false }, () => {
      audioElement.play();
      this.setState({ isPlaying: true });
    });
  };

  changeSong = (difference) => {
    const { audioList, setSelected, selectedAudio } = this.props;
    
    if (audioList.length <= 1) return null;

    const currentIndex = audioList.findIndex(
      ({ name }) => name === selectedAudio.name
    );
    let newIndex = currentIndex + difference;
    newIndex = (newIndex < 0) ? audioList.length - 1 : newIndex;
    newIndex = (newIndex >= audioList.length) ? 0 : newIndex;
    setSelected(audioList[newIndex]);
  };

  setAudioElement = () => {
    const audio  = document.querySelector('.AudioController__audio');
    this.setState({ audioElement: audio });
  };

  playPause = () => {
    const { audioElement, isPlaying } = this.state;
    if (!audioElement) return;
      
    if (isPlaying) {
      audioElement.pause()
    } else {
      audioElement.play();
    }

    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    const { selectedAudio } = this.props;
    const { title, artist, cover, url } = selectedAudio;
    return (
      <div className="AudioController">
        <audio
          src={url}
          onCanPlayThrough={this.setAudioElement}
          className="AudioController__audio"
        />
        <div className="AudioController__metadata">
          <img
            src={cover || defaultCover}
            className="AudioController__cover"
            alt="Capa da música/álbum"
          />
          <div className="AudioController__text-metadata">
            <h1 className="AudioController__title">{ title || 'Título' }</h1>
            <h2 className="AudioController__artist">{ artist || 'Artista' }</h2>
          </div>
        </div>
        <div className="AudioController__controls">
          <button
            onClick={ () => this.changeSong(-1) }
            className="AudioController__prev-btn"
          >
            <BsSkipBackwardFill className="AudioController__prev-icon" />
          </button>
          <button
            onClick={this.playPause}
            className="AudioController__play-pause-btn"
          >
            <BsPlayFill className="AudioController__play-pause-icon" />
          </button>
          <button
            onClick={ () => this.changeSong(1) }
            className="AudioController__next-btn"
          >
            <BsSkipForwardFill className="AudioController__next-icon" /> 
          </button>
        </div>
      </div>
    );
  }
}

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
    const { audioElement } = this.state;

    const { selectedAudio: prevSelected } = prevProps;
    const { selectedAudio: currentSelected } = this.props;

    if (prevSelected.name === currentSelected.name) return null;

    audioElement?.pause();

    if (Object.keys(currentSelected).length === 0) {
      this.setState({
        audioElement: null,
      });
    }
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
          <button className="AudioController__prev-btn">
            <BsSkipBackwardFill className="AudioController__prev-icon" />
          </button>
          <button
            onClick={this.playPause}
            className="AudioController__play-pause-btn"
          >
            <BsPlayFill className="AudioController__play-pause-icon" />
          </button>
          <button className="AudioController__next-btn">
            <BsSkipForwardFill className="AudioController__next-icon" /> 
          </button>
        </div>
      </div>
    );
  }
}

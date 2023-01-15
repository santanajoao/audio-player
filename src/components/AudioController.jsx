import React, { Component } from 'react';
import defaultCover from '../assets/default-song-cover.jpg';

export default class AudioController extends Component {
  render() {
    const { selectedAudio } = this.props;
    const { title, artist, cover, url } = selectedAudio;
    return (
      <div className="AudioController">
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
          <audio src={url} className="AudioController__audio" controls />
        </div>
      </div>
    );
  }
}

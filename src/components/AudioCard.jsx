import React, { Component } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import '../styles/AudioCard.css';

export default class AudioCard extends Component {
  render() {
    const {
      id, removeAudio, setSelected, selectedAudio, audio
    } = this.props;

    const { name } = audio;
    const extraClass = (selectedAudio?.name === name) ? ' selected' : '';

    return (
      <li className={`AudioCard${extraClass}`}>
        <button
          type="button"
          onClick={ () => setSelected(audio) }
          className="AudioCard__select-audio-btn"
        >
          { name }
        </button>
        <button
          type="button"
          onClick={ () => removeAudio(name, id) }
          className="AudioCard__delete-btn"
        >
          <BsTrashFill className="AudioCard__delete-icon" />
        </button>
      </li>
    );
  }
}

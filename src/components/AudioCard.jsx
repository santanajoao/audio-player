import React, { Component } from 'react';
import { BsTrashFill } from 'react-icons/bs';

export default class AudioCard extends Component {
  render() {
    const {
      children, id, removeAudio, setSelected, selectedAudio
    } = this.props;
    
    const extraClass = (selectedAudio?.name === children) ? ' selected' : '';

    return (
      <li className={`AudioCard${extraClass}`}>
        <button
          type="button"
          onClick={ () => setSelected(children) }
          className="AudioCard__select-audio-btn"
        >
          { children }
        </button>
        <button
          type="button"
          onClick={ () => removeAudio(id) }
          className="AudioCard__delete-btn"
        >
          <BsTrashFill className="AudioCard__delete-icon" />
        </button>
      </li>
    );
  }
}

import React, { Component } from 'react';
import { BsTrashFill } from 'react-icons/bs';

export default class AudioCard extends Component {
  render() {
    const { children, id, removeAudio } = this.props;
    return (
      <li className="AudioCard">
        <button type="button" className="AudioCard__select-audio-btn">
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

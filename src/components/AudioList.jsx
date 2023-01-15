import React, { Component } from 'react';
import AudioCard from './AudioCard';

export default class AudioList extends Component {
  render() {
    const { audioList, removeAudio, setSelected, selectedAudio } = this.props;
    return (
      <ul className="AudioList">
        { audioList.map((audio, index) => (
          <AudioCard
            key={ index }
            setSelected={setSelected}
            removeAudio={removeAudio}
            selectedAudio={selectedAudio}
            id={ index }
            audio={audio}
          />
        )) }
      </ul>
    );
  }
}

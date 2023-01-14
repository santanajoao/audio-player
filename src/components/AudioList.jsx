import React, { Component } from 'react';
import AudioCard from './AudioCard';

export default class AudioList extends Component {
  render() {
    const { audioList, removeAudio } = this.props;
    return (
      <ul className="AudioList">
        { audioList.map(({ name }, index) => (
          <AudioCard key={ index } removeAudio={removeAudio} id={ index }>
            { name }
          </AudioCard>
        )) }
      </ul>
    );
  }
}

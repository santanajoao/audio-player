import React, { Component } from 'react';

export default class ModalErrors extends Component {
  render() {
    const { errorList } = this.props;
    return (
      <ul className="ModalErrors">
        { errorList.map((error, index) => (
          <li key={index} className="ModalErrors__error">
            { error }
          </li>
        )) }
      </ul>
    );
  }
}

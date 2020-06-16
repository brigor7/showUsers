import React, { Component } from 'react';

export default class Switch extends Component {
  render() {
    const { description, onEnable } = this.props;
    return (
      <div className="switch">
        <label>
          {description}
          <input type="checkbox" onChange={onEnable} />
          <span className="lever" />
        </label>
      </div>
    );
  }
}

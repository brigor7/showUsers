import React, { Component } from 'react';

export default class Switch extends Component {
  render() {
    return (
      <div className="switch">
        <label>
          Mostrar usuários:
          <input type="checkbox" onChange={this.props.onUsers} />
          <span className="lever" />
        </label>
      </div>
    );
  }
}

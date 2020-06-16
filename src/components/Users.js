import React, { Component } from 'react';

export default class Users extends Component {
  constructor() {
    super();

    this.state = {
      secondsVisible: 0,
    };
    this.interval = null;
  }
  componentDidMount() {
    console.log('componentDidMount de Users.js');

    this.interval = setInterval(() => {
      const { secondsVisible } = this.state;
      this.setState({
        secondsVisible: secondsVisible + 1,
      });
    }, 1000);
  }
  componentDidUpdate() {
    console.log('componentDidUpdate de Users.js');
  }

  componentWillUnmount() {
    console.log('componentDidWillUnmount de Users.js');
  }
  render() {
    const { users } = this.props;
    const { secondsVisible } = this.state;
    return (
      <div>
        <p>Componente Users visível por {secondsVisible} segundo</p>
        {users.map((user) => {
          const { login, name, picture } = user;
          return <p key={login.uuid}>{name.first}</p>;
        })}
      </div>
    );
  }
}

import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const Header = styled.header `
background-color: #282c34;
min-height: 20vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
color: white;
`;

const Img = styled.img `
height: 23vmin;
pointer-events: none;
animation: App-logo-spin infinite 20s linear;
@keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const H1 = styled.h1 `
font-size: 36px;
`;

export default class ExchangeHeader extends Component {
  render() {
    return (
        <Header className="App-header">
        <Img src={logo} className="App-logo" alt="logo" />
        <H1 className='App-title'>
          Coin Exchange
        </H1>
      </Header>
    )
  }
}

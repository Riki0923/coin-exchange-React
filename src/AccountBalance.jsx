import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section `
font-size:2rem;
`;



export default class AccountBalance extends Component {
  render() {
    const buttonText = this.props.showBalance ? 'Hide Balance' : 'ShowBalance';
    let content = null;
    if(this.props.showBalance) {
      content = <>Balance: ${this.props.amount}</>;
    }
    return (
      <Section >{content}
      <button onClick={this.props.hideBalance}>{buttonText}</button>
      </Section>
    )
  }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}

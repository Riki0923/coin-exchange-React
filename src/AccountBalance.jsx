import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section `
font-size:2rem;
`;



export default function AccountBalance(props)   {
    const buttonText = props.showBalance ? 'Hide Balance' : 'ShowBalance';
    let content = null;
    if(props.showBalance) {
      content = <>Balance: ${props.amount}</>;
    }
    return (
      <Section >{content}
      <button onClick={props.hideBalance}>{buttonText}</button>
      </Section>
    )
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}

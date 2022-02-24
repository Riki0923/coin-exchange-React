import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td `
border: 1px solid white;
width: 25vh;
`


export default function Coin(props)  {

const handleClick = (event) => {
    // Prevent the default action of submitting the form
    event.preventDefault();


    props.handleRefresh(props.tickerId);
 /*   const randomPercentage = 0.995 + Math.random() * 0.01;
    this.setState(function (oldState){
        return {
            price: oldState.price * randomPercentage
        };
    });
*/
}

  return (
    <tr className='coin-row'>
        <Td>{props.name}</Td>
        <Td>{props.ticker}</Td>
        <Td>${props.price}</Td>
        {props.showBalance ? <Td>{props.balance}</Td>: null}
        <Td><button onClick={handleClick}>Refresh</button></Td>
    </tr>
  );

}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

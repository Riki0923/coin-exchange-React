import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td `
border: 1px solid white;
width: 14vw;
`
const TdControls = styled(Td)`
width: 34vw;
`;

const Tdname = styled(Td)`
  width: 24vw;
`;

const Button = styled.button`
  font-size: 11px;
  width:64px;
  margin: 3px 5px 0;
`;

export default function Coin(props)  {

const handleRefresh = (event) => {
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
const handleBuy = (event) => {
  event.preventDefault();
  props.handleTransaction(true, props.tickerId);
}
const handleSell = (event) => {
  event.preventDefault();
  props.handleTransaction(false, props.tickerId);
}

  return (
    <tr className='coin-row'>
        <Tdname>{props.name}</Tdname>
        <Td>{props.ticker}</Td>
        <Td>${props.price}</Td>
        <Td>{props.showBalance ? props.balance : '-'}</Td>
        <TdControls>
          <Button 
          className="btn btn-info" 
          onClick={handleRefresh}>Refresh</Button>
          <Button 
          className="btn btn-warning" 
          onClick={handleBuy}>Buy</Button>
          <Button 
          className="btn btn-danger" 
          onClick={handleSell}>Sell</Button></TdControls>
    </tr>
  );

}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

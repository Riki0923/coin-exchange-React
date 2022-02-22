import React, { Component } from 'react';
import Coin from './Coin.jsx';
import styled from 'styled-components';

const Table = styled.table `
margin: auto;
display: inline-block;
font-size: 1.4rem;
`;


export default class CoinList extends Component {
  render() {
    return (
<Table className='coin-table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Price</th>
                    {this.props.showBalance ? <th>Balance</th> : ''}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
              this.props.coinData.map( ({name, ticker, price , balance}) => 
              <Coin key={ticker}
                handleRefresh={this.props.handleRefresh}
                showBalance={this.props.showBalance}
                name={name} 
                ticker={ticker} 
                balance={balance}
                price={price}/>
              )
            }
            </tbody>
        </Table>
    )
  }
}

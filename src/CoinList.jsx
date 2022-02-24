import React from 'react';
import Coin from './Coin.jsx';
import styled from 'styled-components';

const Table = styled.table `
margin: auto;
display: inline-block;
font-size: 1.4rem;
`;


export default function CoinList (props) {
    return (
<Table className='coin-table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Price</th>
                    {props.showBalance ? <th>Balance</th> : ''}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
              props.coinData.map( ({key, name, ticker, price , balance}) => 
              <Coin key={key}
                handleRefresh={props.handleRefresh}
                showBalance={props.showBalance}
                name={name} 
                ticker={ticker} 
                balance={balance}
                price={price}
                tickerId={key}/>
              )
            }
            </tbody>
        </Table>
    )

}

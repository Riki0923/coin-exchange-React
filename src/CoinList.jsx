import React from 'react';
import Coin from './Coin.jsx';
import styled from 'styled-components';

const Table = styled.table `
 font-size: 1 rem;
`;


export default function CoinList (props) {
    return (
<Table className='table table-primary table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Price</th>
                    <th>Balance</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
              props.coinData.map( ({key, name, ticker, price , balance}) => 
              <Coin key={key}
                handleTransaction = {props.handleTransaction}
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

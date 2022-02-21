import React from 'react';
import CoinList from './CoinList.jsx';
import AccountBalance from './AccountBalance.jsx';
import ExchangeHeader from './ExchangeHeader.jsx';
import styled from 'styled-components';

const Div = styled.div `
text-align: center;
background-color: rgba(20, 56, 97);
color: white;
`;


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      balance: 10000,
      coinData: [
        {
          name:"Bitcoin",
          ticker: "BTC",
          price: 9999.99
        },
        {
          name:"Ethereum",
          ticker: "ETH",
          price: 299.99
        },
        {
          name: "Tether",
          ticker: "USDT",
          price: 1.00
        },
        {
          name: "Ripple",
          ticker: "XRP",
          price: 0.2
        },
        {
          name: "Bitcoin Cash",
          ticker: "BCH",
          price: 239.99
        }
      ]


    }
  }

  render(){
    return (
      <Div className="App">
        <ExchangeHeader/>
        <AccountBalance amount={10000}/>
        <CoinList coinData={this.state.coinData}/>
      </Div>
    );
  }

}

export default App;

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
  state = {
    showBalance: true,
    balance: 10000,
    coinData: [
      {
        name:"Bitcoin",
        ticker: "BTC",
        balance: 0.5,
        price: 9999.99
      },
      {
        name:"Ethereum",
        ticker: "ETH",
        balance: 32.0,
        price: 299.99
      },
      {
        name: "Tether",
        ticker: "USDT",
        balance: 0,
        price: 1.00
      },
      {
        name: "Ripple",
        ticker: "XRP",
        balance: 1000,
        price: 0.2
      },
      {
        name: "Bitcoin Cash",
        ticker: "BCH",
        balance: 0,
        price: 239.99
      }
    ]
  }
  classProperty = 'value';


  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map(function ({ticker, name, price, balance}) {
      let newPrice = price;
      if(valueChangeTicker === ticker){
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;
      }

      return {
        ticker,
        name,
        price: newPrice,
        balance
      }
    });
    this.setState({ coinData: newCoinData});

  }

  hideBalance = () => {
    this.setState( function (oldState){
      return {
         ...oldState, // ez a ...oldState nem feltétlen szükséges, anélkül is megy
        showBalance: !oldState.showBalance
      } 
    }) 


    // elsőre csináljuk azt meg, hogy csak a buttonnak a szövege változzon, hide-ról show-ra és fordítva

  }

  render(){
    return (
      <Div className="App">
        <ExchangeHeader/>
        <AccountBalance 
        amount={10000} 
        showBalance={this.state.showBalance} 
        hideBalance={this.hideBalance}/>
        <CoinList 
        coinData={this.state.coinData} 
        handleRefresh={this.handleRefresh}
        showBalance={this.state.showBalance}/>
      </Div>
    );
  }

}

export default App;

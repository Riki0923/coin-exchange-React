import React, {useState, useEffect} from 'react';
import CoinList from './CoinList.jsx';
import AccountBalance from './AccountBalance.jsx';
import ExchangeHeader from './ExchangeHeader.jsx';
import styled from 'styled-components';
import axios from 'axios';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';


const Div = styled.div `
text-align: center;
background-color: rgba(20, 56, 97);
color: white;
`;

const COIN_COUNT = 10;
const formatPrice = price => parseFloat(Number(price).toFixed(4));

function App(props)  {

  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = React.useState(false);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const tickerURL = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerURL + id))
    const coinData = await Promise.all(promises)
    const coinPriceData = coinData.map(function(response){
      const coin = response.data;
      return{
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes.USD.price)
      }
    })
    //Retrieve the prices
    setCoinData(coinPriceData);
  }

  useEffect(function(){
    if(coinData.length === 0){
      componentDidMount();
    }
  });

  const handleBrrrr = () => {
    setBalance( oldBalance => oldBalance += 1200 );
  }

  const handleRefresh = async (valueChangeId) => {
    const tickerURL = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerURL);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = coinData.map(function ( values ) {
      let newValues = {...values};
      if(valueChangeId === values.key){
        newValues.price = newPrice;
      }
      return  newValues;
    });
    setCoinData(newCoinData);
  }

  const hideBalance = () => {
    setShowBalance(oldValue => !oldValue);
  }

  const handleTransaction = (isBuy, valueChangedId) => {
    var balanceChange = isBuy ? 1 : -1;
    const newCoinData = coinData.map(function (values){
      let newValues = {...values};
      if( valueChangedId === values.key){
        newValues.balance += balanceChange;
        setBalance(oldBalance => oldBalance - balanceChange * newValues.price);
      }
      return newValues;
    })
    setCoinData(newCoinData);
  }

    return (
      <Div className="App">
        <ExchangeHeader/>
        <AccountBalance 
        amount={balance} 
        showBalance={showBalance}
        handleBrrrr={handleBrrrr}
        hideBalance={hideBalance} />
        <CoinList 
        coinData={coinData} 
        handleRefresh={handleRefresh}
        handleTransaction={handleTransaction}
        showBalance={showBalance}/>
      </Div>
    );

}

export default App;

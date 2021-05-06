import React, { useState, useEffect } from 'react';
import { List, ListItem, Note } from '@contentful/forma-36-react-components';
import { SidebarExtensionSDK } from '@contentful/app-sdk';
import readingTime from 'reading-time';
import axios from 'axios'

interface SidebarProps {
  sdk: SidebarExtensionSDK;
}

const BTCPrice = (props: SidebarProps) => {
  const [btcStats, setBtcStats] = useState({'curRate': 0, "curTime": ''});

    useEffect(() => {
        let curRate
        let curTime

        // axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC', {
        axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?', {
            headers: {
                "X-CMC_PRO_API_KEY": `${process.env.REACT_COIN_MARKET_CAP}`,
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },    
            params: {
                'symbol': 'BTC'
            }, 
            })
            .then(response=> {
                console.log(response, "response")

                // curRate = response.data.rate
                // curTime = response.data.time
                // setBtcStats({curRate, curTime})
            })
    }, [btcStats])

  return (
    <>
      <Note style={{ marginBottom: '12px' }}>
        Current BTC Price:
        <List style={{ marginTop: '12px' }}>
            {btcStats.curRate}
        </List>
        <List style={{ marginTop: '12px' }}>
            {btcStats.curTime}
        </List>
      </Note>
    </>
  );
}

export default BTCPrice;

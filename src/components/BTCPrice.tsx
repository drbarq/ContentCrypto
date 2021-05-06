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

        axios.get('https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=600798C7-84CB-4842-B476-3D4427243952')
            .then(response=> {
                curRate = response.data.rate
                curTime = response.data.time
                setBtcStats({curRate, curTime})
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

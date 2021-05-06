import React, { useState, useEffect } from 'react';
import { List, ListItem, Note, Button } from '@contentful/forma-36-react-components';
import { SidebarExtensionSDK } from '@contentful/app-sdk';
import readingTime from 'reading-time';
import axios from 'axios'

interface SidebarProps {
  sdk: SidebarExtensionSDK;
}

const BTCPrice = (props: SidebarProps) => {
    const [btcStats, setBtcStats] = useState({'curRate': 0, "curTime": ''});
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        let curRate
        let curTime

        axios.get(`https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=${process.env.REACT_APP_COINAPI}`)
            .then(response=> {
                curRate = response.data.rate
                curTime = response.data.time
                setBtcStats({curRate, curTime})
            })
    }, [refresh])

    const updatePrice = () => {
        let curClick = refresh
        setRefresh(curClick + 1)
    }
  
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
        <Button buttonType="warning" onClick={() => setRefresh(refresh + 1)}>Update Price</Button>
      </>
    );
  }

export default BTCPrice;

import React, { useState, useEffect } from 'react';
import { List, ListItem, Note } from '@contentful/forma-36-react-components';
import { SidebarExtensionSDK } from '@contentful/app-sdk';
import readingTime from 'reading-time';
import axios from 'axios'

interface SidebarProps {
  sdk: SidebarExtensionSDK;
}
const CONTENT_FIELD_ID = 'body';

const btcPrice = () => {
    let curRate
    let curTime

    axios.get('https://rest.coinapi.io/v1/exchangerate/BTC?apikey=600798C7-84CB-4842-B476-3D4427243952')
        .then(function (response) {
            curRate = response.data.rates[3326].rate
            curTime = response.data.rates[3326].time
            // handle success
            console.log("Hello");
            console.log(response);
            console.log(response.data.rates[3326]);
            // return {
            //     curRate, curTime
            // }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
    });

        console.log(curTime, "curTime")
        console.log(curRate, "curRate")

    // return [
    //     curRate, 
    //     curTime
    // ]
    return '$54,454'
}



const Sidebar = (props: SidebarProps) => {
  const { sdk } = props;

  const contentField = sdk.entry.fields[CONTENT_FIELD_ID];

//   const [blogText, setBlogText] = useState(contentField.getValue());
  const [btcStats, setBtcStats] = useState('');

  // Listen for onChange events and update the value
//   useEffect(() => {
//     const detach = contentField.onValueChanged((value) => {
//         setBtcStats(value);
//     });
//     return () => detach();
//   }, [contentField]);

    useEffect(() => {
        setBtcStats(btcPrice())
        console.log(`hello, btcStats ${btcStats}`)
    }, [btcStats])

  // Calculate the metrics based on the new value
//   const stats = readingTime(blogText || '');

    // console.log( btcStats, 'btc stats')

  // Render the metrics with Forma36 components
  return (
    <>
      <Note style={{ marginBottom: '12px' }}>
        Current BTC Price:
        <List style={{ marginTop: '12px' }}>
            {btcPrice()}
        </List>
      </Note>
    </>
  );
//   // Render the metrics with Forma36 components
//   return (
//     <>
//       <Note style={{ marginBottom: '12px' }}>
//         Metrics for your blog post:
//         <List style={{ marginTop: '12px' }}>
//           <ListItem>Word count: {stats.words}</ListItem>
//           <ListItem>Reading time: {stats.text}</ListItem>
//         </List>
//       </Note>
//     </>
//   );
};


export default Sidebar;

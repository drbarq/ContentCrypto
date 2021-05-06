import React, { useState, useEffect } from 'react';
import { List, ListItem, Note } from '@contentful/forma-36-react-components';
import { SidebarExtensionSDK } from '@contentful/app-sdk';
import readingTime from 'reading-time';
import axios from 'axios'

interface SidebarProps {
  sdk: SidebarExtensionSDK;
}
const CONTENT_FIELD_ID = 'body';




// async function btcPrice2() {
//     let curRate
//     let curTime

//     try {
//       const response = await axios.get('https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=600798C7-84CB-4842-B476-3D4427243952')
//       curRate = response.data.rate
//       curTime = response.data.time
//     //   curRate = response.data.rates[3326].rate
//     //   curTime = response.data.rates[3326].time
//     //   console.log(response);
//       console.log(curRate, "curRate")
//       console.log(curTime, "curTime")
//     } catch (error) {
//       console.error(error);
//     }

//     // return '$54,454'

//     curStats = "yes"


//     return {
//         curRate, 
//         curTime
//     }

//   }




// const btcPrice = () => {
//     let curRate
//     let curTime

//     axios.get('https://rest.coinapi.io/v1/exchangerate/BTC?apikey=600798C7-84CB-4842-B476-3D4427243952')
//         .then(function (response) {
//             curRate = response.data.rates[3326].rate
//             curTime = response.data.rates[3326].time
//             // handle success
//             // console.log("Hello");
//             // console.log(response);
//             // console.log(response.data.rates[3326]);
//             // return {
//             //     curRate, curTime
//             // }
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
//         .then(function () {
//             // always executed
//     });

//         console.log(curTime, "curTime")
//         console.log(curRate, "curRate")

//     // return [
//     //     curRate, 
//     //     curTime
//     // ]
//     // return '$54,454'
//     return curRate
// }



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
        let curRate
        let curTime

        axios.get('https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=600798C7-84CB-4842-B476-3D4427243952')
            .then(response=> {
                curRate = response.data.rate
                curTime = response.data.time
            })
   
            //   curRate = response.data.rates[3326].rate
            //   curTime = response.data.rates[3326].time
            //   console.log(response);
            console.log(curRate, "curRate")
            console.log(curTime, "curTime")
       
    
        // setBtcStats(curStats)
        console.log(`hello, btcStats ${curRate} ${curTime}`)
    }, [])


  // Calculate the metrics based on the new value
//   const stats = readingTime(blogText || '');

    // console.log( btcStats, 'btc stats')

  // Render the metrics with Forma36 components
  return (
    <>
      <Note style={{ marginBottom: '12px' }}>
        Current BTC Price:
        <List style={{ marginTop: '12px' }}>
            {/* {curStats} */}
            "Hello"
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

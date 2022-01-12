import '../styles/globals.css'
import { useEffect, useState } from "react";
import { AppWrapper } from '../context/mystate.jsx'; 


export const isBrowser = typeof window !== "undefined";

function MyApp({ Component, pageProps }) {
/*
  const [wsInstance, setWsInstance] = useState(null);
  // (Optional) Open a connection on mount
  useEffect(() => {
    if(isBrowser) { 
      const ws = new WebSocket("ws://192.168.1.104:7890");
      setWsInstance(ws);
    }
    // Open the socket
    ws.onopen = function(event) {
      // Send an initial message
      ws.send('ws-client1!');
      // Listen for messages
      ws.onmessage = function(event) {
          console.log('Client received a message',event.data);
          //setTemprt(event.data);
      };
      // Listen for socket closes
      ws.onclose = function(event) {
          console.log('Client notified socket has closed',event);
      };
      // To close the socket....
      //ws.close()
    };

    return () => {
      // Cleanup on unmount if ws wasn't closed already
      if(ws?.readyState !== 3) 
        ws.close()
    }
  }, [])
  */
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp

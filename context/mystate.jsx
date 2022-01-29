// src/context/state.js
import { useEffect, useState } from "react";
import { createContext, useContext } from 'react';
//import { useState } from "react";


export const isBrowser = typeof window !== "undefined";

const AppContext = createContext();

export function AppWrapper({ children }) {
  ////
  //const [value, setValue] = useState(0);
  const [state, setState] = useState({
       value: '0',
       wght: '0',
       wght_sub: '0',
       wtr_height: '0px'
  });
  ////

  const [wsInstance, setWsInstance] = useState(null);
  // (Optional) Open a connection on mount
  useEffect(() => {
    if(isBrowser) {
      console.log(process.env.WS)
      const ws = new WebSocket(process.env.NEXT_PUBLIC_WS);
      setWsInstance(ws);
    }
    // Open the socket
    ws.onopen = function(event) {
      // Send an initial message
      ws.send('ws-client!');
      // Listen for messages
      ws.onmessage = function(event) {
          console.log('Client received a message',event.data);
          // coming message example: s1:700_s2:800_s3:900
          var sensors = event.data.split('_');
          var sensor1 = sensors[0].split(':');
          var sensor2 = sensors[1].split(':');
          var sensor3 = sensors[2].split(':');
          setState({ 
            wght: sensor1[1], 
            wtr_height: Math.round((sensor1[1]-process.env.NEXT_PUBLIC_DMCN) * 0.0157)+"px",
            wght_sub: sensor2[1],
            value: sensor3[1]
          });
          /**
          if (partsArray[0] == 's1')
          {
            setState({ wght: partsArray[1], wtr_height: Math.round((partsArray[1]-1000) * 0.0157)+"px" });
          }
          else if (partsArray[0] == 's2')
          	setState({ wght_sub: partsArray[1] })
          else if (partsArray[0] == 's3')
          	setState({ value: partsArray[1] })
          */
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

  return (
    <AppContext.Provider value={{ ...state, setState: (data) => setState({...state, ...data})}} >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
   if (!context)
    throw new Error('useAppContext must be used inside a `AppWrapper`')
  return context
}
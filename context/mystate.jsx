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
       wght_sub: '0'
  });
  ////

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
      ws.send('ws-client!');
      // Listen for messages
      ws.onmessage = function(event) {
          console.log('Client received a message',event.data);
          var partsArray = event.data.split(':');
          if (partsArray[0] == 's1')
          	setState({ wght: partsArray[1] });
          else if (partsArray[0] == 's2')
          	setState({ wght_sub: partsArray[1] })
          else if (partsArray[0] == 's3')
          	setState({ value: partsArray[1] })
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
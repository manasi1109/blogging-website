import { useEffect, useState } from 'react';
import AppContext from "./AppContext";

export default function AppState(props) {
    let [stater , setStater] = useState(false);


 
  return (
    <AppContext.Provider value={{
      stater , setStater
    }}>
        {props.children}
    </AppContext.Provider>
  )
}


import React, {createContext, useState} from 'react'

export const user = createContext();
export const propertycontext = createContext();

export function UserContext({children}){
    const [userState, setuserState] = useState([]);
    const [propertyState, setpropertyState] = useState({});

    return(
        <div>
        <user.Provider value={[userState, setuserState]}>
          <propertycontext.Provider value={[propertyState, setpropertyState]}>
            {children}
          </propertycontext.Provider>
        </user.Provider>
    </div>
    )
}
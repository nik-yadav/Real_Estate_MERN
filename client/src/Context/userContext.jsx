import React, {createContext, useState} from 'react'

export const user = createContext();
export const propertycontext = createContext();

export function UserContext({children}){
    const [userState, setuserState] = useState([]);
    const [propertyState, setpropertyState] = useState({});

    return(
        <div>
        <user.Provider value={[userState, setuserState]}>
            {children}
          {/* <propertycontext.Provider value={[propertyState, setpropertyState]}>
          </propertycontext.Provider> */}
        </user.Provider>
    </div>
    )
}
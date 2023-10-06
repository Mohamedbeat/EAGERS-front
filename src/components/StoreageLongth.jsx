import { Children, createContext, useContext, useState } from "react";
const len = JSON.parse(localStorage.getItem('cart'))
export const StoreContext = createContext(len)

export const StoreProvider = (props)=>{
    const [storelen, setStoreLen] = useState(len)
    return(
        <StoreContext.Provider value={{storelen , setStoreLen}}>
            {props.children}
        </StoreContext.Provider> 
    )
}

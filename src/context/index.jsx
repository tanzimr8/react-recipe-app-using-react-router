import React, { createContext, useState } from 'react'

export const GlobalContext = createContext(null);
const GlobalState = ({children}) => {
    const [search,setSearch] = useState('');
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`);
            const data = await response.json();
            console.log(data);
        }
        catch(e){
            console.log(e);
        }
    }
  return (<GlobalContext.Provider value={{search,setSearch,handleSubmit}} >{children}</GlobalContext.Provider>)
}

export default GlobalState;

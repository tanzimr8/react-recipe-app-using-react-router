import React, { createContext, useState } from 'react'

export const GlobalContext = createContext(null);
const GlobalState = ({children}) => {
    const [search,setSearch] = useState('');
    const [loading,setLoading] = useState(false);
    const [recipeLists,setRecipeLists] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try{
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`);
            const result = await res.json();
            if(result?.data?.recipes){
                setRecipeLists(result?.data?.recipes);
                setLoading(false);
                setSearch(''); 
            }
        }
        catch(e){
            console.log(e);
            setLoading(false);
        }
    }
    console.log("HOISEEE",recipeLists);
  return (<GlobalContext.Provider value={{search,setSearch,handleSubmit,loading,recipeLists,errorMessage}} >{children}</GlobalContext.Provider>)
}

export default GlobalState;

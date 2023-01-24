import React from 'react'
import { useState,useEffect } from 'react';
import { createContext } from 'react'

export const DataContex = createContext();

export const Dataprovider = (props) => {
    
    const itemStore = JSON.parse(localStorage.getItem('itemStore'))
       
  const [todos, setTodos] = useState(() => {
    return itemStore ? itemStore : []
  })
//   useEffect(() => {
//     const itemStore = JSON.parse(localStorage.getItem('itemStore'))
//     if(itemStore) setTodos(itemStore)
// }, [])
    
    useEffect(() => {
        localStorage.setItem('itemStore',JSON.stringify(todos))
    }, [todos])
  
    return (
      <DataContex.Provider value={[todos,setTodos]}>{props.children}</DataContex.Provider>
  )
}

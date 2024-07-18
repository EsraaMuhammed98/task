import axios from "axios";
import { createContext, useEffect, useState } from "react";
import data from '../Json/db.json';
import { json } from "react-router-dom";

export let dataContext= createContext();
 
export default function DataContextProvider({children}){
    let [customersTransactions, setCustomersTransactions] = useState([]);

 
    let [transactions, setTransactions] = useState([]);
  let [customers, setCustomers] = useState([]);
   
    async function getCustomers() {
        try {
          let data = await axios.get(`http://localhost:3000/customers`);
          if (data.status === 200 && data.statusText === "OK")
            setCustomers(data.data);
        } catch (error) {}
      }
      async function getTransactions() {
        try {
          let data = await axios.get(`http://localhost:3000/transactions`);
          if (data.status === 200 && data.statusText === "OK")
            setTransactions(data.data);
        } catch (error) {}
      }
      useEffect(()=>{
        setTransactions(data.transactions);
        setCustomers(data.customers)
      },[])
 
    return <dataContext.Provider value={{getCustomers,getTransactions,customers,transactions,customersTransactions,setCustomersTransactions}}>
        {children}

    </dataContext.Provider>
}
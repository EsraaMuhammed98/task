import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import Styles from "./Graph.module.css";
import { dataContext } from "../Context/Data";
export default function Graph() {
  
  let {getTransactions,getCustomers,customers,transactions}=useContext(dataContext)
  let [customersTransactions, setCustomersTransactions] = useState([]);

async function getCustomersData(){
  let data = await getTransactions()
}
async function getTransactionsData(){
  let data = await getCustomers()

}
  useEffect(() => {
    getCustomersData();
    getTransactionsData();

 if (customers.length && transactions.length) {
        const customersAndTransactions = [];
        customers.forEach((customer) => {
          const customerTransactions = transactions.filter(
            (transaction) => transaction.customer_id == customer.id
          );
          customersAndTransactions.push({
            id: customer.id,
            name: customer.name,
            data: customerTransactions.map((transaction) => {
              return {    
                date: transaction.date,
                amount: transaction.amount,
              };
            }),
          });
        });
  
        setCustomersTransactions(customersAndTransactions);
      }
},[customers, transactions]) 
  return (
    <>

      <div className={Styles.graph}>
        <Bar
          data={{
            labels: customersTransactions.map((customer) => customer.name),
            datasets: [
              {
                label: "Transaction 1",
                data: customersTransactions.map((amo) => amo.data[0].amount),
              },
              {
                label: "Transaction 2",
                data: customersTransactions.map((amo) => amo.data?.[1]?.amount),
              },
            ],
          }}
        />
      </div>
    </>
  );
}

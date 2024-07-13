import { useContext, useEffect, useState } from "react"
import { dataContext } from "../Context/Data";

export default function Table(){
    // let [customersTransactions, setCustomersTransactions] = useState([]);

  let {customers,transactions,getCustomers,getTransactions,customersTransactions, setCustomersTransactions} = useContext(dataContext)
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


    return <>
 <table className="table table-bordered my-5">
 <thead>
          <tr className="text-center">
            <th>Customer Name</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {customersTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.name}</td>

              <td>
                {transaction.data.map((t,index) => (
                  <div key={index}>
                    <div>{t.date}</div>
                   </div>
                ))}
              </td>
              <td>
                {transaction.data.map((t,index) => (
                  <div key={index}>
                    <div>{t.amount}</div>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
</table>
      </>
}
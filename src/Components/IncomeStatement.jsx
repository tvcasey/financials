



import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

function IncomeStatement() {

  const [income, setIncome] = useState({annualReports: []});

useEffect(() => {
  axios.get('https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=demo')
    .then(res => {
      console.log(res.data);
      setIncome(res.data);
    })
    .catch(error => {
      console.log(error);
    })
}, []);


  return (
    <Table striped>      
        <div>            
              {income.annualReports.map((annualReports) => ( 
              <div key={annualReports.fiscalEndingDate}>
        <thead>
          <tr>
            <th>INCOME STATEMENT</th>
            <th>{annualReports.fiscalDateEnding}(billions)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Total Revenue</th>
            <td>{annualReports.totalRevenue/1000000000}</td>
          </tr>
          <tr>
            <th scope="row">Total Operating Expense</th>
            <td>{annualReports.totalOperatingExpense/1000000000}</td>
          </tr>
          <tr>
            <th scope="row">Cost of Revenue</th>
            <td>{annualReports.costOfRevenue/1000000000}</td>
          </tr>
          <tr>
            <th scope="row">Gross Profit</th>
            <td>{annualReports.grossProfit/1000000000}</td>
          </tr>
          <tr>
            <th scope="row">Ebit</th>
            <td>{annualReports.ebit/1000000000}</td>
          </tr>
          <tr>
            <th scope="row">Net Income</th>
            <td>{annualReports.netIncome/1000000000}</td>
          </tr>
        </tbody>
        </div>
                  ))}
      </div>
    </Table>
        );
}

export default IncomeStatement;
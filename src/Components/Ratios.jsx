import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import $ from 'jquery';

function Ratios() {

  const [ratio, setRatio] = useState("");
  //const [stock, setStock] = useState(" ");



useEffect(() => {
  axios.get('https://www.alphavantage.co/query?function=OVERVIEW&symbol=ratio&apikey=W76ULI2MV44V3PSF')
    .then(res => {
      console.log(res.data);
      setRatio(res.data);
    })
    .catch(error => {
      console.log(error);
    })
}, []);

// onChange() {
//     Stock
// }
  const handleChange = (event) => {
    setRatio(event.target.value);
    console.log(event);
  }
  const handleSubmit = (event) => {
    alert("Change the stock ticker to: " + ratio);
    setRatio(ratio);
    event.preventDefault();
  }

  return (     
    <Table striped>      
      <div>
          <form onSubmit={handleSubmit}>
            <input 
              type='text'
              placeholder='Enter Stock Symbol'
              value={ratio}
              onChange={handleChange}/>
            <button type="submit" value="Submit">Press Me</button>                       
          </form>
        <thead>
          <tr>
            <th scope='row'>STOCK</th>
            <td>{ratio.Symbol}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">DESCRIPTION</th>
            <td>{ratio.Description}</td>
          </tr>
          <tr>
            <th scope="row">MARKET CAPITILIZATION (in billions)</th>
            <td>{ratio.MarketCapitalization/1000000000}</td>
          </tr>
          <tr>
            <th scope="row">EBITDA (in billions)</th>
            <td>{ratio.EBITDA/1000000000}</td>
          </tr>
          <tr>
            <th scope="row">DIVIDEND YIELD</th>
            <td>{ratio.DividendYield}</td>
          </tr>
          <tr>
            <th scope="row">DIVIDEND PER SHARE</th>
            <td>{ratio.DividendPerShare}</td>
          </tr>
          <tr>
            <th scope="row">SHARES OUTSTANDING (in billions)</th>
            <td>{ratio.SharesOutstanding/1000000000}</td>
          </tr>
        </tbody>
      </div>  
                  ))
    </Table>
        );
}

export default Ratios;
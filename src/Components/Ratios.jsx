import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

function Ratios() {

  const [ratio, setRatio] = useState("");
  const [stock, setStock] = useState(" ");



useEffect(() => {
  axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stock}&apikey=W76ULI2MV44V3PSF`)
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
  const onChange = (event) => {
    setStock(event.target.value);
    console.log(event);
  }


  return (     
    <Table striped>      
        <div>
            <input 
              type='text'
              placeholder='Enter Stock Symbol'
              value={stock}
              onChange={onChange}/>
                      
        <thead>
          <tr>
            <th>COMPANY</th>
            <th>{ratio.Symbol}</th>
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
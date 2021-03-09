



import React from 'react';
import { Table } from 'reactstrap';

const IncomeStatement = (props) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>NET INCOME</th>
          <th>YEAR</th>
          <th>REVENUES</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>ROMAN</td>
          <td>GREEK</td>
          <td>OTTOMAN</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default IncomeStatement;
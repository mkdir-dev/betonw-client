import React from 'react';
import './PriceList.scss';
import {
  titleTable, nameTable, concreteMix, concreteSolution,
} from '../../../../utils/price_db';

function PriceList() {
  return (
    <section className="container-priceList">
      <h1>Прайс лист</h1>
      <table>
        <tr>
          <td>{titleTable.nameproduct}</td>
          <td>{titleTable.properties}</td>
          <td>{titleTable.price}</td>
          <td>{titleTable.VAT}</td>
          <td>{titleTable.cash}</td>
        </tr>
        <tr>
          <td>{nameTable.concreteMixName}</td>
        </tr>
        {
          concreteMix.map((item) => (
            <tr key={item.id}>
              <td>{item.nameproduct}</td>
              <td>{item.properties}</td>
              <td>{item.price}</td>
              <td>{item.VAT}</td>
              <td>{item.cash}</td>
            </tr>
          ))
        }
        <tr>
          <td>{nameTable.concreteSolutionName}</td>
        </tr>
        {
          concreteSolution.map((item) => (
            <tr key={item.id}>
              <td>{item.nameproduct}</td>
              <td>{item.properties}</td>
              <td>{item.price}</td>
              <td>{item.VAT}</td>
              <td>{item.cash}</td>
            </tr>
          ))
        }
      </table>
    </section>
  );
}

export default PriceList;

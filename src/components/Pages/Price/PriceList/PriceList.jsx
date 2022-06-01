import React from 'react';
import './PriceList.scss';
import {
  titleTable,
  nameTable,
  concreteMix,
  concreteSolution,
} from '../../../../utils/price_db';

function PriceList() {
  return (
    <section className="container-priceList">
      <article className="container-priceList__header">
        <h1 className="container-priceList__header-title">Прайс лист</h1>
        <button type="button" className="container-priceList__header-btnOrder">
          Заказать
        </button>
      </article>
      <table className="container-priceList__table">
        <thead>
          <tr>
            <th>{titleTable.nameproduct}</th>
            <th>{titleTable.properties}</th>
            <th>{titleTable.price}</th>
            <th>{titleTable.VAT}</th>
            <th>{titleTable.cash}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5} className="container-priceList__table_name">
              {nameTable.concreteMixName}
            </td>
          </tr>
          {concreteMix.map((item) => (
            <tr key={item.id}>
              <td>{item.nameproduct}</td>
              <td>{item.properties}</td>
              <td>{item.price}</td>
              <td>{item.VAT}</td>
              <td>{item.cash}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={5} className="container-priceList__table_name">
              {nameTable.concreteSolutionName}
            </td>
          </tr>
          {concreteSolution.map((item) => (
            <tr key={item.id}>
              <td>{item.nameproduct}</td>
              <td>{item.properties}</td>
              <td>{item.price}</td>
              <td>{item.VAT}</td>
              <td>{item.cash}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default PriceList;

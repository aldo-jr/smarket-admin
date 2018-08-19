import React from 'react';
import {Link} from 'react-router-dom';


const PlainBackgroundTable = ({ data }) => (
  <div className="card card-plain">
    <div className="header">
      <h4 className="title">Lista de Produtos</h4>
    </div>
    <div className="content table-responsive table-full-width">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => item.IdMarket === 1 && (
            <tr key={item.Id}>
              <td>{item.Id}</td>
              <td>{item.Name}</td>
              <td>{item.Price}</td>
              <td>{item.StockQuantity}</td>
              <td>
                <div className="content buttons-with-margin">
                  <Link className="btn btn-info btn-fill btn-wd" to="/tables/regular-forms">Lista / Editar</Link>
                  <button className="btn btn-danger btn-fill btn-wd">Excluir</button>
                </div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PlainBackgroundTable;
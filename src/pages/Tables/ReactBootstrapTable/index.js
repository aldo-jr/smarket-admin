import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import generateData from '../generateData';
import { getProductsList } from '../../../calls/ProductsCalls';



class ReactBootstrapTable extends Component {

  state = {
    data: []
  };

  componentWillMount() {
    getProductsList(1)
    .then(res => {
      console.log('response', res)
      this.setState({data: res})
    })
  }

  render() {
    const { data } = this.state;
    const options = {
      sizePerPage: 20,
      prePage: 'Anterior',
      nextPage: 'Próximo',
      firstPage: 'Primeiro',
      lastPage: 'Último',
      hideSizePerPage: true,
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="header">
                <h4>Lista de produtos</h4>
              </div>
              <div className="content">
                <BootstrapTable
                  data={data}
                  bordered={false}
                  striped
                  pagination={true}
                  options={options}>
                  <TableHeaderColumn
                    dataField='id'
                    isKey
                    width="50px"
                    dataSort>
                    Cód
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='name'
                    width="15%"
                    filter={ { type: 'TextFilter'} }
                    dataSort>
                    Nome
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='price'
                    width="15%"
                    dataSort>
                    Preço
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='sale'
                    width="15%"
                    dataSort>
                    Desconto
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='stock'
                    width="15%">
                    Estoque
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='actions'
                    width="30%">
                    Ações
                  </TableHeaderColumn>
                </BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default ReactBootstrapTable
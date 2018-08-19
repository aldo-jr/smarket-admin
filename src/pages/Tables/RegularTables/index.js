import React from 'react';
import generateData from '../generateData';
import StripedTable from './StripedTable';
import PlainBackgroundTable from './PlainBackgroundTable';
import { getProductsList } from '../../../calls/ProductsCalls';

class RegularTables extends React.Component {
  constructor() {
    super();
    this.state = { data: [] }
  }

  componentWillMount() {
    getProductsList(1).then(res => {console.log("RESPONSEEEEEE", res); this.setState({ data: res })})
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <PlainBackgroundTable data={this.state.data} />
          </div>
        </div>
      </div>
    )
  }
}
export default RegularTables;
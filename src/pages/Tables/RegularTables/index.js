import React from 'react';

import PlainBackgroundTable from './PlainBackgroundTable';
import { getProductsList } from '../../../calls/ProductsCalls';

class RegularTables extends React.Component {
  constructor() {
    super();
    this.state = { data: [] }
  }

  componentWillMount() {
    getProductsList(1).then(res => this.setState({ data: res }))
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
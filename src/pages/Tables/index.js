import React from 'react';
import { Route } from 'react-router-dom';
import RegularTables from './RegularTables';
import RegularForms from './RegularForms';

const Tables = ({match}) => (
  <div className="content">
    <Route path={`${match.url}/regular-tables`} component={RegularTables} />
    <Route path={`${match.url}/regular-forms`} component={RegularForms} />
  </div>
);

export default Tables;
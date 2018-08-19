import React from 'react';
import FormElements from './FormElements';

const RegularForms = () => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <FormElements initialValues={{
          radioGroup: 'male',
          a: true,
          checked: true,
          disabledChecked: true,
          radioOnOff: 'on',
          radioDisabledOnOff: 'on'
        }} />
      </div>
    </div>
  </div>
);

export default RegularForms;
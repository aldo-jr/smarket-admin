import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';
import TypeAheadField from '../../../components/FormInputs/AutosuggestInput';

const items = ["Amaciante", "Sabão em pó", "Maçã", "Maionese", "Granola]", "Biscoito", "Creme dental", "Torrada", "Batata", "Banana", "Melão", "Melancia", "Gelatina", "OMO 1 KG"];
const categorias = ["Limpeza", "Bebida", "Carnes", "Bebês", "Alimentos", "Perfumaria", "Feira", "Roupas"]

const FormElements = ({
  submitting,
  handleSubmit,
  submitForm
}) => (
    <div className="card">
      <div className="header">
        <h4>Formulário de produto</h4>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit} className="form-horizontal">

          <div className="form-group">
            <label className="control-label col-md-3">Categoria</label>
            <div className="col-md-9">
              <TypeAheadField name="fruit" items={categorias} />
            </div>
          </div>


          <div className="form-group">
            <label className="control-label col-md-3">Nome</label>
            <div className="col-md-9">
              <TypeAheadField name="name" items={items} />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-md-3">Preço</label>
            <div className="col-md-9">
              <Field
                name="price"
                type="text"
                component={renderField} />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-md-3">Estoque</label>
            <div className="col-md-9">
              <Field
                name="stock"
                type="number"
                component={renderField} />
            </div>
          </div>

          <br />
          <fieldset>
            <div className="col-sm-2 control-label" />
            <div className="col-sm-4 col-sm-offset-1 checkbox-group">

              <button type="submit" className="btn btn-fill btn-info" disabled={submitting}>Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );

export default reduxForm({
  form: 'formElements'
})(FormElements);
import React from 'react';
import ChartistGraph from 'react-chartist';
import Alert from 'sweetalert-react';

class EmailStatistic extends React.Component {
  state = {};


  render() {
    return (
      <div>
        {this.state.finalizado || (
          <div className="card" style={{ padding: '0 15px 15px', background: this.state.finalizado ? '#d4edda' : '#fff3cd', border: this.state.finalizado ? '1px solid #c3e6cb' : '1px solid #ffeeba', color: this.state.finalizado ? '' : '#155724' }} >
            <div class="alert alert-success" style={{ padding: '0 15px' }} role="alert">
              <h4 class="alert-heading">Notificação de pedido!</h4>


              <button className="btn btn-default btn-fill" style={{ marginRight: '10px' }} onClick={() => this.setState({ message1: true })}>Lista de produtos!</button>
              <button className="btn btn-success btn-fill" style={{ marginLeft: '10px' }} onClick={() => this.setState({ message5: true })}>Lista separada!</button>


              <Alert
                title="Lista"
                show={this.state.message1}
                text={`
          1 x Sabão em pó, Omo 1 kg
          2 x Sabonete LUX
          5 x Maçã
          `}
                onConfirm={() => this.setState({ message1: false })} />

              <Alert
                title="Finalizar separação da lista?"
                show={this.state.message5}
                text="Ao finalizar, encaminharemos alguém para retirar a compra."
                showCancelButton
                onConfirm={() => this.setState({ showDeleteSuccessAlert: true })}
                onCancel={() => this.setState({ message5: false })} />

              <Alert
                title="Finalizado"
                show={this.state.showDeleteSuccessAlert}
                text="Agora é só aguardar."
                type="success"
                onConfirm={() => {
                  this.setState({ showDeleteSuccessAlert: false })
                  this.setState({ finalizado: true })
                }} />
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default EmailStatistic;
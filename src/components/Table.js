import React from 'react';
import { connect } from 'react-redux';

const TABLE_CATEGORIES = ['Descrição', 'Tag', 'Método de pagamento', 'Valor',
  'Moeda', 'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão',
  'Editar/Excluir'];

class Table extends React.Component {
  constructor() {
    super();

    this.tableTitles = this.tableTitles.bind(this);
  }

  tableTitles() {
    return TABLE_CATEGORIES.map((cat) => (
      <th key={ cat }>{cat}</th>
    ));
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            {this.tableTitles()}
          </tr>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tag: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);

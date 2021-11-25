import React from 'react';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';
import WalletHeader from '../components/WalletHeader';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <WalletForm />
        <Table />
      </div>
    );
  }
}

export default Wallet;

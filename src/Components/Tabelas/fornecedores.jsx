import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

import { obterDadosTabela } from '../../Models/Api'

let rows = [
  { id: 1, codigo: 1, fornecedor: 'Laticinio Scala' }
];

const columns = [
  { field: 'codigo_fornecedor', headerName: 'Codigo do Fornecedor', width: 150 },
  { field: 'nome', headerName: 'Nome do Fornecedor', width: 150 }
];

export default function App() {
  const [carregando, setCarregando] = React.useState(true);
  React.useEffect(() => {
    obterDadosTabela('fornecedores')
      .then(result => {
        for (let i = 0; i < result.data.length; i++) {
          rows[i] = {
            ...result.data[i],
            id: i
          }
        }
        console.log(rows);
        setCarregando(false);
      })
  }, [])
  if (carregando === false) {
    return (
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    );
  }
  else {
    return (
      <h1>Carregando, por favor aguarde...</h1>
    )
  }
}
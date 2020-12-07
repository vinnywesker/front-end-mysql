import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const rows = [
  { id: 1, data: 'Exemplo de Data', nome: 'Parafuso', descricao: 'Exemplo de descrição', quantidade: 200 }
];

const columns = [
  { field: 'data', headerName: 'Data da Movimentação', width: 150 },
  { field: 'nome', headerName: 'Nome do Produto', width: 150 },
  { field: 'descricao', headerName: 'Especificação do Produto', width: 150 },
  { field: 'quantidade', headerName: 'Quantidade', width: 150 },
];

export default function App() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
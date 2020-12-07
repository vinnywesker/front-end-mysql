import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';

import BusinessIcon from '@material-ui/icons/Business';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import TabelaMovimentacoes from '../Tabelas/movimentacoes'
import TabelaFornecedores from '../Tabelas/fornecedores'

import BotaoTopoTabela from '../Botoes/cimaTabela'

import DialogAddFornecedor from '../Dialogs/addFornecedor'

import { inserirFornecedor } from '../../Models/Api'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [dialogAddFuncOpen, SetDialogAddFuncOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let addFornecedor = { nome: null };
  const ClickAddFornecedor = () => {
    if (addFornecedor.nome === null || addFornecedor.nome.length <= 2) return alert("Nome  inválido!\n\nVocê precisa digitar um nome para o fornecedor.")
    inserirFornecedor(addFornecedor.nome)
      .then(result => {
        SetDialogAddFuncOpen(false);
        alert(result.data.mensagem);
      })
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Listar Movimentações" icon={<ClearAllIcon />} {...a11yProps(0)} />
          <Tab label="Fornecedores" icon={<BusinessIcon />} {...a11yProps(1)} />
          <Tab label="Produtos" icon={<AttachFileIcon />} {...a11yProps(2)} />
          <Tab label="Estoque" icon={<AssignmentTurnedInIcon />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BotaoTopoTabela
          Icone="Refresh"
          Title="Atualizar"
          Click={() => { }}
        />
        <BotaoTopoTabela
          Icone="Add"
          Title="Adicionar Item"
          Click={() => { }}
        />
        <TabelaMovimentacoes />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BotaoTopoTabela
          Icone="Refresh"
          Title="Atualizar"
          Click={() => { }}
        />
        <BotaoTopoTabela
          Icone="Add"
          Title="Adicionar Item"
          Click={() => SetDialogAddFuncOpen(true)}
        />
        <TabelaFornecedores />
        {/* ============== dialog ===========*/}
        <DialogAddFornecedor
          Title="Adicionar Fornecedor"
          Message="Digite os dados do Fornecedor para Adiciona-lo ao Banco de Dados."
          Open={dialogAddFuncOpen}
          State={SetDialogAddFuncOpen}
          Click={ClickAddFornecedor}
        >
          <TextField
            autoFocus
            margin="dense"
            label="Digite o nome do fornecedor"
            type="text"
            onChange={e => {
              addFornecedor.nome = e.target.value;
            }}
            fullWidth
          />
        </DialogAddFornecedor>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}

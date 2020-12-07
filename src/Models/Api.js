import Axios from './Axios'

const inserirProduto = async (Nome) => {
    const post = await Axios.post('/mysql', {
        nome: Nome
    },
        {
            headers: {
                operation: 'produtos'
            }
        });
    return post;
}

const inserirFornecedor = async (Nome) => {
    const post = await Axios.post('/mysql', {
        nome: Nome
    },
        {
            headers: {
                operation: 'fornecedores'
            }
        });
    return post;
}

const inserirDescricao = async (Descricao) => {
    const post = await Axios.post('/mysql', {
        descricao: Descricao
    },
        {
            headers: {
                operation: 'descricao'
            }
        });
    return post;
}

const inserirMovimentacao = async (CodFornecedor, CodDescricao, CodProduto, Quantidade, Valor, Transportadora, ValorFrete) => {
    const post = await Axios.post('/mysql', {
        fk_codigo_fornecedor: CodFornecedor,
        fk_cod_descricao: CodDescricao,
        fk_codigo_produto: CodProduto,
        quantidade: Quantidade,
        valor: Valor,
        transportadora: Transportadora,
        valor_frete: ValorFrete
    },
        {
            headers: {
                operation: 'entrada_saida'
            }
        });
    return post;
}

const obterDadosTabela = async (Tabela) => {
    const metodoGet = await Axios.get('/mysql',
        {
            headers: {
                operation: Tabela
            }
        });
    return metodoGet;
}

const deletarItem = async (Tabela, Codigo) => {
    const deleting = await Axios.delete('/mysql', {
        data: {
            codigo: Codigo
        },
        headers: {
            operation: Tabela
        }
    });

    return deleting;
}

export {
    inserirProduto,
    inserirFornecedor,
    inserirDescricao,
    inserirMovimentacao,
    obterDadosTabela,
    deletarItem
}
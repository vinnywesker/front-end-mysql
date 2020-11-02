import Axios from '../Controller/Axios'

const inserirProduto = async (Nome, Quantidade, CodFornecedor, CodDescricao) => {
    const post = await Axios.post('/produtos', {
        key_CodFornecedor: CodFornecedor,
        key_CodDescricao: CodDescricao,
        Nome: Nome,
        Quantidade: Quantidade
    },
        {
            headers: {
                operation: 'produto'
            }
        });
    return post;
}

const inserirFornecedor = async (Nome) => {
    const post = await Axios.post('/produtos', {
        Nome: Nome
    },
        {
            headers: {
                operation: 'fornecedor'
            }
        });
    return post;
}

const inserirDescricao = async (Nome) => {
    const post = await Axios.post('/produtos', {
        Nome: Nome
    },
        {
            headers: {
                operation: 'descricao'
            }
        });
    return post;
}
const deletarItem = async (Tabela, Codigo) => {
    const deleting = await Axios.delete('/produtos', {
        data: {
            Codigo: Codigo
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
    deletarItem
}
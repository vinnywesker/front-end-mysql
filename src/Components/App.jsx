import React from 'react'
import { inserirProduto, deletarItem } from '../Models/Api'

export default props => {

    return (
        <div className="principal_app">
            <div className="div_button">
                <button className="botao_teste" onClick={() => {
                    deletarItem("produto", 1)
                        .then(result => {
                            console.log(result);
                            alert("Deletado");
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }}>Aperte-me</button>
            </div>
        </div>
    )
}
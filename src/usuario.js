import { useState } from "react";

export default function Usuario() {
    const [nomeDoUsuario,setNomeDoUsuario]= useState('Mude seu nome aqui =>')

    function alteraNome(){
        const nomeRecebido = prompt('Digite seu Nick ou seu Nome');
        nomeRecebido?setNomeDoUsuario(nomeRecebido):setNomeDoUsuario(nomeDoUsuario);
    }

    const [fotoDoUsuario, setFotoDoUsuario] = useState("assets/perfil.png")
    function alteraFoto(){
        const novaFoto = prompt('Coloque aqui o link da sua belíssima foto de perfil!')
        novaFoto?setFotoDoUsuario(novaFoto):setFotoDoUsuario(fotoDoUsuario); 
    }
    return (
        <div class="topo-sidebar">
            <img onClick={alteraFoto} src={fotoDoUsuario} />
            <div>
                <h1>{nomeDoUsuario}</h1>
            </div>
            <img onClick={alteraNome} src="assets/pencil.png"/>
        </div>
    )
}

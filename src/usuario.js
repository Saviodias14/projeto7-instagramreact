import { useState } from "react";


function User(props){
    return(
        <div className="topo-sidebar">
            <img data-test="profile-image" onClick={props.alteraFoto} src={props.fotoDoUsuario} />
            <div>
                <h1 data-test="name">{props.nomeDoUsuario}</h1>
            </div>
            <img data-test="edit-name" onClick={props.alteraNome} src="assets/pencil.png"/>
        </div>
    )
}
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
        <User alteraFoto={alteraFoto} alteraNome={alteraNome} fotoDoUsuario={fotoDoUsuario} nomeDoUsuario={nomeDoUsuario}/>
    )
}

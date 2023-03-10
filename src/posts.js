import { useState } from "react"

const listaDePostagens = [
    { imagemPerfil: "assets/hp-logo.jpg", nomePerfil: "harrypotterfilm", imagemPost: "assets/harry-potter.jpg", imagemCurtidaDestaque: "assets/cruzeiro.jpg", nomePerfilCurtidaDestaque: "cruzeiro", numeroDeCurtidas: "678", descricao: "After all this time? Always!!", numeroDeComentarios: "365", nomeDoSeuPerfil: "savio_viana14", seuComentario: "Amo Harry Potter!!! 😍😍😍"},
    { imagemPerfil: "assets/racionais-logo.jpg", nomePerfil: "racionaiscn", imagemPost: "assets/racionais.jpg", imagemCurtidaDestaque: "assets/Driven.png", nomePerfilCurtidaDestaque: "Driven", numeroDeCurtidas: "176599", descricao: "Nada Como um Dia Após o Outro Dia, Vol.1", numeroDeComentarios: "7899", nomeDoSeuPerfil: "savio_viana14", seuComentario: "A Vida É Desafio é a música desse albúm que mais me emociona!!"},
    { imagemPerfil: "assets/djonga-logo.png", nomePerfil: "djongador", imagemPost: "assets/djonga.jpg", imagemCurtidaDestaque: "assets/itau.jpg", nomePerfilCurtidaDestaque: "itau", numeroDeCurtidas: "260065", descricao: "Em 2017 eu lançava o albúm Heresia e foi algo que mudou minha vida e minha carreira.", numeroDeComentarios: "750", nomeDoSeuPerfil: "savio_viana14", seuComentario: "Albúm maravilhosoooo! Um tapa na cara da sociedade."},
    { imagemPerfil: "assets/Driven.png", nomePerfil: "driven.education", imagemPost: "assets/gatinho.png", imagemCurtidaDestaque: "assets/perfil.png", nomePerfilCurtidaDestaque: "savio_viana14", numeroDeCurtidas: "2078", descricao: "Seria isso um spoiler do que vem por ai???????????", numeroDeComentarios: "58", nomeDoSeuPerfil: "savio_viana14", seuComentario: "Asioso por isso!!"}
]

function Postagem(props) {
    const [tipo, setTipo] = useState('bookmark-outline')
    const [coracao, setCoracao] = useState("heart-outline")
    const [color,setColor] = useState('#000000')
    function like(){
        setCoracao("heart")
        setColor('#ff0000')
        
    }
    function deslike(){
        setCoracao("heart-outline")
        setColor('#000000')
        
    }
    return (
        <div data-test="post" className="post">
            <div className="topo-post">
                <div className="perfil-post">
                    <img src={props.imagemPerfil} />
                    <h1>{props.nomePerfil}</h1>
                </div>
                <ion-icon
                    className="icons"
                    name="ellipsis-horizontal-sharp"
                ></ion-icon>
            </div>
            <img data-test="post-image" src={props.imagemPost} className="imagem-post" onDoubleClick={()=>coracao==="heart-outline"?like():""}/>
            <div className="base-post">
                <div className="reacao">
                    <div>
                        <ion-icon data-test="like-post" className="icons" style={{color:color}} name={coracao} onClick={()=>coracao==="heart-outline"?like():deslike()}></ion-icon>
                        <ion-icon className="icons" name="chatbubble-outline"></ion-icon>
                        <ion-icon className="icons" name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={()=>tipo==='bookmark-outline'?setTipo('bookmark-sharp'):setTipo('bookmark-outline')} className="icons" name={tipo}></ion-icon>
                    </div>
                </div>
                <div className="curtido-por">
                    <img src={props.imagemCurtidaDestaque} />
                    <p>
                        Curtido por <span>{props.nomePerfilCurtidaDestaque}</span> e
                        <span data-test="likes-number"> outras {coracao==="heart-outline"?props.numeroDeCurtidas:Number(props.numeroDeCurtidas)+1} pessoas</span>
                    </p>
                </div>
                <div className="comentarios">
                    <div className="comentario">
                        <div>
                            <p>
                                <span className="perfil">{props.nomePerfil} </span>{props.descricao}
                            </p>
                        </div>
                    </div>
                    <div className="ver-comentarios">
                        <p>Ver todos os {props.numeroDeComentarios} comentários</p>
                    </div>
                    <div className="comentario">
                        <div>
                            <p>
                                <span className="perfil">{props.nomeDoSeuPerfil} </span>{props.seuComentario}
                            </p>
                        </div>
                        <div>
                            <ion-icon className="icons" name="heart-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className="caixa-de-comentario">
                    <textarea
                        name="comentario"
                        placeholder="Deixe seu comentário..."
                        cols="30"
                    ></textarea>
                    <p>Publicar</p>
                </div>
            </div>
        </div>
    )
}


export default function Posts() {
    return (
        <div>
            {listaDePostagens.map(scr => <Postagem imagemPerfil={scr.imagemPerfil} nomePerfil={scr.nomePerfil} imagemPost={scr.imagemPost} imagemCurtidaDestaque={scr.imagemCurtidaDestaque} nomePerfilCurtidaDestaque={scr.nomePerfilCurtidaDestaque} numeroDeCurtidas={scr.numeroDeCurtidas} descricao={scr.descricao} numeroDeComentarios={scr.numeroDeComentarios} nomeDoSeuPerfil={scr.nomeDoSeuPerfil} seuComentario={scr.seuComentario}/>)}
        </div>
    )
}
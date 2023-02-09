const listaDePostagens = [
    { imagemPerfil: "assets/hp-logo.jpg", nomePerfil: "harrypotterfilm", imagemPost: "assets/harry-potter.jpg", imagemCurtidaDestaque: "assets/cruzeiro.jpg", nomePerfilCurtidaDestaque: "cruzeiro", numeroDeCurtidas: "678", descricao: "After all this time? Always!!", numeroDeComentarios: "365", nomeDoSeuPerfil: "eu", seuComentario: "Amo Harry Potter!!! 😍😍😍" },
    { imagemPerfil: "assets/racionais-logo.jpg", nomePerfil: "racionaiscn", imagemPost: "assets/racionais.jpg", imagemCurtidaDestaque: "assets/Driven.png", nomePerfilCurtidaDestaque: "Driven", numeroDeCurtidas: "176.599", descricao: "Nada Como um Dia Após o Outro Dia, Vol.1", numeroDeComentarios: "7899", nomeDoSeuPerfil: "eu", seuComentario: "A Vida É Desafio é a música desse albúm que mais me emociona!!" },
    { imagemPerfil: "assets/djonga-logo.png", nomePerfil: "djongador", imagemPost: "assets/djonga.jpg", imagemCurtidaDestaque: "assets/itau.jpg", nomePerfilCurtidaDestaque: "itau", numeroDeCurtidas: "260.065", descricao: "Em 2017 eu lançava o albúm Heresia e foi algo que mudou minha vida e minha carreira.", numeroDeComentarios: "750", nomeDoSeuPerfil: "eu", seuComentario: "Albúm maravilhosoooo! Um tapa na cara da sociedade." },
    { imagemPerfil: "assets/Driven.png", nomePerfil: "driven.education", imagemPost: "assets/", imagemCurtidaDestaque: "assets/perfil.png", nomePerfilCurtidaDestaque: "eu", numeroDeCurtidas: "2.078", descricao: "Seria isso um spoiler do que vem por ai???????????", numeroDeComentarios: "58", nomeDoSeuPerfil: "eu", seuComentario: "Asioso por isso!!" }
]

function Postagem(props) {
    return (
        <div class="post">
            <div class="topo-post">
                <div class="perfil-post">
                    <img src={props.imagemPerfil} />
                    <h1>{props.nomePerfil}</h1>
                </div>
                <ion-icon
                    class="icons"
                    name="ellipsis-horizontal-sharp"
                ></ion-icon>
            </div>
            <img src={props.imagemPost} class="imagem-post" />
            <div class="base-post">
                <div class="reacao">
                    <div>
                        <ion-icon class="icons" name="heart-outline"></ion-icon>
                        <ion-icon class="icons" name="chatbubble-outline"></ion-icon>
                        <ion-icon class="icons" name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon class="icons" name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="curtido-por">
                    <img src={props.imagemCurtidaDestaque} />
                    <p>
                        Curtido por <span>{props.nomePerfilCurtidaDestaque}</span> e
                        <span>outras {props.numeroDeCurtidas} pessoas</span>
                    </p>
                </div>
                <div class="comentarios">
                    <div class="comentario">
                        <div>
                            <p>
                                <span class="perfil">{props.nomePerfil} </span>{props.descricao}
                            </p>
                        </div>
                    </div>
                    <div class="ver-comentarios">
                        <p>Ver todos os {props.numeroDeComentarios} comentários</p>
                    </div>
                    <div class="comentario">
                        <div>
                            <p>
                                <span class="perfil">{props.nomeDoSeuPerfil} </span>{props.seuComentario}
                            </p>
                        </div>
                        <div>
                            <ion-icon class="icons" name="heart-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div class="caixa-de-comentario">
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
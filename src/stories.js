const listaDeStories = [
{foto:"assets/Driven.png" , nome:"driven.education"}, 
{foto:"assets/cruzeiro.jpg" , nome:"cruzeiro"}, 
{foto:"assets/impa.png" , nome:"impa_oficial"}, 
{foto:"assets/itau.jpg" , nome:"itau"}, 
{foto:"assets/legiao-urbana.png" , nome:"Legião Urbana"},
{foto:"assets/manual-do-mundo.jpg" , nome:"manualdomundo"},
{foto:"assets/ufmg.png" , nome:"ufmg"},
{foto:"assets/messi.jpg" , nome:"leomessi"}]

function Perfil (props){
    return(
        <div className="perfis">
            <div className="imagens-perfil">
                <img src="assets/stories_background.jpg" />
                <div className="foto-perfil">
                    <img src={props.imagem} />
                </div>
            </div>
            <div className="texto-perfil">
                <p>{props.texto}</p>
            </div>
        </div>
    )
}
export default function Stories() {
    return (
        <div className="stories">
            {listaDeStories.map(elemento => <Perfil imagem = {elemento.foto} texto = {elemento.nome}/>)}
            <ion-icon name="chevron-forward-circle-sharp"></ion-icon>
        </div>
    )
}
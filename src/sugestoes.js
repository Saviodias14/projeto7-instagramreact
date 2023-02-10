const listaQuemSeguir = [
    {fotoPerfil:'assets/gemeos.jpg', nickPerfil:'weasley_twins', nomePerfil:'Gemialidades Weasley'},
    {fotoPerfil:'assets/gina.jpg', nickPerfil:'weasley_gina', nomePerfil:'Gina Weasley'},
    {fotoPerfil:'assets/hermione.jpg', nickPerfil:'granger_mione', nomePerfil:'Hermione Granger'},
    {fotoPerfil:'assets/neville.jpg', nickPerfil:'longbottom_neville', nomePerfil:'Neville Longbottom'},
    {fotoPerfil:'assets/rony.jpg', nickPerfil:'weasley_ronald', nomePerfil:'Rony Weasley'}
]
function PerfilSugestao(props){
    return(
        <div class="seguir">
                    <div class="seguir-perfil">
                        <img src={props.fotoPerfil} />
                        <div>
                            <h1>{props.nickPerfil}</h1>
                            <h2>{props.nomePerfil}</h2>
                        </div>
                    </div>
                    <h3>Seguir</h3>
                </div>
    )
}
export default function Sugestoes() {
    return (
        <div>
            <div class="seguir">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>
            <div class="corpo-sidebar">
                {listaQuemSeguir.map(elemento=>(<PerfilSugestao fotoPerfil={elemento.fotoPerfil} nickPerfil={elemento.nickPerfil} nomePerfil={elemento.nomePerfil}/>))}
            </div>
        </div>
    )
}
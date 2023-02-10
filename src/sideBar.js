import Sugestoes from "./sugestoes";
import Usuario from "./usuario";
export default function SideBar(){
    return(
        <div className="sidebar">
            <Usuario/>
            <Sugestoes/>
            <div class="notas">
              <p>
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags •
                Idioma
              </p>
              <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    )
}
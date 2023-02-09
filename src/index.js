import NavBar from "./navBar";
import ReactDOM  from "react-dom";
import Corpo from "./corpo";
function Teste(){
    return(
        <div>
            <NavBar/>
            <Corpo/>
        </div>
    )
}

ReactDOM.render(<Teste/>, document.querySelector('.root'));
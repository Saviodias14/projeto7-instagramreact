export default function NavBar() {
    return (
        <div className="cabeçalho">
            <div className="inicio">
                <div className="logo">
                    <div>
                        <ion-icon className="icons" name="logo-instagram"></ion-icon>
                    </div>
                    <img src="assets/logo.png" />
                </div>
                <input type="text" name="pesquisar" placeholder="Pesquisar" />
                <div className="icones">
                    <ion-icon className="icons" name="paper-plane-outline"></ion-icon>
                    <ion-icon className="icons" name="compass-outline"></ion-icon>
                    <ion-icon className="icons" name="heart-outline"></ion-icon>
                    <ion-icon className="icons" name="person-outline"></ion-icon>
                </div>
            </div>
            <div className="logo-2">
                <ion-icon className="icons" name="logo-instagram"></ion-icon>
                <img src="assets/logo.png"  />
                <ion-icon className="icons" name="paper-plane-outline"></ion-icon>
            </div>
        </div>
    )
}
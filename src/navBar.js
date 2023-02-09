export default function NavBar() {
    return (
        <div class="cabeçalho">
            <div class="inicio">
                <div class="logo">
                    <div>
                        <ion-icon class="icons" name="logo-instagram"></ion-icon>
                    </div>
                    <img src="assets/logo.png" />
                </div>
                <input type="text" name="pesquisar" placeholder="Pesquisar" />
                <div class="icones">
                    <ion-icon class="icons" name="paper-plane-outline"></ion-icon>
                    <ion-icon class="icons" name="compass-outline"></ion-icon>
                    <ion-icon class="icons" name="heart-outline"></ion-icon>
                    <ion-icon class="icons" name="person-outline"></ion-icon>
                </div>
            </div>
            <div class="logo-2">
                <ion-icon class="icons" name="logo-instagram"></ion-icon>
                <img src="assets/logo.png"  />
                <ion-icon class="icons" name="paper-plane-outline"></ion-icon>
            </div>
        </div>
    )
}
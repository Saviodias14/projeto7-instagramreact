import Stories from "./stories"
import Posts from "./posts"
import SideBar from "./sideBar"

export default function Corpo() {
    return (
        <div className="container-principal">
            <div className="container-secundario">
                <div className="container-feed">
                    <Stories />
                    <Posts />
                </div>
                <div className="aux-sidebar">
                    <SideBar />
                </div>
            </div>
            <div class="menu-bottom">
                <ion-icon class="icons" name="home"></ion-icon>
                <ion-icon class="icons" name="search-outline"></ion-icon>
                <ion-icon class="icons" name="add-circle-outline"></ion-icon>
                <ion-icon class="icons" name="heart-outline"></ion-icon>
                <ion-icon class="icons" name="person-outline"></ion-icon>
            </div>
        </div>
    )
}
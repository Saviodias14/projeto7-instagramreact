import Stories from "./stories"
import Posts from "./posts"
import SideBar from "./sideBar"

export default function Corpo() {
    return (
        <div className="container-principal">
            <div className="container-secundario">
                <div className="container-feed">
                    <Stories />
                    <Posts/>
                </div>
                <div className="aux-sidebar">
                    <SideBar/>
                </div>
            </div>
        </div>
    )
}
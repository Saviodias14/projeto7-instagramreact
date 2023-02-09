import Stories from "./stories"
import Posts from "./posts"

export default function Corpo() {
    return (
        <div className="container-principal">
            <div className="container-secundario">
                <div className="container-feed">
                    <Stories />
                    <Posts/>
                </div>
                <div className="sidebar">

                </div>
            </div>
        </div>
    )
}
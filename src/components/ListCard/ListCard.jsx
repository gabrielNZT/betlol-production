import Card from "../Card/Card"
import Session from "../Session/Sesion"

import "./style.css"

const ListCard = () => {
    return (
        <div className="list_card_container">
            <div >
                <Session style={{ fontSize: '10px' }} > apostas abertas </Session>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <a href="/resultados" > Ver todos </a>
            </div>
            <div className="list_card_container_description" >
                <h3>
                    <b> Não fique de fora </b>, <br /> embarque na empolgante jornada dos e-sports: Aposta agora e faça parte da vitória!
                </h3>
            </div>
        </div>
    )
}

export default ListCard;
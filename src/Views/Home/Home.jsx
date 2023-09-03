import { Session, Table, ListCard, Card, Loading } from "../../components";
import "./style.css";

const Home = () => {
    return (
        <>
            <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
                <div className="list_card_container">
                    <div>
                        <Session style={{ fontSize: '10px' }} > Confronto da semana </Session>
                        <Card />
                    </div>
                </div>
            </div>
            <ListCard />
            <Session style={{ marginTop: '20px' }}> melhores jogadores </Session>
            <Table limit={4} />
        </>
    )
}

export default Home;
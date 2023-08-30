import './style.css';

const Card = () => {
    return (
        <div className="card_header" >
            <div>
                <span> Sua escolha: Furia </span>
                <h6>Status: <b style={{color: "green"}}>Aberto</b> | Apostas até: 17:58</h6>
            </div>
            <div className="card_container">
                <div className="card_container_team" >
                    <div className="card_container_team_identifier" >
                        <img alt='team_1' src='https://res.cloudinary.com/rivalry/image/fetch/w_32,h_32,c_fit,q_90,dpr_2/f_auto/https://raw.githubusercontent.com/lootmarket/esport-team-logos/master/league-of-legends/pain-gaming/pain-gaming-logo.png' />
                        <span> PNG </span>
                    </div>
                    <div> 10 </div>
                </div>
                <div className='card_container_vs' >VS</div>
                <div className="card_container_team" >
                    <div> 10 </div>
                    <div className="card_container_team_identifier">
                        <img alt='team_1' src='https://res.cloudinary.com/rivalry/image/fetch/w_32,h_32,c_fit,q_90,dpr_2/f_auto/https://raw.githubusercontent.com/lootmarket/esport-team-logos/master/league-of-legends/furia/furia-logo.png' />
                        <span> FUR </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
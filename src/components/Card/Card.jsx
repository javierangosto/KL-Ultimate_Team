import './Card.css';


export const Card = ({player, club}) => {

  function getImgUrl(type){
    if (type === "player"){
      return new URL(`../../assets/static/players/${player.image}`, import.meta.url).href
    }else{
      return new URL(`../../assets/static/logos/${club.image}`, import.meta.url).href
    }
  }

  return (
    <div className='display-card'>
    <div className="card">
    <div className="card-top">
      <div className="card-left-column">
        <div className="card-rating">
          85
        </div>
        <div className="card-player-position">
          { player.position }
        </div>
        <img src={getImgUrl('club')} alt="Club Shield" className="card-club-shield" />
      </div>
      <div className="card-image-wrapper">
        <img src={getImgUrl('player')} alt="Player Image" className="card-image" />
      </div>
    </div>
    <div className="card-info">
      <div className="card-player-name">
        { player.name.toUpperCase() }
      </div>
      <div className="card-player-stats">
        <div className="card-player-stat">
          <div className="card-player-stat-label">PAC</div>
          <div className="card-player-stat-value">89</div>
        </div>
        <div className="card-player-stat">
          <div className="card-player-stat-label">SHO</div>
          <div className="card-player-stat-value">92</div>
        </div>
        <div className="card-player-stat">
          <div className="card-player-stat-label">PAS</div>
          <div className="card-player-stat-value">92</div>
        </div>
        <div className="card-player-stat">
          <div className="card-player-stat-label">DRI</div>
          <div className="card-player-stat-value">96</div>
        </div>
        <div className="card-player-stat">
          <div className="card-player-stat-label">DEF</div>
          <div className="card-player-stat-value">45</div>
        </div>
        <div className="card-player-stat">
          <div className="card-player-stat-label">PHY</div>
          <div className="card-player-stat-value">65</div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

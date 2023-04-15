
import { Card } from './components'
import { getPlayerById, getTeamById } from './db'

export const KLultimateTeamApp = () => {
  
  const player = getPlayerById(1,0);
  const club = getTeamById(1);
  console.log(player);

  return (
      <>
      <Card player={player} club={club}/>
      </>
  )
}
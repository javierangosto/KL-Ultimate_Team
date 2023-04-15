import { KLclubs, KLplayers } from "../"


export const getPlayerById = (teamId, playerId) => {

    const team = KLplayers.filter (team => team.teamId === teamId);
    return team[0].players.filter(player => player.id === playerId)[0];
    
}

export const getTeamById = (teamId) => {

    return KLclubs.filter(team => team.id === teamId)[0];
    
}
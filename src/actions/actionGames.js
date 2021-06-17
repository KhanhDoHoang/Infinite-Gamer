import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//Action creator

export const loadGames = () => async (dispatch) => {
    //FETCH axios
    const popularGameData = await axios.get(popularGamesURL());
    const upcomingGameData = await axios.get(upcomingGamesURL());
    const newGameData = await axios.get(newGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGameData.data.results,
            upcoming: upcomingGameData.data.results,
            newGames: newGameData.data.results,
        },

    })


}

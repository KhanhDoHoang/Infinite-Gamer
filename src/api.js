//base
const base_url = 'https://api.rawg.io/api/';

const api = `${process.env.REACT_APP_API}`

//popular games
////Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
}

const getCurrentDate = () => {
    const date = new Date().getDate();
    if (date < 10) {
        return `0${date}`;
    } else {
        return date;
    }
}
///cur day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;


const popular_games = `games?key=${api}&dates=${lastYear},${currentDate}&ordering=+added&page_size=20`;
const upcoming_games = `games?key=${api}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${api}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//Game details
export const gameDetailsUrl = (idGame) => `${base_url}games/${idGame}?key=${api}&dates`;
//Game Image
export const gameScreenshotsUrl = (idGame) => `${base_url}games/${idGame}/screenshots?key=${api}&dates`;

export const searchGameURL = (game_name) =>
    `${base_url}games?key=${api}&search=${game_name}&page_size=9`;
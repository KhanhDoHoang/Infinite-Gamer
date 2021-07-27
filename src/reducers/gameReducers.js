const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searching: [],
};

const gamesReducers = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
            };
        case "FETCH_SEARCHED":
            return {
                ...state,
                searching: action.payload.searching,
            };
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searching: [],
            };
        default:
            return { ...state };
    }
};

export default gamesReducers;

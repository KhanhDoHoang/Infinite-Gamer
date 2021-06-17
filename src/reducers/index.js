import { combineReducers } from 'redux';
import gameReducers from './gameReducers';
import detailReducer from './detailReducer';

const rootReducers = combineReducers({
    games: gameReducers,
    detail: detailReducer,
})

export default rootReducers;

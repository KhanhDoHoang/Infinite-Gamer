import React, { useEffect } from "react";
import GameDetail from '../components/GameDetail';
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/actionGames";
//Components
import Game from '../components/Game';
//styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  return (
    <GameList>
      <GameDetail pathId={pathId} />
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map(game => (
          <Game name={game.name}
            release={game.released}
            id={game.id}
            key={game.id}
            image={game.background_image} />
        ))}
      </Games>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;

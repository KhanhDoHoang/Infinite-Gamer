import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
//redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/actionDetails';
import { Link } from 'react-router-dom';

const Game = ({ name, release, image, id }) => {
  //load detail
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  }

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/path/${id}`}>
        <h3>{name}</h3>
        <p>{release}</p>
        <img src={image} alt={name} />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
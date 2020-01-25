import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #444444;
  color: #fafafa;
  text-shadow: 1px 1px 1px #000000;
  width: 35rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-evenly;
  padding: 2rem;
  border-radius: 0.5rem;
  margin: 2rem 0;
  transition: all 500ms;
  &:hover {
    transition: transform 500ms;
    transform: translateX(8rem);
  }
  .char-img {
    display: flex;
    align-items: center;
    width: 45%;
    img {
      width: 80%;
    }
  }
  .char-info {
    width: 50%;
  }
`;

export default function CharacterCard(props) {

  const { char } = props;

  return (
    <Card>
      <div className="char-img"><img src={char.image} /></div>
      <div className="char-info">
        <h3>Name: {char.name}</h3>
        <p>Gender: {char.gender}</p>
        <p>Origin: {char.origin.name}</p>
        <p>Location: {char.location.name}</p>
      </div>
    </Card>
  )
}


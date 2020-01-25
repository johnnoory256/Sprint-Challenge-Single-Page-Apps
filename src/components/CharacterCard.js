import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  return (
    <div>
      <div className="character-img"><img src={props.image} /></div>
      <div className="character-info">
        <h2>Name: {props.name}</h2>
        <p>Gender: {props.gender}</p>
        <p>Origin: {props.origin.name}</p>
        <p>Location: {props.location.name}</p>
        <h1>hello</h1>
      </div>
    </div>
  );
}


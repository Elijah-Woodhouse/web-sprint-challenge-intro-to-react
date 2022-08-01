import React from "react";
import Character from "./Character";
import "./Character.css";


const CharacterCard = props => {

  const { names } = props;

  return (
    <div className="card-container">
    {names.map((name, index) => {
      return <Character name={name} key={index} />
    })}
    </div>
  );

}

export default CharacterCard;

import React from "react";
import Character from "./Character";


const CharacterCard = props => {

  const { names } = props;

  //console.log(photos[0]);

  return (
    <div className="card-container">
    {names.map(name => {
      return <Character name={name} key={name[]} />
    })}
    </div>
  );

}

export default CharacterCard;

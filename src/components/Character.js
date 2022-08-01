// Write your Character component here
import React, {useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";


const Character = props => {

  const { name } = props;
  console.log(name);

  return (
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name.name}</Card.Title>
        <Card.Text>
        Year of Birth: {name.birth_year}
          <br></br>
          <br></br>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Character;

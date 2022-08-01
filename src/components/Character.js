// Write your Character component here
import React, {useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";


const Character = props => {

  const { name } = props;

  return (
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>{name[0].name}</Card.Title>
        <Card.Text>
          <br></br>
          <br></br>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Character;

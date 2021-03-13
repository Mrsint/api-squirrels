import React from 'react';

function Squirrel(props) {
  return (
    <div className="Squirrel">
      <h3>SQUIRREL CARD!</h3>
      <p> Name: {props.name}</p>
      <p> Grey? {props.color === "Gray" ? "woo": "boo"}</p>
      <p> Is it running? {props.running? " 🏃‍♂️" : " 🐿️"}</p>
    </div>
  );
}

export default Squirrel;

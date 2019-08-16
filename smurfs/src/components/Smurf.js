import React from "react";

const Smurf = props => {
  return (
    <div class="card">
      <div class="card-body">
        <div class="card-header">Category: {props.smurf.name}</div>
        <div class="card-text"> {props.smurf.age}</div>
        <div class="card-text"> {props.smurf.height}</div>
      </div>
    </div>
  );
};

export default Smurf;

import React, { useState } from "react";
import { connect } from "react-redux";
import { postData } from "../actions";


const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChanges = updatedValue => {
      setValue(updatedValue);
    };
    return [value, setValue, handleChanges];
  };

const SmurfForm = props => {
  const [name, setName, handleName] = useInput("");
  const [age, setAge, handleAge] = useInput("");
  const [height, setHeight, handleHeight] = useInput("");

  const resetValues = e => {
    e.preventDefault();
    props.postData(name, age, height)
    setName("");
    setAge("");
    setHeight("");
  };

  return (
      <>
      {!props.isAdding ? (
    <form onSubmit={resetValues}>
      <input
        className="name-text"
        id="name"
        name="name"
        onChange={e => handleName(e.target.value)}
        placeholder="Smurf Name"
        type="text"
        value={name}
      />
      <input
        className="age-text"
        id="age"
        name="age"
        onChange={e => handleAge(e.target.value)}
        placeholder="Age"
        type="text"
        value={age}
      />
      <input
        className="height-text"
        id="height"
        name="height"
        onChange={e => handleHeight(e.target.value)}
        placeholder="Height"
        type="text"
        value={height}
      />
      <button type="submit">Push to Add Your Smurf</button>
    </form>) : ("Adding Smurfs")}
    </>
  );
};

const mapStateToProps = state => {
    return {
      isAdding: state.isAdding,
    };
  };

export default connect(
    mapStateToProps,
    { postData }
  )(SmurfForm);
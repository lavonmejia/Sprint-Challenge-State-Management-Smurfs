import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import Smurf from "./Smurf";

const SmurfList = props => {
  return (
    <>
      <h1>Get a Smurf!</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          "Loading Smurfs"
        ) : (
          "Get Smurf"
        )}
      </button>
      <div className="card-group">
        {props.smurfs &&
          props.smurfs.map((smurf, index) => (
            <Smurf key={index} smurf={smurf} />
          ))}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(SmurfList);



import React from "react";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";


function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
      <SmurfForm/>
      <SmurfList />
      
    </div>
  );
}

export default App;

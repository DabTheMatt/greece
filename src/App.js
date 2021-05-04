import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/globals/GlobalStyles";

class App extends React.Component {
  render() {
    return (
      <>
      <GlobalStyles/>
        <Home /> 
      </>
    )
  }
}

export default App;

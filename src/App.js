import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home'



const App=()=>{
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      
    </Switch>
  )
}
export default App;
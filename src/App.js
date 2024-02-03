import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home'
import Blog from './components/Blog'
import BlogItemDetails from "./components/BlogItemDetails";
import Services from './components/services'
import ServiceItemDetails from "./components/servicesItemDetails";


const App=()=>{
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path='/blogs' component={Blog}/>
      <Route exact path='/blogs/:id/' component={BlogItemDetails}/>
      <Route exact path='/services/' component={Services} />
      <Route exact path='/services/:id/' component={ServiceItemDetails}/>
    </Switch>
  )
}
export default App;
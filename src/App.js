import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
class App extends React.Component{
  state={
    isLog:false
  }

  render(){
    const {isLog} = this.state;
    return(
      <div>
        <Switch>
        
        <Route path='*' component={Home}/>
        </Switch>
      </div>
    )
  }
}

export default App;
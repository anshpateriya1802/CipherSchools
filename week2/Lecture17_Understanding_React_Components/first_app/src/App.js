import { Component } from 'react';
import './App.css';


class App extends Component{
  name="Ram";
  render(){
    return(
      <>
        <div>
          <h1>Jai Shree {this.name}</h1>
        </div>
        <div>
          <p>This is first paragraph</p>
        </div>
      </>
    );
  }
}



export default App;

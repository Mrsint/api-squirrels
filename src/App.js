import React from 'react';
import Squirrel from './Components/Squirrel.js'
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        squirrels: []
    };
  }

  
  // add a componentDidMount lifecycle method to fetch data from the API
  componentDidMount = () => {
    let appToken = 'ricnUO9bX5efHKui51A6rxUXp'

    // Either template using bactics and ${} or concatenate using +
    let query = `https://data.cityofnewyork.us/resource/vfnx-vebw.json?$$app_token=${appToken}&running=true` // Templating
    // let query = "https://data.cityofnewyork.us/resource/vfnx-vebw.json?$$app_token=" + appToken + "&running=true" // Concatenating
    //console.log(query)

    fetch(query)
    .then(response => response.json())
    .then(data =>  {
        this.setState(state => {
            state.squirrels = data
            return state
        })
    } )
    .catch(e => console.log(e))
  }
  render() {
    return (
      <div className="App">
        <h1>2018 NYC Squirrel Survey Data</h1>
        <h2> Number of Squirrels in Datatset? {this.state.squirrels.length}</h2>
        {this.state.squirrels.map(squirrel => {
            return <Squirrel name = {squirrel.unique_squirrel_id}
            age = {squirrel.age}
            color ={squirrel.primary_fur_color}
            running = {squirrel.running}
                        
            />
        })}

      </div>
    );
  }
}

export default App;

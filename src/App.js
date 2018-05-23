import React, { Component } from 'react';
import './App.css';

let defaultTextColor = '#fff';
let defaultStyle ={
  color: defaultTextColor
};
let fakeServerData = {
  user: {
    name: 'David',
    playlists: [
      {
        name: 'My favorites',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      },
      {
        name: 'Discover Weekly',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      },
      {
        name: 'Another playlist - the best!',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      },
      {
        name: 'Playlist - yeah!',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      }
    ]
  }
};


class Aggregate extends Component {
  render(){
    return(
      <div style={{ ...defaultStyle,width: "40%", display:'inline-block'}}>
        <h2> Number Text </h2>
      </div>
    );
  }
}

class Filter extends Component {
  render(){
    return(
      <div style={{...defaultStyle}}>
        <img/>
        <input type="text" />
          Filter
      </div>
    );
  }
}

class PlayList extends Component{
  render(){
    return(
      <div style={{...defaultStyle,display:'inline-block', width: "25%"}}>
        <img/>
        <h3>PlayList Name </h3>
          <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}


class App extends Component {
  constructor(){
    super();
    this.state = {serverData: {}}
  }
  componentDidMount(){
    setTimeout( () =>
    {
      this.setState({serverData: fakeServerData});
    },1000)
  }
    
render() {
    return (
      <div className="App">
        {this.state.serverData.user ? 
        <div>
          <h1 style= {{...defaultStyle, 'font-size': '54px'}}>
            {this.state.serverData.user && 
              this.state.serverData.user.name}'s PlayList
          </h1> 
          <Aggregate playlists/>
          <Aggregate/>
          <Filter/>
          <PlayList/>
          <PlayList/>
          <PlayList/>
          <PlayList/>
      </div> : <h1 style={defaultStyle}>..Loading</h1>
        }
      </div>
    );
  }
}

export default App;

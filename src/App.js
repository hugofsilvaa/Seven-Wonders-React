import './App.css';
import sevenWonders from './data'
import WonderList from './components/WonderList';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wonderName: ''
    };
  }

  handleShowName = (name) => {
    this.setState({ wonderName: name });
  }

  render() {

    return (
      <div className="App" >
        <div>Wonder Name: {this.state.wonderName} </div>
        <WonderList data={sevenWonders} showName={this.handleShowName} />
      </div>
    );
  }
}

export default App;

// change App.js to a class component.
// create a wonderName state, set its initial value to ""
// change the method handleShowName() to update the state value of wonderName .
// add a isFavorite: false state on WonderCard.js
// create a method toggleFavorite() that will change the value of isFavorite. 
// (when triggering this method, it will always change from true to false and vice-versa)
// when clicking on the star, call the method toggleFavorite()
// when isFavorite: false, show ☆
// when isFavorite: true, show ★




// use the wireframe: https://wireframe.cc/b7KSwp
// import data.js on App
// create a WondersList component that will receive the data as props and render a WonderCard to each element of the array.
// on WonderCard, display the image, name, location and year of each wonder, and also a button.
// on App create a method handleShowName() that will receive the name of the wonder as a parameter and display it on an alert() .
// pass handleShowName() down to WondersList, and to each of WonderCard  components.
// when the button is clicked, it will trigger the function handleShowName() and will display the name of the wonder.
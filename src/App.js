import React, { Component } from 'react';
import Display from './Display';
import './App.css';

class App extends Component {
  static defaultProps = {
    "id": 641803,
    "title": "Easy & Delish! ~ Apple Crumble",
    "image": "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
    "usedIngredientCount": 3,
    "missedIngredientCount": 4,
    "likes": 1
  };

  render() {
    return (
      <div className="list-item-card recipe-list-item">
        <div className="recipe-item-content-container">
          <div className="recipe-list-item-image-container">
            <img
              className="img-responsive recipe-list-item-image"
              src={this.props.image}
              alt={this.props.title}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

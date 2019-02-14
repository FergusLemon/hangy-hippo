import React, { Component } from 'react';
//import Display from './Display';
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
        <div className="recipe-list-item-title-container">
          <div className="recipe-list-item-title">{this.props.title}</div>
        </div>
        <div className="recipe-list-item-image-container">
          <img
            className="img-responsive recipe-list-item-image"
            src={this.props.image}
            alt={this.props.title}
          />
        </div>
        <div className="recipe-list-item-ingredient-count">
          You have {this.props.missedIngredientCount === 0
            ? "all"
            : this.props.usedIngredientCount
          } ingredients.
        </div>
        {
          this.props.missedIngredientCount > 0 &&
          <div className="recipe-list-item-missed-ingredient-count">
            There are {this.props.missedIngredientCount} ingredients missing.
          </div>
        }
      </div>
    );
  }
}

export default App;

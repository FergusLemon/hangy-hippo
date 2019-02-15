import React, { Component } from 'react';
import RecipeItem from './recipeItem/components/RecipeItem';
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
      <RecipeItem {...this.props} />
    );
  }
}

export default App;

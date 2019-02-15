import React from 'react';
import PropTypes from 'prop-types';
import '../styles/recipeItem.css';

const propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  usedIngredientCount: PropTypes.number,
  missedIngredientCount: PropTypes.number
};

const RecipeItem = (props) => (
  <div className="list-item-card recipe-list-item">
    <div className="recipe-list-item-title-container">
      <div className="recipe-list-item-title">{props.title}</div>
    </div>
    <div className="recipe-list-item-image-container">
      <img
        className="img-responsive recipe-list-item-image"
        src={props.image}
        alt={props.title}
      />
    </div>
    <div className="recipe-list-item-ingredient-count">
      You have {props.missedIngredientCount === 0
        ? "all"
        : props.usedIngredientCount
      } ingredients.
    </div>
    {
      props.missedIngredientCount > 0 &&
      <div className="recipe-list-item-missed-ingredient-count">
        There are {props.missedIngredientCount} ingredients missing.
      </div>
    }
  </div>
);

RecipeItem.propTypes = propTypes;

export default RecipeItem;

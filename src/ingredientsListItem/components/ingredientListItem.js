import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string
};

const IngredientListItem = (props) => {
  <div className="ingredient-list-item">
    <div className="ingredient-list-item-value">
      {props.children};
    </div>
  </div>
};

IngredientListItem.propTypes = propTypes;

export default IngredientListItem;

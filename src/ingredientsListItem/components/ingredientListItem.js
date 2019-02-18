import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string,
  removeItem: PropTypes.func,
  canSearch: PropTypes.bool
};

const IngredientListItem = (props) => (
  <div className="ingredient-list-item">
    <div className="ingredient-list-item-value">
      {props.children}
    </div>
    <button disabled={!props.canSearch} className="btn-ingredient-list-item" onClick={e => props.removeItem(props.index)}>
      Remove Item
    </button>
  </div>
);

IngredientListItem.propTypes = propTypes;

export default IngredientListItem;

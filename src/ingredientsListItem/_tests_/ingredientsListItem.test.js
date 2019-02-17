import React from 'react';
import { shallow } from 'enzyme';
import getElement from '../../common/utils/getElement';
import IngredientListItem from '../components/ingredientListItem';

describe('Ingredient List Item', () => {
  it('should pass children into a list item card div', () => {
    const wrapper = shallow(<IngredientListItem>I @m lem0n</IngredientListItem>);
    console.log(wrapper.debug());
    expect(getElement(wrapper)('div')('ingredient-list-item-value').text()).toBe(`I @m lem0n`);
  });
});

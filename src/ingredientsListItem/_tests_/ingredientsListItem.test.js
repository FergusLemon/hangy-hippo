import React from 'react';
import { shallow } from 'enzyme';
import getElement from '../../common/utils/getElement';
import IngredientListItem from '../components/ingredientListItem';

const setup = inputs => (
  {
    removeItem: inputs.removeItem || jest.fn(),
    index: inputs.index || 0
  }
);

describe('Ingredient List Item', () => {
  it('should pass children into a list item card div', () => {
    const wrapper = shallow(<IngredientListItem>I @m lem0n</IngredientListItem>);
    expect(getElement(wrapper)('div')('ingredient-list-item-value').text()).toBe(`I @m lem0n`);
  });

  it('calls the remove item callback when the remove button is hit and passes the index prop as a parameter', () => {
    const testEnv = setup({
      removeItem: jest.fn(),
      index: 1
    });
    const wrapper = shallow(<IngredientListItem {...testEnv} />);
    getElement(wrapper)('button')('btn-ingredient-list-item').simulate('click');
    expect(testEnv.removeItem).toBeCalledWith(testEnv.index);
  });
  it('disables the remove button when a search is not allowed to be run', () => {
    const testEnv = setup({
      canSearch: false,
    });
    const wrapper = shallow(<IngredientListItem {...testEnv} />);
    expect(getElement(wrapper)('button')('btn-ingredient-list-item').props().disabled).toBe(true);
  });
});

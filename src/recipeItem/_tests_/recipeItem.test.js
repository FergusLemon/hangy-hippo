import React from 'react';
import { shallow } from 'enzyme';
import getElement from '../../common/utils/getElement';
import RecipeItem from '../components/RecipeItem';

describe('Recipe List Item', () => {
  it('renders a div element with the className prop set to be an item card', () => {
    const wrapper = shallow(<RecipeItem />);
    expect(getElement(wrapper)('div')('list-item-card').length).toBe(1);
  });

  it('should display the image supplied by the props', () => {
    const testAlt = `I'm a Lime`,
          testImage = 'https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg',
          wrapper = shallow(<RecipeItem title={testAlt} image={testImage} />);
    expect(getElement(wrapper)('img')('recipe-list-item-image').props().alt)
      .toEqual(testAlt);
    expect(getElement(wrapper)('img')('recipe-list-item-image').props().src)
      .toEqual(testImage);
  });

  it('should display a title', () => {
    const testTitle = `I'm a Lime`,
          wrapper = shallow(<RecipeItem title={testTitle} />);
    expect(getElement(wrapper)('div')('recipe-list-item-title').text())
      .toEqual(testTitle);
  });

  it('should show the number of ingredients used', () => {
    const testUsedIngredientCount = 1,
          wrapper = shallow(<RecipeItem usedIngredientCount={testUsedIngredientCount} />);
    expect(getElement(wrapper)('div')('recipe-list-item-ingredient-count')
      .text().indexOf(`${testUsedIngredientCount}`)).not.toEqual(-1);
  });

  it("should display the word 'all' when all ingredients have been used and not the number", () => {
    const testUsedIngredientCount = 3,
          testMissedIngredientCount = 0,
          wrapper = shallow(<RecipeItem usedIngredientCount={testUsedIngredientCount} missedIngredientCount={testMissedIngredientCount} />);
    expect(getElement(wrapper)('div')('recipe-list-item-ingredient-count')
      .text().indexOf('all')).not.toEqual(-1);
  });

  it('should display a missing ingredient count if there are missing ingredients', () => {
    const testMissedIngredientCount = 3,
          wrapper = shallow(<RecipeItem missedIngredientCount={testMissedIngredientCount} />);
    expect(getElement(wrapper)('div')('recipe-list-item-missed-ingredient-count')
      .text().indexOf(`${testMissedIngredientCount}`)).not.toEqual(-1);
  });

  it('should not display a missing count if there are no missing ingredients', () => {
    const testMissedIngredientCount = 0,
          wrapper = shallow(<RecipeItem missedIngredientCount={testMissedIngredientCount} />);
    expect(getElement(wrapper)('div')('recipe-list-item-missed-ingredient-count')
      .exists()).toEqual(false);
  });
});

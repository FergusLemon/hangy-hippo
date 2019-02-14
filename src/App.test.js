import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

const getElement = wrapper => elementType => classToSearchFor => (
  wrapper
  .find(elementType)
  .findWhere(e => e.props().className && e.props().className.indexOf(classToSearchFor) !== -1)
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Recipe List Item', () => {
  it('renders a div element with the className prop set to be an item card', () => {
    const wrapper = shallow(<App />);
    expect(getElement(wrapper)('div')('list-item-card').length).toBe(1);
  });

  it('should display the image supplied by the props', () => {
    const testAlt = `I'm Batman`,
          testImage = 'https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg',
          wrapper = shallow(<App title={ testAlt } image={ testImage }/>);
    expect(getElement(wrapper)('img')('recipe-list-item-image').props().alt).toEqual(testAlt);
    expect(getElement(wrapper)('img')('recipe-list-item-image').props().src).toEqual(testImage);
  });
});

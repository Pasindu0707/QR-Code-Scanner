import 'react-native';
import React from 'react';
import Home from '../screens/Home'; // Import your Home component
import Scanner from '../screens/Scanner'; // Import your Scanner component
import renderer from 'react-test-renderer';


// Test cases for the Home component
describe('Home Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


// Test cases for the Scanner component
describe('Scanner Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Scanner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

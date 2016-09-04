import React from 'react';
import renderer from 'react-test-renderer';
import app from '../../app';
import App from '../App';

describe('App', () => {
  it('renders a welcome view', () => {
    const component = app.mount(<App />);
    const instance = renderer.create(component);
    const tree = instance.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

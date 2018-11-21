import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CreateArticles from '../../views/CreateArticles';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<CreateArticles />);
});


describe('Create Articles UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});

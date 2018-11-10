import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProfileEditPage from '../../views/ProfileEditPage';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<ProfileEditPage />);
});


describe('ProfilePage UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});

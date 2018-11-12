import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ForgotPasswordPage from '../../views/ForgotPasswordPage';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<ForgotPasswordPage />);
});

describe('ForgotPasswordPageUI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});

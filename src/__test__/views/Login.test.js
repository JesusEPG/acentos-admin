import React from 'react';
import { mount } from 'enzyme';
import Login from '../../views/Login/Login';

describe('<Login/>', () => {
  const login = mount(<Login/>);

  test('Renders', () => {
    expect(login.length).toBe(1);
  });
})
import React from 'react';
import { mount } from 'enzyme';
import Login from '../../views/Login/Login';
import { Button } from 'reactstrap';

describe('<Login/>', () => {
  const login = mount(<Login/>);;

  test('Renders component', () => {
    expect(login.length).toBe(1);
  });

  test('Renders email input', () => {
    expect(login.find({name: 'email'})).toHaveLength(2);
  });

  test('Renders password input', () => {
    expect(login.find({name: 'password'})).toHaveLength(2);
  });

  describe('The submit button', () => {
    const submitButton = login.find(Button);
    test('Renders', () => {
      expect(submitButton).toHaveLength(1);
    });

    test('Button should be disabled by default', () => {
      expect(submitButton.get(0).props.disabled).toBeTruthy();
    });
  });
})
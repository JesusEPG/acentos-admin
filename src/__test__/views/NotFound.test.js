import React from 'react';
import { mount } from 'enzyme';
import NotFound from '../../views/NotFound/NotFound';

describe('<NotFound />', () => {
  const notFound = mount(<NotFound />);

  test('Renders', () => {
    expect(notFound.length).toBe(1);
  });
});
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from '../../components/App/App';

describe('<App />', () => {
  const app = mount(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  test('Renders', () => {
    expect(app.length).toBe(1);
  });
});

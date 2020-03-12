import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { render } from '@testing-library/react'

describe('App component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing given the required props', () => {
    const props = {
      dispatch: jest.fn(),
    }
    const wrapper = shallow(<App {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('should mount correctly', () => {
      expect(mount(
        <App />
      )).toMatchSnapshot() 
  })

  test('should render correctly', () => {
      expect(render(
        <App />
      )).toMatchSnapshot() 
  })

})

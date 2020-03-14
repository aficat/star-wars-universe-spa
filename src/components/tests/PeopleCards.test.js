import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import toJson from 'enzyme-to-json'
import PeopleCards from '../PeopleCards';
import store from '../../store';
import { Typography } from '@material-ui/core';

describe('PeopleCards component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PeopleCards store={store} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing given the required props', () => {
        const props = {
            people: [],
            status: "retrieving",
            message: ""
        }
        const wrapper = shallow(<PeopleCards {...props} store={store} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

});
import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import toJson from 'enzyme-to-json'
import PeopleCardsPagination from '../PeopleCardsPagination';
import store from '../../store';

describe('PeopleCardsPagination component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PeopleCardsPagination store={store} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing given the required props', () => {
        const props = {
            dispatch: jest.fn(),
            count: 0
        }
        const wrapper = shallow(<PeopleCardsPagination {...props} store={store} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    
});
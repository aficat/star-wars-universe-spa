import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import toJson from 'enzyme-to-json'
import PeopleCardsSingleCard from '../PeopleCardsSingleCard';
import store from '../../store';

describe('PeopleCardsSingleCard component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PeopleCardsSingleCard store={store} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing given the required props', () => {
        const props = {
            dispatch: jest.fn(),
            homeworld: "",
            species: [],
            films: [],
            starships: [],
            vehicles: [],
        }
        const wrapper = shallow(<PeopleCardsSingleCard {...props} store={store} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

});
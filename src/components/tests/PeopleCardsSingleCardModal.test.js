import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json'
import PeopleCardsSingleCardModal from '../PeopleCardsSingleCardModal';
import store from '../../store';
import { Modal, Typography } from 'semantic-ui-react';

describe('PeopleCardsSingleCardModal component', () => {

    it('renders without crashing given the required props', () => {
        const props = {
            dispatch: jest.fn(),
            homeworld: "",
            species: [],
            films: [],
            starships: [],
            vehicles: [],
        }
        const wrapper = shallow(<PeopleCardsSingleCardModal {...props} store={store} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('renders Modal Header for Person Name', () => {
        const props = {
            name: "Test Name",
            species: [],
            starships: [],
            vehicles: [],
            films: []
        }
        const wrapper = shallow(<PeopleCardsSingleCardModal {...props} store={store} />);
        const resultComponent = wrapper.containsMatchingElement(
            <Modal.Header>
                Test Name
            </Modal.Header>
        );
        expect(resultComponent).toBeTruthy();
    });

});
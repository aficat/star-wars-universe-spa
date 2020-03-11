import { shallow } from 'enzyme';
import React from 'react';
import Header from '../Header';
import { Typography } from '@material-ui/core';

describe('Header component', () => {
    test('renders Title', () => {
        const wrapper = shallow(<Header />);
        const resultComponent = wrapper.containsMatchingElement(
            <Typography
                variant="h3"
                color="textPrimary"
            >
                Star Wars Universe
                </Typography>
        );
        expect(resultComponent).toBeTruthy();
    });
    
    test('renders Subtitle', () => {
        const wrapper = shallow(<Header />);
        const resultComponent = wrapper.containsMatchingElement(
            <Typography
                variant="subtitle1"
                color="textPrimary"
            >
                Click on name cards for view each person's details.
            </Typography>
        );
        expect(resultComponent).toBeTruthy();
    });
});
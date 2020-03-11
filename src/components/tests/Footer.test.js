import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../Footer';

describe('Footer component', () => {
    it('Copyright text', () => {
        const wrapper = shallow(<Footer />);
        const text = wrapper.find('p').text();
        expect(text).toEqual("Copyright Star Wars Universe");
    });
});
import { shallow } from 'enzyme';
import React from 'react';
import CardsPagination from '../CardsPagination';
import { Pagination } from 'semantic-ui-react';

describe('CardsPagination component', () => {
    test('renders Pagination component', () => {
        const wrapper = shallow(<CardsPagination />);
        const resultComponent = wrapper.containsMatchingElement(
            <Pagination defaultActivePage={5} totalPages={10} />
        );
        expect(resultComponent).toBeTruthy();
    });
});
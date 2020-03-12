import { shallow } from 'enzyme';
import React from 'react';
import PeopleCardsPagination from '../PeopleCardsPagination';
import { Pagination } from 'semantic-ui-react';

describe('PeopleCardsPagination component', () => {
    test('renders Pagination component', () => {
        const wrapper = shallow(<PeopleCardsPagination />);
        const resultComponent = wrapper.containsMatchingElement(
            <Pagination
                defaultActivePage={1}
                totalPages={9}
            />
        );
        expect(resultComponent).toBeTruthy();
    });
});
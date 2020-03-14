import React, { Component } from 'react';
import { Pagination } from 'semantic-ui-react';
import { fetchPeople } from '../actions/peopleActions';
import { connect } from 'react-redux';

class PeopleCardsPagination extends Component {

    /**
     * Update active page when pagination settings are changed
     * 
     * @const  {number} activePage - current page number
     */
    handlePaginationChange = (e, { activePage }) => {
        // Updates activePage and set refreshPageStatus to true in store and re-render PeopleCards display based on active page
        this.props.fetchPeople(activePage, true);
    }

    /**
     * @const  {number} count - Total number of Star Wars people
     * 
     * @returns {} returns Pagination component that manages people's cards page views
     */
    render() {
        const { count, activePage } = this.props;
        let totalPages = Math.ceil(count / 10); // 10 cards per page
        return (
            <Pagination
                defaultActivePage={activePage}
                onPageChange={this.handlePaginationChange}
                totalPages={totalPages}
            />
        )
    }
}

const mapStateToProps = state => ({
    count: state.people.count,
    activePage: state.people.activePage
});
export default connect(mapStateToProps, { fetchPeople })(PeopleCardsPagination);

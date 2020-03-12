import React, { Component } from 'react';
import { Pagination } from 'semantic-ui-react';
import { fetchPeople } from '../actions/peopleActions';
import { connect } from 'react-redux';

class PeopleCardsPagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        }
    }

    // Fetch list of Star Wars People based on active page
    componentDidMount() {
        this.props.fetchPeople(this.state.activePage);
    }


    /**
     * Update active page when pagination settings are changed
     * 
     * @const  {number} activePage - current page number
     */
    handlePaginationChange = (e, { activePage }) => {
        this.setState({ activePage: activePage });

        // Updates store and re-render PeopleCards display based on active page
        this.props.fetchPeople(activePage);
    }

    /**
     * @const  {number} count - Total number of Star Wars people
     * 
     * @returns {} returns Pagination component that manages people's cards page views
     */
    render() {
        const { count } = this.props;
        let totalPages = Math.ceil(count / 10); // 10 cards per page
        return (
            <Pagination
                defaultActivePage={this.state.activePage}
                onPageChange={this.handlePaginationChange}
                totalPages={totalPages}
            />
        )
    }
}

const mapStateToProps = state => ({
    count: state.people.count
});
export default connect(mapStateToProps, { fetchPeople })(PeopleCardsPagination);

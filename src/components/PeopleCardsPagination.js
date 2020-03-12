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

    componentDidMount() {
        this.props.fetchPeople(this.state.activePage);
    }

    handlePaginationChange = (e, { activePage }) => {
        this.setState({ activePage: activePage });

        //reset people cards display according to new page
        this.props.fetchPeople(activePage);
    }

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

import React, { Component } from 'react';
import { Pagination } from 'semantic-ui-react';

export default class CardsPagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        }
    }

    handlePaginationChange = (e, { activePage }) => {
        this.setState({ activePage: activePage });
        //reset people cards display according to new page
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

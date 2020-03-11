import React, { Component } from 'react';
import { Pagination } from 'semantic-ui-react';

export default class CardsPagination extends Component {
    render() {
        return (
            <Pagination defaultActivePage={5} totalPages={10} />
        )
    }
}

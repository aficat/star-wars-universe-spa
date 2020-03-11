import React, { Component } from 'react';
import PeopleCardsSingleCard from './PeopleCardsSingleCard';

export default class PeopleCards extends Component {
    render() {
        let cardItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        return (
            <>
                {cardItems.map(item =>
                    <PeopleCardsSingleCard
                        item={item}
                        key={item}
                    />
                )}
            </>
        )
    }
}

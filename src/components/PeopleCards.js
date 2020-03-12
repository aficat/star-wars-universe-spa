import React, { Component } from 'react';
import PeopleCardsSingleCard from './PeopleCardsSingleCard';

export default class PeopleCards extends Component {
    render() {
        let people = this.props.people;
        return (
            <>
                {people.map(person =>
                    <PeopleCardsSingleCard
                        name={person.name}
                        gender={person.gender}
                        height={person.height}
                        mass={person.mass}
                        url={person.url}
                        eyeColor={person.eye_color}
                        hairColor={person.hair_color}
                        skinColor={person.skin_color}
                        birthYear={person.birth_year}
                        key={person.url}
                    />
                )}
            </>
        )
    }
}

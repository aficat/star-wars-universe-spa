import React, { Component } from 'react';
import PeopleCardsSingleCard from './PeopleCardsSingleCard';
import { fetchPeople } from '../actions/peopleActions';
import { connect } from 'react-redux';

// Renders Main Body of Star Wars People's Cards
class PeopleCards extends Component {

    // Fetch list of Star Wars People
    componentDidMount() {
        // activePage = 1; renders first page of people's results
        this.props.fetchPeople(1);
    }

    /**
     * @const  {Object} peopleCards - List of People Objects
     * 
     * @returns {} returns all PeopleCardsSingleCard component for each person
     */
    render() {
        const peopleCards = this.props.people;
        return (
            <>
                {peopleCards && peopleCards.map(person =>
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
                        homeworldURL={person.homeworld}
                        filmsURLs={person.films}
                        speciesURLs={person.species}
                        vehiclesURLs={person.vehicles}
                        starshipsURLs={person.starships}
                        createdDate={person.created}
                        editedDate={person.edited}
                        key={person.url}
                    />
                )}
            </>
        )
    }
}

const mapStateToProps = state => ({
    people: state.people.people
});
export default connect(mapStateToProps, { fetchPeople })(PeopleCards);

import React, { Component } from 'react';
import PeopleCardsSingleCard from './PeopleCardsSingleCard';
import { fetchPeople } from '../actions/peopleActions';
import { connect } from 'react-redux';
import { CircularProgress, Typography } from '@material-ui/core';

// Renders Main Body of Star Wars People's Cards
class PeopleCards extends Component {

    // Fetch list of Star Wars People based on active page
    componentDidMount() {
        this.props.fetchPeople(1);
    }

    componentDidUpdate() {
        const { refreshPageStatus, activePage } = this.props;
        if (refreshPageStatus) {
            // Updates activePage and set refreshPageStatus back to false in store after re-render
            this.props.fetchPeople(activePage);
        }
    }

    /**
     * @const  {Object} peopleCards - List of People Objects
     * 
     * @returns {} returns all PeopleCardsSingleCard component for each person
     */
    renderResult = () => {
        const { people } = this.props;
        return (
            <>
                {people && people.map(person =>
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

    renderAwaitingCircularProgress = () => { return <div style={{ margin: 50 }}> <CircularProgress /> </div> }

    render() {
        const { status, message, refreshPageStatus } = this.props;
        switch (status) {
            case "done": // successfully retrieved people data
                return (
                    refreshPageStatus ?
                        this.renderAwaitingCircularProgress()
                        : this.renderResult()
                );
            case "retrieving": // retrieving people data
                return this.renderAwaitingCircularProgress();
            case "error": // error retrieving people data
                return (
                    <div>
                        <Typography
                            variant="body2"
                            component="p"
                            color="error"
                        >
                            {message}
                        </Typography>
                    </div>
                );
            default:
                return (
                    <div>
                        <Typography
                            variant="body2"
                            component="p">
                            {message}
                        </Typography>
                    </div>
                );
        }
    }
}

const mapStateToProps = state => ({
    people: state.people.people,
    status: state.people.status,
    message: state.people.message,
    refreshPageStatus: state.people.refreshPageStatus,
    activePage: state.people.activePage
});
export default connect(mapStateToProps, { fetchPeople })(PeopleCards);

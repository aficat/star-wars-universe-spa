import React, { Component } from 'react';
import { Card, CardContent, Typography, Grid, Button, CardActions } from '@material-ui/core';
import { fetchHomeworld, fetchSpecies, fetchFilms, fetchStarships, fetchVehicles, resetStore } from '../actions/personActions';
import { connect } from 'react-redux';
import PeopleCardsSingleCardModal from './PeopleCardsSingleCardModal';

const cardStyles = {
    textAlign: "left"
};

class PeopleCardsSingleCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    /**
     * Trigger to update person details and open modal box.
     * 
     * @const  {string} homeworldURL - homeworld URL
     * @const  {string[]} filmsURLs - List of film URLs
     * @const  {string[]} speciesURLs - List of species URLs
     * @const  {string[]} vehiclesURLs - List of vehicles URLs
     * @const  {string[]} starshipsURLs - List of starships URLs
     */
    handleClick = (homeworldURL, filmsURLs, speciesURLs, vehiclesURLs, starshipsURLs) => {
        this.props.fetchHomeworld(homeworldURL);
        this.props.fetchSpecies(speciesURLs);
        this.props.fetchStarships(starshipsURLs);
        this.props.fetchFilms(filmsURLs);
        this.props.fetchVehicles(vehiclesURLs);
        this.setState({ open: true })
    };

    // Trigger to close modal box
    handleClose = () => {
        this.setState({ open: false })
        this.props.resetStore();
    };

    render() {
        const {
            name,
            gender,
            birthYear,
            height,
            mass,
            eyeColor,
            hairColor,
            skinColor,
            createdDate,
            editedDate,
            films,
            starships,
            homeworld,
            vehicles,
            species,
            homeworldURL,
            filmsURLs,
            speciesURLs,
            vehiclesURLs,
            starshipsURLs,
        } = this.props;
        return (
            <Grid item xs={12} md={3}>
                <Card style={cardStyles}>
                    <CardContent>
                        <Typography
                            variant="h5"
                            component="h2"
                        >
                            {name}
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                        >
                            Gender: {gender}<br />
                        Birth Year: {birthYear}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            onClick={() => this.handleClick(homeworldURL, filmsURLs, speciesURLs, vehiclesURLs, starshipsURLs)}
                        >
                            View More Details
                            </Button>
                    </CardActions>
                </Card>
                <PeopleCardsSingleCardModal
                    name={name}
                    gender={gender}
                    height={height}
                    mass={mass}
                    eyeColor={eyeColor}
                    hairColor={hairColor}
                    skinColor={skinColor}
                    birthYear={birthYear}
                    createdDate={createdDate}
                    editedDate={editedDate}
                    open={this.state.open}
                    homeworld={homeworld}
                    species={species}
                    films={films}
                    starships={starships}
                    vehicles={vehicles}
                    handleClose={this.handleClose}
                />
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    homeworld: state.person.homeworld,
    species: state.person.species,
    films: state.person.films,
    starships: state.person.starships,
    vehicles: state.person.vehicles
});
export default connect(mapStateToProps,
    {
        fetchHomeworld,
        fetchSpecies,
        fetchFilms,
        fetchStarships,
        fetchVehicles,
        resetStore
    })(PeopleCardsSingleCard);

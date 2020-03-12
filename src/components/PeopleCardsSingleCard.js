import React, { Component } from 'react';
import { Card, CardContent, Typography, Grid, Button, CardActions } from '@material-ui/core';
import { Modal } from 'semantic-ui-react';
import { fetchHomeworld, fetchSpecies, fetchFilms, fetchStarships, fetchVehicles } from '../actions/personActions';
import { connect } from 'react-redux';

const cardStyles = {
    textAlign: "left"
};

class PeopleCardsSingleCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    handleClick = () => {
        const { homeworldURL, filmsURLs, speciesURLs, vehiclesURLs, starshipsURLs } = this.props;
        this.props.fetchHomeworld(homeworldURL);
        this.props.fetchSpecies(speciesURLs);
        this.props.fetchStarships(starshipsURLs);
        this.props.fetchFilms(filmsURLs);
        this.props.fetchVehicles(vehiclesURLs);
        this.setState({ open: true })
    };

    handleClose = () => {
        this.setState({ open: false })
    };

    renderPersonCardModal = (person) => {
        const {
            name,
            height,
            mass,
            gender,
            eyeColor,
            skinColor,
            hairColor,
            birthYear,
            createdDate,
            editedDate
        } = person;
        const { homeworld, species, vehicles, starships, films } = this.props;
        const created = new Date(createdDate);
        const edited = new Date(editedDate);
        return (
            <Modal
                size={"mini"}
                open={this.state.open}
                onClose={this.handleClose}
                closeIcon
            >
                <Modal.Header>{name}</Modal.Header>
                <Modal.Content scrolling>
                    <Typography
                        variant="body2"
                        component="p"
                    >
                        Gender: {gender}<br />
                        Birth Year: {birthYear}<br />
                        <br />
                        Height: {height}<br />
                        Mass: {mass}<br />
                        Eye Color: {eyeColor} <br />
                        Skin Color: {skinColor} <br />
                        Hair Color: {hairColor} <br />
                        <br />
                        Homeworld: {homeworld} <br />
                        Species: {species.length === 0 ?
                            "Unknown"
                            : (species.join(", "))} <br />
                        <br />
                        Vehicles:  {vehicles.length === 0 ?
                            "None"
                            : (vehicles.join(", "))} <br />
                            Starships:  {starships.length === 0 ?
                            "None"
                            : (starships.join(", "))} <br />
                        <br />
                            Films:  {films.length === 0 ?
                            "None"
                            : (films.join(", "))} <br />
                        <br />
                        Created on {created.toDateString()}<br />
                        Last edited on {edited.toDateString()}
                    </Typography>
                </Modal.Content>
            </Modal>
        )
    }

    render() {
        const {
            name,
            height,
            mass,
            gender,
            eyeColor,
            skinColor,
            hairColor,
            birthYear
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
                            variant="subtitle2"
                            component="p"
                        >
                            Gender: {gender}<br />
                        Birth Year: {birthYear}
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                        >
                            Height: {height}<br />
                            Mass: {mass}<br />
                            Eye Color: {eyeColor} <br />
                            Skin Color: {skinColor} <br />
                            Hair Color: {hairColor}
                            <br />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => this.handleClick()}>View More Details</Button>
                    </CardActions>
                </Card>
                {this.renderPersonCardModal(this.props)}
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
export default connect(mapStateToProps, { fetchHomeworld, fetchSpecies, fetchFilms, fetchStarships, fetchVehicles })(PeopleCardsSingleCard);

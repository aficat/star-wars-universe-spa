import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react';
import { Typography } from '@material-ui/core';
import { fetchHomeworld, fetchSpecies, fetchFilms, fetchStarships, fetchVehicles } from '../actions/personActions';
import { connect } from 'react-redux';

class PeopleCardsSingleCardModal extends Component {
    render() {
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
        } = this.props.person;
        const {
            homeworld,
            species,
            vehicles,
            starships,
            films
        } = this.props;
        const created = new Date(createdDate);
        const edited = new Date(editedDate);
        return (
            <Modal
                size={"mini"}
                open={this.props.open}
                onClose={this.props.handleClose}
                closeIcon
            >
                <Modal.Header>
                    {name}
                </Modal.Header>
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
        fetchVehicles
    })(PeopleCardsSingleCardModal);

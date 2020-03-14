import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchHomeworld, fetchSpecies, fetchFilms, fetchStarships, fetchVehicles, resetStore } from '../actions/personActions';

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
            editedDate,
            homeworld,
            species,
            vehicles,
            starships,
            films,
            open,
            handleClose
        } = this.props;
        const created = new Date(createdDate);
        const edited = new Date(editedDate);
        return (
            <Modal
                size={"mini"}
                open={open}
                onClose={handleClose}
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
                        Species: {species.toString() ? species.toString() : "-"} <br />
                        <br />
                        Vehicles:  {vehicles.toString() ? vehicles.toString() : "-"} <br />
                            Starships:  {starships.toString() ? starships.toString() : "-"} <br />
                        <br />
                            Films:  {films.toString() ? films.toString() : "-"} <br />
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
export default connect(mapStateToProps, {
    fetchHomeworld,
    fetchSpecies,
    fetchFilms,
    fetchStarships,
    fetchVehicles,
    resetStore
})(PeopleCardsSingleCardModal);

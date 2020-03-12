import React, { Component } from 'react';
import { Card, CardActionArea, CardContent, Typography, Grid, Tooltip } from '@material-ui/core';
import { Modal } from 'semantic-ui-react';

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

    renderPersonCard = () => {
        const { name, height, mass, gender, eyeColor, skinColor, hairColor, birthYear } = this.props;
        return (
            <Card style={cardStyles}>
                <CardActionArea onClick={() => this.handleClick()}>
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
                </CardActionArea>
            </Card>
        );
    }

    handleClick = () => {
        this.setState({ open: true })
    };

    handleClose = () => {
        this.setState({ open: false })
    };

    renderPersonCardModal = () => {
        const { name, height, mass, gender, url, eyeColor, skinColor, hairColor, birthYear } = this.props;
        return (
            <Modal size={"small"} open={this.state.open} onClose={this.handleClose} closeIcon>
                <Modal.Header>{name}</Modal.Header>
                <Modal.Content scrolling>
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
                </Modal.Content>
            </Modal>
        )
    }

    render() {
        return (
            <Grid item xs={12} md={3}>
                <Tooltip
                    title="Click to view more details."
                    placement="bottom"
                    arrow
                >
                    {this.renderPersonCard()}
                </Tooltip>
                {this.renderPersonCardModal()}
            </Grid>
        );
    }
}

export default PeopleCardsSingleCard;

import React, { Component } from 'react';
import { Card, CardActionArea, CardContent, Button, Typography, Grid } from '@material-ui/core';

const cardStyles = {
    minWidth: 275,
};

export default class PeopleCardsSingleCard extends Component {
    render() {
        return (
            <Grid item xs={12} md={3}>
                <Card style={cardStyles}>
                    <CardActionArea href="#">
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                People Name
                            </Typography>
                            <Typography color="textSecondary">
                                Description
                            </Typography>
                            <Typography variant="body2" component="p">
                                More description
                            <br />
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        );
    }
}

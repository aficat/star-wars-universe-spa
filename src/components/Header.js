import React, { Component } from 'react'
import { Typography } from '@material-ui/core';

// Renders Header of Application Title and Description
export default class Header extends Component {
    render() {
        return (
            <>
                <Typography
                    variant="h3"
                    color="textPrimary"
                >
                    Star Wars Universe
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="textPrimary"
                >
                    This is a database of all the people in the Star Wars Universe.
                </Typography>
            </>
        )
    }
}

import React, { Component } from 'react'
import { Typography } from '@material-ui/core';

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
                    Click on name cards for view each person's details.
                </Typography>
            </>
        )
    }
}

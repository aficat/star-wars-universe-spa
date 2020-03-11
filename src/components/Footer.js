import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <p>
                    Copyright Star Wars Universe
                </p>
                &copy;
                {1900 + new Date().getYear()} Afiqah Rashid
            </div>
        )
    }
}
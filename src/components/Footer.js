import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                Copyright Star Wars Universe
                &copy;
                {1900 + new Date().getYear()}
                , Afiqah Rashid
            </div>
        )
    }
}
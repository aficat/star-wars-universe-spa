import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import PeopleCards from './components/PeopleCards';
import CardsPagination from './components/CardsPagination';
import { Grid } from '@material-ui/core';
import Footer from './components/Footer';

const containerStyles = {
  marginTop: "50px",
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [],
      count: 0,
      next: null,
      previous: null
    }
  }

  callStarWarsPeopleAPI = () => {
    fetch("https://swapi.co/api/people").then(res => res.json())
      // .then(data => { console.log(data)  })
      .then(data => this.setState({
        people: data.results,
        count: data.count,
        next: data.next,
        previous: data.previous
      }))
      .catch(error => console.error(error));
  }

  componentDidMount() {
    this.callStarWarsPeopleAPI();
  }

  render() {
    return (
      <Container style={containerStyles} align="center">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Header />
            <br />
            <hr />
          </Grid>
          <PeopleCards people={this.state.people} />
          <Grid item xs={12}>
            <br />
            <CardsPagination count={this.state.count} />
          </Grid>
          <Grid item xs={12}>
            <br />
            <Footer />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default App;

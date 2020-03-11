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
  render() {
    return (
      <Container style={containerStyles} align="center">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Header />
            <br />
            <hr />
          </Grid>
          <PeopleCards />
          <Grid item xs={12}>
            <br />
            <CardsPagination />
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

import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import PeopleCards from './components/PeopleCards';
import CardsPagination from './components/CardsPagination';
import { Grid } from '@material-ui/core';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './store';

const containerStyles = {
  margin: "auto",
  marginTop: "50px"
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container style={containerStyles} align="center">
          <Grid container spacing={3} justify="center">
            <Grid item xs={12}>
              <Header />
              <br />
              <hr />
            </Grid>
            <PeopleCards />
            <Grid item xs={12}>
              <br />
              <CardsPagination count={87} />
            </Grid>
            <Grid item xs={12}>
              <br />
              <Footer />
            </Grid>
          </Grid>
        </Container>
      </Provider>
    );
  }
}

export default App;

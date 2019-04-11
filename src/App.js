import './App.css';
import React, { Component } from 'react';
import apiKey from './config';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Header from './Components/Header';
import Nav from './Components/Nav';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import NoResults from './Components/NoResults';


const api = apiKey;

class App extends Component {

  constructor() {
    super();
    this.state = {
      pics: [],
      loading: true
    };
  } 
// Helps load the JSON from the API
  componentDidMount() {
    this.defaultSearch();
    this.kieselSearch();
    this.fenderSearch();
    this.gibsonSearch();
  }

  defaultSearch = ( query = 'guitars') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then(response => 
        {
        this.setState({
          guitarPics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(function (error) {
        console.log('Error fetching and parsing data', error);
      })
  }

  kieselSearch = (query = 'kieselguitars' ) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then(response => 
        {
        this.setState({
          kieselPics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(function (error) {
        console.log('Error fetching and parsing data', error);
      })
  }

  fenderSearch = (query = 'fenderguitars' ) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then(response => 
        {
        this.setState({
          fenderPics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(function (error) {
        console.log('Error fetching and parsing data', error);
      })
  }

  gibsonSearch = (query = 'gibsonguitars' ) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then(response => 
        {
        this.setState({
          gibsonPics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(function (error) {
        console.log('Error fetching and parsing data', error);
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <SearchBar searchPhoto={this.defaultSearch}/>
          <Nav />
          <Switch>
            <Route exact path = '/' 
              render = { 
                () => (this.state.loading) 
                  ? <p> Loading...</p> 
                  : <SearchResults data={this.state.guitarPics} />} />
            <Route exact path = '/kieselguitars'
              render = {
                () => (this.state.loading) 
                  ? <p> Loading...</p> 
                  : <SearchResults data={this.state.kieselPics} />} /> 
              <Route exact path = '/fenderguitars'
                render = {
                  () => (this.state.loading) 
                    ? <p> Loading...</p> 
                    : <SearchResults data={this.state.fenderPics} />} />
              <Route exact path = '/gibsonguitars'
                render = {
                  () => (this.state.loading) 
                    ? <p> Loading...</p> 
                    : <SearchResults data={this.state.gibsonPics} />} />
              <Route path = '/search'
                render = {
                  () => (this.state.loading) 
                    ? <p> Loading...</p> 
                    : <SearchResults data={this.state.guitarPics} />} />
                      <Route component={NoResults} />
            </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;

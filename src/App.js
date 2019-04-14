import './App.css';
import React, { Component } from 'react';
import apiKey from './config';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components needed to run application
import Header from './Components/Header';
import Nav from './Components/Nav';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import KieselSearch from './Components/KieselSearch';
import FenderSearch from './Components/FenderSearch';
import GibsonSearch from './Components/GibsonSearch';
import NotFound from './Components/NotFound';

//api key in the config file used to help get api data from the flickr api
const api = apiKey;

class App extends Component {

  constructor() {
    super();
    this.state = {
      searchPics: [],
      kieselPics: [],
      fenderPics: [],
      gibsonPics: [],
      loading: true
    };
  } 

// Helps load the JSON from the API
//Using didMount makes it clear that data won’t be loaded until after the initial render. 
//This reminds you to set up initial state properly, so you don’t end up with undefined state 
//that causes errors.
//Reference: https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/
  componentDidMount() {
    this.defaultSearch();
    this.kieselSearch();
    this.fenderSearch();
    this.gibsonSearch();
  }
  //different search scenarious using the axios API: https://flaviocopes.com/axios/#the-axios-api
  defaultSearch = ( query = 'guitars') => {
    this.state.loading = true;//sets state back to true after initial load of API data
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${query}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
      .then(response => 
        {
        this.setState({
          searchPics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(function (error) {
        console.log('Error fetching and parsing data', error);
      })
  }

  kieselSearch = (query = 'kieselguitars' ) => {
    this.state.loading = true;
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
    this.state.loading = true;
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
    this.state.loading = true;
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
                  : <SearchResults data={this.state.searchPics} />} />
            <Route exact path = '/kieselguitars'
              render = {
                () => (this.state.loading) 
                  ? <p> Loading...</p> 
                  : <KieselSearch data={this.state.kieselPics} />} /> 
              <Route exact path = '/fenderguitars'
                render = {
                  () => (this.state.loading) 
                    ? <p> Loading...</p> 
                    : <FenderSearch data={this.state.fenderPics} />} />
              <Route exact path = '/gibsonguitars'
                render = {
                  () => (this.state.loading) 
                    ? <p> Loading...</p> 
                    : <GibsonSearch data={this.state.gibsonPics} />} />
              <Route path = '/search'
                render = {
                  () => (this.state.loading) 
                    ? <p> Loading...</p> 
                    : <SearchResults data={this.state.searchPics} />} />
                {/* if a non-existing route is used, then the Not Found component is triggered */}
               <Route component={NotFound} />
            </Switch>
        </div> 
        
      </BrowserRouter>
    );
  
  }
              
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import Characters from './Characters';
import CharacterInfo from './CharacterInfo';

import './App.css';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';

const pages = {
  'characters': Characters,
  'character': CharacterInfo
}
class App extends Component {
  state = {
    characters: [],
    count: 0,
    next: '',
    previous: '',
    page: 'characters',
    characterId: 0
  }

  loadCharacters = (url) => {
    axios.get(url)
    // .then(console.log)
    .then(res => this.setState({characters: res.data.results, next: res.data.info.next, previous: res.data.info.next, count: res.data.info.count}))
    .catch(console.log)
  }

  componentWillMount() {
    this.loadCharacters('character');
  }

  next = (e) => {
    e.preventDefault();
    this.loadCharacters(this.state.next);
  }

  previous = (e) => {
    e.preventDefault();
    this.loadCharacters(this.state.previous);
  }

  loadCharacter = (id) => {
    axios.get(`character/${id}`)
    // .then(console.log)
    .then(res => this.setState({character: res.data, page: 'character'}))
    .catch(console.log)
  }

  viewCharacter = (id) => {
    this.loadCharacter(id);
    this.setState({id})
  }

  render() {
    const {characters, page, character} = this.state;
    const renderPage = page ==='characters' ?  <Characters characters={characters} next={this.next} previous={this.previous} viewCharacter={this.viewCharacter}/> :
      <CharacterInfo {...character}/>
    return (
      <React.Fragment>
        {renderPage}
      </React.Fragment>
    );
  }
}

export default App;

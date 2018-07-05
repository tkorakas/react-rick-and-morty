import React, { Component } from 'react';
import axios from 'axios';
import Characters from './Characters';
import CharacterInfo from './CharacterInfo';
import mainLogo from'./Rick_and_Morty_logo.png';

import './App.css';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';

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
    .then(res => this.setState({characters: res.data.results, next: res.data.info.next, previous: res.data.info.prev, count: res.data.info.count}))
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
    .then(res => this.setState({character: res.data, page: 'character'}))
    .catch(console.log)
  }

  viewCharacter = (id) => {
    console.log(id)
    this.loadCharacter(id);
    this.setState({id})
  }

  back = (e) => {
    e.preventDefault();
    this.setState({page: 'characters'});
  }

  render() {
    const {characters, page, character, next, previous} = this.state;
    const renderPage = page ==='characters' ?  <Characters characters={characters} next={next ? this.next : null} previous={previous ? this.previous : null} viewCharacter={this.viewCharacter}/> :
      <CharacterInfo {...character} back={this.back}/>
    return (
      <React.Fragment>
        <div className="logo">
          <img src={mainLogo} />
        </div>
        {renderPage}
      </React.Fragment>
    );
  }
}

export default App;

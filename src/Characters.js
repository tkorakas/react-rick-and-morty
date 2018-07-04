import React from 'react';
import Character from './Character';
import Pagination from './Pagination';

const Characters = (props) => {
  return (
    <React.Fragment>
      <ul className="App">
        {props.characters.map(character => <li key={character.id}><Character viewCharacter={props.viewCharacter} {...character}/></li>)}
      </ul>
      <Pagination count={props.count} next={props.next} previous={props.previous}/>
    </React.Fragment>
  );
}

export default Characters;
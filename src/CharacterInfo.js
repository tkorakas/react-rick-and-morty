import React from 'react';
import Overdrive from 'react-overdrive'

const CharacterInfo = (props) => {
  return (
    <div className="character-info">
      {props.id ?
        <React.Fragment>
          <div className="character--title">
            <a href="#" onClick={props.back}>&larr;</a>
            <strong>{props.name}</strong>
          </div>
          <div>
          <Overdrive id={props.name} duration={300}>
            <img className="character--image" alt={props.name} src={props.image} />
          </Overdrive>
          </div>
        </React.Fragment>
        : null
      }
    </div>
  )
}

export default CharacterInfo;
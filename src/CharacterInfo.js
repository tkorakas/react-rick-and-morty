import React from 'react';
import Overdrive from 'react-overdrive'

const CharacterInfo = (props) => {
  console.log(props)
  return (
    <div className="character-info">
      {props.id ?
        <React.Fragment>
          <div className="character--title">
            <strong>{props.name}</strong>
          </div>
          <div>
          <Overdrive id={props.name} duration={300}>
            <img alt={props.name} src={props.image} />
          </Overdrive>
          </div>
        </React.Fragment>
        : null
      }
    </div>
  )
}

export default CharacterInfo;
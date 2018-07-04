import React from 'react';
import Overdrive from 'react-overdrive'

const Character = (props) => {
  return (
    <div className="character">
        <React.Fragment>
          <div className="character--title">
            <strong><a onClick={(e) => { e.preventDefault(); props.viewCharacter(props.id) }} href="#">{props.name}</a></strong>
          </div>
          <div>
          <Overdrive id={props.name} duration={500} animationDelay={2}>
            <img alt={props.name} src={props.image} />
          </Overdrive>
          </div>
        </React.Fragment>
    </div>
  )
}

export default Character;
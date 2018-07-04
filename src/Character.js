import React from 'react';
import Overdrive from 'react-overdrive'

const Character = (props) => {
  return (
    <div className="character">
      <a onClick={(e) => { e.preventDefault(); props.viewCharacter(props.id) }} href="#">
        {/* <div className="character--title">
          <strong>{props.name}</strong>
        </div> */}
        <div>
          <Overdrive id={props.name} duration={500} animationDelay={2}>
            <img className="character--image" alt={props.name} src={props.image} />
          </Overdrive>
        </div>
      </a>
    </div>
  )
}

export default Character;
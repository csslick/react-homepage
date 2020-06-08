import React from 'react';

const Work = (props)=> {
  return (
    <>
      <li>
        <img src={props.img} alt={props.title} />
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </li>
    </>
  )
}

export default Work;
import React from 'react'

export const GifGridItem = (props) => {

    //console.log(props)
  return (
    <div className='card animate__animated animate__bounce'>
            <img src={props.url} alt={props.title}/>
            <p> {props.title} </p>
    </div>
  )
}

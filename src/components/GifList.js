//import React, { Component } from 'react';
import React from 'react';


const Gif = (props) => {
    return(
      <li>
        <img src={`${props.gif.images.original.url}`} alt='gif'/>
      </li>
    )
}

const GifList = (props) => {return <ul>{props.gifs.map((gif, index) => <Gif key={index} gif={gif}/>)}</ul>}

export default GifList;

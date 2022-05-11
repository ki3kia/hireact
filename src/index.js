import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useState} from "react";


const root = ReactDOM.createRoot(document.getElementById('poke'));
let pokeArr = getPokes();
pokeArr.then((response) => {
        root.render(<List array={response}/>);
})
    .catch(reject => root.render(<div>Something going wrong :(</div>));


function List(props){
    return props.array.map(item => <Pokemon pokemon={item}/>);
}

function Pokemon(props){
    return <div>{props.pokemon.name}</div>;
}

async function getPokes(offset = 1, limit = 10) {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let response = await fetch(url + `?offset=${offset}&limit=${limit}`)
        .then(response => response.json())
        .then(response => response.results);
    return response;
}
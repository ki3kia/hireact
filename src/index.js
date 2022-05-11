import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('poke'));
let pokeArr = getPokes();
pokeArr.then((response) => {
    let result = response.map(poke => <div>{poke.name}</div>);
    root.render(result);
})
    .catch(reject => root.render(<div>Something going wrong :(</div>));



async function getPokes(offset = 1, limit = 10) {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let response = await fetch(url + `?offset=${offset}&limit=${limit}`)
        .then(response => response.json())
        .then(response => response.results);
    return response;
}
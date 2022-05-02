import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import getPokes from './App';


const root = ReactDOM.createRoot(document.getElementById('poke'));
let pokeArr = getPokes();
pokeArr.then((response) => {
    let result = response.map(poke => <div>{poke.name}</div>);
    root.render(result);
})
    .catch(reject => root.render(<div>Something going wrong :(</div>));
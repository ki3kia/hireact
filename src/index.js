import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useState, useEffect, useCallback} from "react";


const root = ReactDOM.createRoot(document.getElementById('poke'));
root.render(<Pokemon/>)

function Pokemon() {
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10)

    const getPokesFromApi = useCallback(() => {
        let offset = page * limit;
        let url = "https://pokeapi.co/api/v2/pokemon/";
        return fetch(url + `?offset=${offset}&limit=${limit}`)
            .then(response => response.json())
            .then(response => response.results);
    }, [page, limit]);


    return (
        <section>
            <ListPokemons getPokemons={getPokesFromApi}/>
            <button onClick={() => setPage(prev => ++prev)}>Next Page</button>
            <input type="text" onInput={(e) => setLimit(e.target.value)}/>
        </section>
    );
}

function ListPokemons({getPokemons}) {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons().then(pokes => setPokemons(pokes));
    }, [getPokemons]);

    return pokemons.map(item => <div key={item.name}>{item.name}</div>)
}
async function getPokes(offset = 1, limit = 10) {
  let url = "https://pokeapi.co/api/v2/pokemon/";
  let response = await fetch(url + `?offset=${offset}&limit=${limit}`)
      .then(response => response.json())
      .then(response => response.results);
  return response;
}


export default getPokes;

import React from "react";

function Pokeinfo() {
  async function fetchData(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    try {
      const pokemonName = document
        .getElementById("pokemonName")
        .value.toLowerCase();
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      if (!response.ok) {
        throw new Error("Couldn't fetch resource");
      }
      const data = await response.json();
      console.log(data);
      const pokemons = data.sprites.front_default;
      const pokemons2 = data.sprites.back_default;
      const pokemons3 = data.sprites.front_shiny;
      const pokemons4 = data.sprites.back_shiny;
      const pokemons5 = data.sprites.front_female;
      const pokemons6 = data.sprites.back_female;

      const pokemonspeciesname = data.species.name;
      const weight = data.weight;
      const attackTypes = data.types.map(type => type.type.name);
      const abilities = data.abilities.map(abilityObj => abilityObj.ability.name);
      const moves = data.moves.map(move => move.move.name);
      const height = data.height;
      const spnames = document.getElementById("pokemonspeciesname");
      spnames.innerHTML = `
  <ul>
    <li>${pokemonspeciesname} is an ${attackTypes.join(", ")} species of Pokémon.</li>
    <li>Height: ${height} meters</li>
    <li>Weight: ${weight} hectograms.</li>
    <li>Abilities: ${abilities.join(", ")}.</li>
    <li>Attack Types: ${attackTypes.join(", ")}.</li>
    <li>Knows ${moves.length} moves: ${moves.join(", ")}.</li>
  </ul>`;
  
      var heading = document.getElementById("myHeading");
      var UCase = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
      heading.innerHTML = `${UCase}`;
      var cardd = document.getElementById("show-card");
      cardd.style.display = "block";
      const imgElement = document.getElementById("pokemon");
      imgElement.src = pokemons;
      const imgElement2 = document.getElementById("pokemon2");
      imgElement2.src = pokemons2;

      const imgElement3 = document.getElementById("pokemon3");
      imgElement3.src = pokemons3;

      const imgElement4 = document.getElementById("pokemon4");
      imgElement4.src = pokemons4;

      const imgElement5 = document.getElementById("pokemon5");
      imgElement5.src = pokemons5;

      const imgElement6 = document.getElementById("pokemon6");
      imgElement6.src = pokemons6;
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div>
      <form class="container-fluid" onSubmit={fetchData}>
        <div class="input-group ">
          <input
            type="text"
            id="pokemonName"
            class="form-control"
            placeholder="Search for Pokemon..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <button
            class="btn btn-outline-success"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>

      <div class="card" id="show-card" style={{ display: "none" }}>
        <div class="card-body">
          <img src="" alt="Pokemon" id="pokemon" />
          <img src="" alt="Pokemon" id="pokemon2" />
          <img src="" alt="Pokemon" id="pokemon3" />
          <img src="" alt="Pokemon" id="pokemon4" />
          <img src="" alt="Pokemon" id="pokemon5" />
          <img src="" alt="Pokemon" id="pokemon6" />
          <h3 id="myHeading"></h3>
          <div >
            <p class="card-text" id="pokemonspeciesname"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokeinfo;

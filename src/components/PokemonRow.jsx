import React from "react";
import { Button } from "@mui/material";
import PokemonType from "../PokemonType";

const PokemonRow = ({ pokemon, onSelect }) => (
  <>
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onSelect(pokemon)}
        >
          More Information
        </Button> 
      </td>
    </tr>
  </>
);

PokemonRow.prototype = {
  pokemon: PokemonType
};

export default PokemonRow;

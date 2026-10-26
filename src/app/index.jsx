import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import PokemonCard from '../componenti1/PokemonCard';

const POKEMON_DATA = [
  {
    id: '1',
    name: 'Blastoise',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvIQiTqw2eplpsdjZXd2ib6Vpt1eJG4wC_1wINofvZg&s=10',
    colore: 'lightskyblue',
         tipo: "Water",
      atc: "80",
        def: "100",
        vel: "70",
        hp: "79",
  },
  {
    id: '2',
    name: 'Charizard',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-qrNCSE2da3XtM30lYmOJxqV1r0n-t6x65SpY-o3Zw&s=10',
    colore: 'coral',
       tipo: "Fire",
      atc: "80",
        def: "100",
        vel: "70",
        hp: "79",
  },
  {
    id: '3',
    name: 'Venusaur',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBeKhhNbwuRsnhRZt4o8Q6G63YVdXOWz-RPhPJgZy5Q&s=10',
    colore: 'mediumaquamarine',
     tipo: "Forest",
      atc: "80",
        def: "100",
        vel: "70",
        hp: "79"
  }
];

const YourApp = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);


const carica = async () => {
  try {
    // ritardo finto di 3 secondi per mostrare "Caricamento..."
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const risposta = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    const dati = await risposta.json();
    setPokemon(dati);
  } catch (errore) {
    console.log("Errore:", errore);
  } finally {
    setLoading(false);   // eseguito SEMPRE, sia se va bene sia se va male
  }
};
  useEffect (() => {carica();
  }, []);


  return (
 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <Text>Caricamento...</Text>
      ) : (
        <PokemonCard
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          tipo={pokemon.types[0].type.name}
          colore="mediumaquamarine"
          hp={pokemon.stats[0].base_stat}
          atc={pokemon.stats[1].base_stat}
          def={pokemon.stats[2].base_stat}
          vel={pokemon.stats[5].base_stat}
        />
      )}
    </View>
  );
};

export default YourApp;

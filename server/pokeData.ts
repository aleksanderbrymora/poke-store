import axios, { AxiosResponse } from 'axios';
import { writeFile } from 'fs';

(async () => {
	const { data } = await axios.get(
		'https://pokeapi.co/api/v2/pokemon?limit=100',
	);
	const pokemon = data.results;
	let allData: AxiosResponse[] = await Promise.all(
		pokemon.map((p: { name: string; url: string }) => axios.get(p.url)),
	);
	type stat = {
		value: number;
		image: string;
	};
	type pokeDataType = {
		abilities: {
			name: string;
			url: string;
		}[];
		height: number;
		id: number;
		name: string;
		image: string;
		stats: {
			hp: stat;
			attack: stat;
			defense: stat;
			specialAttack: stat;
			specialDefense: stat;
			speed: stat;
		};
		types: {
			name: string;
			image: string;
		}[];
		weight: number;
		experience: number;
	};
	let sanitizedPokemonData: pokeDataType[];
	sanitizedPokemonData = allData.map((d: AxiosResponse) => {
		const {
			abilities,
			base_experience,
			height,
			id,
			name,
			sprites: { front_default },
			stats,
			types,
			weight,
		} = d.data;

		return {
			id,
			name,
			image: front_default,
			abilities: abilities.map(
				(a: { ability: { name: string; url: string } }) => ({
					name: a.ability.name,
					image: a.ability.url,
				}),
			),
			experience: base_experience,
			height,
			weight,
			stats: {
				hp: {
					value: stats[0]['base_effort'],
					image: stats[0].stat.url,
				},
				attack: {
					value: stats[1]['base_effort'],
					image: stats[1].stat.url,
				},
				defense: {
					value: stats[2]['base_effort'],
					image: stats[2].stat.url,
				},
				specialAttack: {
					value: stats[3]['base_effort'],
					image: stats[3].stat.url,
				},
				specialDefense: {
					value: stats[4]['base_effort'],
					image: stats[4].stat.url,
				},
				speed: {
					value: stats[5]['base_effort'],
					image: stats[5].stat.url,
				},
			},
			types: types.map(
				(t: { type: { name: string; url: string } }) => t.type.name,
			),
		};
	});
	writeFile(
		'./pokemon.json',
		JSON.stringify({ pokemon: sanitizedPokemonData }, null, 2),
		'utf-8',
		() => console.log('done'),
	);
})();

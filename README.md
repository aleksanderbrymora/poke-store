# Poke store

## Description

This project is a small thing to get me started with working with few cool technologies:

- GraphQL (by running a GraphQL json server)
- Recoil
- React Suspense
- Typescript in react (which took ages to get working. Apparently node modules in `server/` were the problem?)
- Custom hooks

## Instructions

To run it you must have [json-graphql-server](https://github.com/marmelab/json-graphql-server) installed globally.

To start the whole project run: `npm run dev` or `yarn dev`

## Backend

This pseudo backend is in the `server` folder. Its written in TypeScript and fetches information from [PokeAPI](https://pokeapi.co/).

Since the API does not provide data structure the way I want it to I wrote a simple node program that fetches the data from the api and creates the response in the format I want it to. Thank you typescript for making it easier.

All that info is fetched inside `Promise.all` to take care of that sweet async JS functionality, and stored in the json file which then is imported by `db.js` which is a file which the json-graphql-server is expecting.

## Frontend

TBD

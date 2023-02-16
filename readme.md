# Fetch Shim

An isomoprhic Fetch function, it just gives you the native one if available, or the one from [`undici`](https://github.com/nodejs/undici).

## Install

```sh
npm install --save fetch-shim
```

## Usage

```ts
import fetch from 'fetch-shim';

const response = await fetch ( 'https://jsonplaceholder.typicode.com/todos/1' );
const json = await response.json ();

console.log ( json ); // => { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
```

## License

MIT © Fabio Spampinato

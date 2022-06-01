
/* IMPORT */

import {describe} from 'fava';
import fetch from '../dist/node.js';

/* MAIN */

describe ( 'Fetch Shim', it => {

  it ( 'works', async t => {

    const response = await fetch ( 'https://jsonplaceholder.typicode.com/todos/1' );
    const json = await response.json ();

    t.deepEqual ( json, { userId: 1, id: 1, title: 'delectus aut autem', completed: false } );

  });

});

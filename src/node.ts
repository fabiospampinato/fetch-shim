
/* IMPORT */

import './node.silencing';
import {fetch} from 'undici';

/* EXPORT */

export default globalThis.fetch || fetch;

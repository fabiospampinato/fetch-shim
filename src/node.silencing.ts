
/* MAIN */

//TODO: Remove this eventually, once the warnings are deleted in an LTS version of Node

// The following silences some warnings that undici triggers, not ideal, but those warnings are too annoying

const _emitWarning = globalThis['process']['emitWarning'];

globalThis['process']['emitWarning'] = ( warning: string, ...extras: string[] ) => {

  if ( extras[0] === 'ExperimentalWarning' && warning === 'stream/web is an experimental feature. This feature could change at any time' ) return;

  if ( extras[0] === 'ExperimentalWarning' && warning === 'buffer.Blob is an experimental feature. This feature could change at any time' ) return;

  return _emitWarning ( warning, ...extras );

};

/* EXPORT */

export {};

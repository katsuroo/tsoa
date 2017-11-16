import * as db from 'debug';
import * as mg from 'magic-globals';

const debug = db('tsoa:' + mg.__file);

export function Extension<T>(extensionName: string, value?: string | T[] | object): any {
  debug('Extension factory arg: ' + extensionName + ': ' + JSON.stringify(value));
  return () => {
    debug('Extension decorator called');
    return;
  };
}

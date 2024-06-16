import { shared } from '../esp32/shared.js';

export function example () { 
    console.log(`Inside example function, shared is ${shared()}`);
}

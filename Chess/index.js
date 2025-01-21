import {initGame} from './data/data.js';
import { globalEvent } from './events/global.js';
import { initGameRender } from './render/main.js';

const globalState = initGame()

initGameRender(globalState);

globalEvent()
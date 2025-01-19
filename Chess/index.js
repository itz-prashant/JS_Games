import {initGame} from './data/data.js';
import { initGameRender } from './render/main.js';

const globalState = initGame()

initGameRender(globalState);

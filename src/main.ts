import App from "./App.vue";
import { game } from './game'
import { createApp } from './custom-renderer'

createApp(App).mount(game.stage);
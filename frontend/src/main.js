import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import run from '../../backend/connect.js'

run().catch(console.dir);

createApp(App).mount('#app')

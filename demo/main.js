import { createApp } from 'vue'
import App from './App.vue'
import { installPointerInput } from '../src/lib/pointerInput.js'

installPointerInput()
createApp(App).mount('#app')

import { createApp } from 'vue'
import Fixture from './Fixture.vue'
import { installPointerInput } from '../../dist/share-ui.js'
import '../../dist/share-ui.css'

installPointerInput()
createApp(Fixture).mount('#app')

import { createApp } from 'vue'
import { TvDemo } from '@todovue/tv-demo'
import TvCard from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import './style.scss'

const app = createApp(TvCard)
app.component('TvDemo', TvDemo)
app.mount('#tv-card')

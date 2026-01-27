import { createApp } from 'vue'
import TvCard from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import '@todovue/tv-label/style.css'
import '@todovue/tv-button/style.css'
import './style.scss'

const app = createApp(TvCard)
app.mount('#tv-card')

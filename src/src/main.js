import { createApp } from 'vue'
import App from './App.vue'

import VueCookies    from 'vue-cookies'

const app = createApp(App)

app.use(VueCookies     )
app.$cookies.config('7d')

app.mount('#app')
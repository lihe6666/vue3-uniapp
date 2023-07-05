import { createSSRApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue";

const pinia = createPinia()
const app = createSSRApp(App)

app.use(pinia)
app.config.errorHandler = (err) => {
  console.log('err: ', err)
}

export function createApp() {

  return {
    app,
  };
}
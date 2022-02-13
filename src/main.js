import { createApp } from 'vue'
import App from './App.vue'
import upperFirst from "lodash"
import camelCase from "lodash"

const requireComponent = require.context(
    './components',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
)

const app = createApp(App)
requireComponent.keys().foreach(fileName=>{
    const componentConfig = requireComponent(fileName)
    const componentName = upperFirst(
        camelCase(fileName.replace(/^\.\/(.*)\.\w+$/,'$1'))
    )
    app.component(componentName,componentConfig.default || componentConfig)
})


app.mount('#app')

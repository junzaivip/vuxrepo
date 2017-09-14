import Vue from 'vue'
import App from './App'
import FormPreview from './components/FormPreview.vue'
import VueRouter from 'vue-router'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: FormPreview
  }
})

router.start(App, '#app')


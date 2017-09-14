import Vue from 'vue'
import App from './App'
import XTextarea from './components/FormPreview.vue'
import VueRouter from 'vue-router'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: XTextarea
  }
})

router.start(App, '#app')


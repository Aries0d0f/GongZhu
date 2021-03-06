import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
import VueDraggable from 'vue-draggable'

import App from './App'
import store from './store'

Vue.use(VueDraggable)

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('https://pig-game.aries0d0f.me'),
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))

const app = new Vue({
  store,
  ...App
}).$mount('#app')

export { app }

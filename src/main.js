import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const functions = require('firebase-functions');

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  // TODO: In development direct apiKey, in production using ENV
  apiKey: "AIzaSyC3UxGlwF4T_H538owof5mq8wAHpWnSLp4",
  authDomain: "fir-vue-todo-bd004.firebaseapp.com",
  databaseURL: "https://fir-vue-todo-bd004.firebaseio.com",
  projectId: "fir-vue-todo-bd004",
  storageBucket: "",
  messagingSenderId: "532353171515",
  appId: "1:532353171515:web:53d37e5622260335"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

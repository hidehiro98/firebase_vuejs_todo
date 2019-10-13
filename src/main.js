import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

// const functions = require('firebase-functions');

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCC8z1OuWO1PaF-LQ7p5GruV_nAZJvCOs",
    authDomain: "vuejs-nagaoka-20190928.firebaseapp.com",
    databaseURL: "https://vuejs-nagaoka-20190928.firebaseio.com",
    projectId: "vuejs-nagaoka-20190928",
    storageBucket: "",
    messagingSenderId: "989637855048",
    appId: "1:989637855048:web:2548cc31a5f90a505bd57d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

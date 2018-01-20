// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuefire from 'vuefire';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import 'bulma-divider/bulma-divider.css';

import App from './App';
import router from './router';
import firebase from './services/firebase';

Vue.use(Vuefire);
Vue.use(VueRouter);
Vue.use(Buefy);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  firebase: {
    h2h: firebase.database.ref('h2h').orderByChild('created_at'),
  },
  created() {
    firebase.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/');
      } else {
        this.$router.push('/login');
      }
    });
  },
});

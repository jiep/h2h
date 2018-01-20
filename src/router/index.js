import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/components/Home';
import Login from '@/components/Login';
import Game from '@/components/Game';
import GameList from '@/components/GameList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: GameList,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/new',
      component: Game,
    },
  ],
});

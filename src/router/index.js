import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import NewGame from '@/components/NewGame';
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
      component: NewGame,
    },
  ],
});

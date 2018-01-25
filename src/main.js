import FoodBar from './FoodBar.js';
import Confirm from './Confirm.js';

const router = new VueRouter({
  routes: [
    { path: '/', component: FoodBar },
    { path: '/confirm', component: Confirm }
  ]
});

const app = new Vue({
  el: '#app',
  router
});

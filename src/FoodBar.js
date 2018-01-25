import { api } from './api.js';

export default {
  template: `
    <div class="main">
      <h1>Welcome to Vue food bar!</h1>
      <span class="is-large">🍔</span> <button id="burger" @click="add('🍔')">Add 1</button>
      <span class="is-large">🥤</span> <button id="drink" @click="add('🥤')">Add 1</button>
      <span class="is-large">🍟</span> <button id="fries" @click="add('🍟')">Add 1</button>
      <span class="is-large">🍦</span> <button id="ice-cream" @click="add('🍦')">Add 1</button>
      <div id="menu" v-if="menu.length > 0">
        <h2>Here's what your ordered:</h2>
        <div class="is-large">
          <span>👉</span>
          <span>{{ menu.join('') }}</span>
        </div>
        <div class="checkout"><button @click="checkout">Checkout!</button></div>
      </div>
    </div>
  `,
  data () {
    return {
      menu: []
    }
  },
  methods: {
    add (item) {
      this.menu.push(item);
    },
    checkout () {
      return api.checkout().then(() => {
        this.$router.push('/confirm');
      });
    }
  }
};

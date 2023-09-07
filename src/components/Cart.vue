<template>
  <div>
    <h2>Your Cart</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        <img :src="item.image" :alt="item.name" width="50" />
        {{ item.name }} - ${{ item.price }} x {{ item.quantity }}
        <button @click="removeFromCart(item)" class="btn btn-danger btn-sm">Remove</button>
      </li>
    </ul>
    <p>Total: ${{ total }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      return this.$store.getters.cartTotal;
    },
  },
  methods: {
    removeFromCart(item) {
      item.quantity = 0;
      this.$store.commit('removeFromCart', item);
    },
  },
};
</script>

<style scoped>
/* Your CSS styles here */
</style>

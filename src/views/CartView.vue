<template>
  <div>
    <div v-if="cartItems.length > 0" class="row p-4 justify-content-evenly">
      <cart />
    </div>
    <div v-else>Cart is empty.</div>
  </div>
</template>

<script>
import cart from "../components/Cart.vue";
export default {
  computed: {
    allCart() {
      return this.$store.state.cart;
    },
    cartItems() {
      return this.allCart || [];
    },
  },
  mounted() {
    this.$store.dispatch("getCart");
  },
  components: {
    cart, 
  },
};
</script>

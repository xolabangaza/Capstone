<template>
  <div>
    <div v-if="cartItems.length > 0">
      <cart />
    </div>
    <div class="ju" v-else>Cart is empty.</div>
  </div>
</template>

<script>
import cart from "../components/cart.vue";
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
<style scoped>
.ju{
  color: blueviolet;
}
  
</style>
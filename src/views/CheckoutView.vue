<template>
  <div>
    <h2 class="checkout-title">Checkout</h2>
    <table class="table checkout-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.cartID" class="checkout-item">
          <td>{{ item.prodNAME }}</td>
          <td>R {{ item.prodPRICE }}.00</td>
          <td>{{ item.prodQUANTITY }}</td>
          <td>R {{ item.prodPRICE * item.prodQUANTITY }}.00</td>
        </tr>
      </tbody>
    </table>
    <p class="checkout-total">Total Price: R {{ totalCartPrice }}.00</p>
    <button class="btn btn-primary place-order-btn" @click="placeOrder">Place Order</button>
  </div>
</template>

<script>
export default {
    computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalCartPrice() {
      return this.cart.reduce((total, item) => total + item.prodPRICE * item.prodQUANTITY, 0);
    },
  },
  methods: {
    placeOrder() {
      // Clear the cart by dispatching an action
      this.$store.dispatch("clearCart");

      // You can also perform other order-related actions here, such as sending the order to a server or navigating to a thank you page.

      // For example, navigate to a thank you page:
      this.$router.push("/products");
    },
  },
};
</script>



<style scoped>
/* Checkout page styles */
.checkout-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: purple;
}

.checkout-table {
  width: 100%;
  border-collapse: collapse;
}

.checkout-table th,
.checkout-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.checkout-item:hover {
  background-color: #f5f5f5;
}

.checkout-total {
  font-size: 18px;
  margin-top: 20px;
  font-weight: bold;
  color: purple;
}

.place-order-btn {
  margin-top: 20px;
}
</style>

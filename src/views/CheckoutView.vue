<template>
  <div>
    <h2 class="checkout-title text-center">Checkout</h2>
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
    <button class="btn place-order-btn" @click="placeOrder">Place Order</button>
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
      this.$store.dispatch("clearCart");


      
      this.$router.push("/products");
    },
  },
};
</script>



<style scoped>
.checkout-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: purple;
}

.checkout-table {
  width: 80%;
  border-collapse: collapse;
  margin-left: 120px;
  
}

.checkout-table th,
.checkout-table td {
  padding: 10px;
  text-align: left;
  background-color: palevioletred;
  border-radius: 10px;
  
}

.checkout-item:hover {
  background-color: #f5f5f5;
}

.checkout-total {
  font-size: 18px;
  margin-top: 20px;
  margin-left: 120px;
  font-weight: bold;
  color: purple;
}

.place-order-btn {
  margin-top: 20px;
  margin-left: 120px;
  background-color: pink;
  color: #bd33d5;
}
.place-order-btn:hover{
  background-color: #bd33d5;
  color: wheat;
}
</style>

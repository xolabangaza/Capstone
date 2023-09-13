<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Cart ID</th>
          <th>Product Name</th>
          <th>Picture</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.cartID" class="cart-card">
          <td>{{ item.cartID }}</td>
          <td>{{ item.prodNAME }}</td>
         <td> <img
          :src="item.prodIMG"
          :alt="item.prodName" style="height: 7rem"/>
          
         </td>
          <td>R {{ item.prodPRICE }}.00</td>
          <td>
            <input
              type="number"
              v-model="item.prodQUANTITY"
              @input="updateQuantity(item)"
              min="1"
            />
          </td>
          <td>R {{ item.prodPRICE * item.prodQUANTITY }}.00</td>
          <td>
            <button
              v-if="item.cartID"
              @click="removeItem(item.cartID)"
              class="btn btn-danger"
            >
              Remove
            </button>
            <router-link class="nav-link" to="/checkout">Checkout</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <div>
        <router-link class="nav-link" to="/checkout"><i class="fa-solid fa-user" style="color: #da15f4"></i ></router-link>
      </div>    -->
  </div>
</template>
<script>
export default {
  props: ["cartItems"],
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    removeItem(cartID) {
      this.$store.dispatch("removeItem", cartID);
      console.log(cartID);
    },
    updateQuantity(item) {
      this.$store.dispatch("updateCartItemQuantity", {
        cartID: item.cartID,
        prodID: item.prodID,
        quantity: item.prodQUANTITY,
      });
    },
  },
};
</script>
<style scoped>
</style>
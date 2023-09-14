<template>
  <div>
    <!-- Button to open the off-canvas cart -->
    <button @click="toggleCart" class="btn btn-primary">
      Open Cart
    </button>

    <!-- Off-canvas cart -->
    <div
      id="cartOffCanvas"
      class="offcanvas offcanvas-end"
      tabindex="-1"
      aria-labelledby="cartOffCanvasLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="cartOffCanvasLabel">Shopping Cart</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          @click="toggleCart"
        ></button>
      </div>
      <div class="offcanvas-body">
        <table class="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <!-- <th>Action</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.cartID" class="cart-card">
              <td>
                <div class="d-flex align-items-center">
                  <div class="cart-product-img">
                    <img
                      :src="item.prodIMG"
                      :alt="item.prodName"
                      style="max-height: 100px"
                    />
                  </div>
                  <div class="cart-product-details">
                    <p class="mb-0">{{ item.prodNAME }}</p>
                  </div>
                </div>
              </td>
              <td>R {{ item.prodPRICE }}.00</td>
              <td>
                <input
                  type="number"
                  v-model="item.prodQUANTITY"
                  @input="updateQuantity(item)"
                  min="1"
                  class="form-control"
                />
              </td>
              <td>R {{ item.prodPRICE * item.prodQUANTITY }}.00</td>
              <td>
                <div class="d-flex flex-column">
                  <button
                    v-if="item.cartID"
                    @click="removeItem(item.cartID)"
                    class="btn"
                  >
                    Remove
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
                  <router-link class="nav-link" to="/checkout">Checkout</router-link>
        <!-- Display the total price -->
        <div class="text-end mt-3">
          <strong>Total Price: R {{ totalCartPrice }}.00</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cartItems"],
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    // Computed property to calculate the total cart price
    totalCartPrice() {
      return this.cart.reduce((total, item) => total + item.prodPRICE * item.prodQUANTITY, 0);
    },
  },
  methods: {
    // Function to toggle the cart panel
    toggleCart() {
      const cartOffCanvas = new bootstrap.Offcanvas(
        document.getElementById("cartOffCanvas")
      );
      cartOffCanvas.toggle();
    },
    removeItem(cartID) {
      this.$store.dispatch("removeItem", cartID);
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
/* Additional styling for the off-canvas cart */

/* Style the cart header */
.offcanvas-header {
  background-color: #333;
  color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 10px 20px;
}

.nav-link{
  background-color: #a41794;
  width: 70px;
  height: 30px;
  border-radius: 10px;
  color: white;
}
.offcanvas-title {
  font-size: 1.25rem;
}


.btn-close.text-reset {
  color: #d72222;
}
.btn{
  background-color: #a41794;
  color: #ddd;
}


.offcanvas-body {
  padding: 20px;
}


.table {
  background-color: #fff;
}


.table th {
  font-weight: bold;
  text-align: center;
  background-color: #eb78fd;
  width: 100%;
}


.product-cell {
  width: 40%;
}


.cart-product-img img {
  height: 70px;
  width: 60px;
}


.cart-product-details {
  margin-left: 0;
}
th{
  width: 100%;
}

/* Style price cells */
.price-cell {
  width: 15%;
  text-align: center;
}
strong{
  color: #a41794;
}

/* Style quantity cells */
.quantity-cell {
  width: 15%;
  text-align: center;
}

/* Style total cells */
.total-cell {
  width: 15%;
  text-align: center;
}

/* Style action cells */
.action-cell {
  width: 15%;
  text-align: center;
}

/* Style the "Remove" button */
.btn-danger {
  padding: 5px 10px;
  font-size: 0.875rem;
}

/* Style the "Open Cart" button */
.btn-primary {
  margin-bottom: 20px;
}
.cart-card {
  border-bottom: 1px solid #d519a6;
}

/* Style the input field for quantity */
.form-control {
  width: 60px;
  text-align: center;
}

/* Style the "Open Cart" button */
.btn-primary {
  margin-bottom: 20px;
}



/* Style the cart table */
.table {
  margin-top: 10px;
}

/* Style the cart header */
.offcanvas-header {
  background-color: #a41794;
  color: #fff;
}

/* Style the cart title */
.offcanvas-title {
  color: #fff;
}

/* Style the cart close button */
.btn-close.text-reset {
  color: #fff;
}

/* Style the off-canvas body */
.offcanvas-body {
  padding: 10px;
}

/* Style the "Remove" button */
.btn-danger {
  padding: 5px 10px;
}
</style>

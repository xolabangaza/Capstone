<template>
  <div class="container mt-5">
    <h2>Checkout</h2>

    <!-- Step 1: Review Cart -->
    <div class="mb-4">
      <h3>Step 1: Review Cart</h3>
      <table class="table">
        <!-- Display cart items here -->
        <tbody>
          <tr v-for="(item, index) in cart" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Step 2: Shipping Information -->
    <div class="mb-4">
      <h3>Step 2: Shipping Information</h3>
      <form>
        <div class="mb-3">
          <label for="fullName" class="form-label">Full Name</label>
          <input type="text" class="form-control" id="fullName" v-model="shippingInfo.fullName">
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <input type="text" class="form-control" id="address" v-model="shippingInfo.address">
        </div>
        <div class="mb-3">
          <label for="city" class="form-label">City</label>
          <input type="text" class="form-control" id="city" v-model="shippingInfo.city">
        </div>
        <!-- Add more shipping fields as needed -->
      </form>
    </div>

    <!-- Step 3: Payment Information -->
    <div class="mb-4">
      <h3>Step 3: Payment Information</h3>
      <form>
        <div class="mb-3">
          <label for="cardNumber" class="form-label">Card Number</label>
          <input type="text" class="form-control" id="cardNumber" v-model="paymentInfo.cardNumber">
        </div>
        <div class="mb-3">
          <label for="expirationDate" class="form-label">Expiration Date</label>
          <input type="text" class="form-control" id="expirationDate" v-model="paymentInfo.expirationDate">
        </div>
        <div class="mb-3">
          <label for="cvv" class="form-label">CVV</label>
          <input type="text" class="form-control" id="cvv" v-model="paymentInfo.cvv">
        </div>
        <!-- Add more payment fields as needed -->
      </form>
    </div>

    <!-- Step 4: Order Summary and Confirm Button -->
    <div>
      <h3>Order Summary</h3>
      <table class="table">
        <!-- Display order summary here -->
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>{{ calculateSubtotal() }}</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>{{ shippingCost }}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{{ calculateTotal() }}</td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-primary" @click="placeOrder">Place Order</button>
    </div>

    <!-- Order Confirmation -->
    <div v-if="orderConfirmation">
      <h3>Order Confirmation</h3>
      <p>{{ orderConfirmation.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [], // Your cart items
      shippingInfo: {
        fullName: "",
        address: "",
        city: "",
        // Add more shipping fields as needed
      },
      paymentInfo: {
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        // Add more payment fields as needed
      },
      shippingCost: 10, // Example shipping cost
      orderConfirmation: null, // To store the confirmation details
    };
  },
  methods: {
    calculateSubtotal() {
      // Calculate the subtotal of items in the cart
      let subtotal = 0;
      for (const item of this.cart) {
        subtotal += item.price * item.quantity;
      }
      return subtotal;
    },
    calculateTotal() {
      // Calculate the total including shipping
      return this.calculateSubtotal() + this.shippingCost;
    },
    async placeOrder() {
      try {
        // Step 1: Send cart and shipping info to your server
        const orderData = {
          cart: this.cart,
          shippingInfo: this.shippingInfo,
          paymentInfo: this.paymentInfo,
        };
        // Simulate a successful response for demonstration
        const response = {
          data: {
            success: true,
            orderConfirmation: {
              message: "Order placed successfully!",
            },
          },
        };
        // Replace the above response with an actual API request

        // Step 2: Handle the server response
        if (response.data.success) {
          // Order was successful
          this.orderConfirmation = response.data.orderConfirmation;
          // Clear cart or perform any necessary actions
          this.clearCart();
        } else {
          // Order failed, display an error message
          alert("Order failed. Please try again.");
        }
      } catch (error) {
        console.error("Error placing order:", error);
        alert("An error occurred while placing your order.");
      }
    },
    clearCart() {
      // Implement logic to clear the user's cart
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #e3dae4;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

h2, h3 {
  color: #e61ebe;
}



.table {
  background-color: #4b1597;
}

.form-label {
  font-weight: bold;
}

.form-control {
  border-radius: 3px;
  border: 1px solid #ccc;
}

.btn-primary {
  background-color: #9126c2;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.mb-4 {
  margin-bottom: 20px;
}
p{
    color: #e61ebe;
}


button {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
}


@media (max-width: 768px) {
  .container {
    padding: 10px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
  }
}
</style>

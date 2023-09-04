<template>
  <div class="cart">
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        <img :src="item.image" alt="Product Image">
        <div class="item-info">
          <p>{{ item.name }}</p>
          <p>{{ item.price }}</p>
          <p>{{ item.quantity }}</p>
        </div>
        <button @click="removeItem(item)">Remove</button>
      </li>
    </ul>
    <div class="total">
      <p>Total: {{ total }}</p>
      <button @click="checkout">Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      total: 0
    }
  },
  methods: {
    addItem(item) {
      this.cart.push(item)
      this.total += item.price
    },
    removeItem(item) {
      this.cart = this.cart.filter(i => i.id !== item.id)
      this.total -= item.price
    },
    checkout() {
      
    }
  }
}
</script>
<style scoped>


.cart {
  width: 500px;
  margin: 0 auto;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}

.item-info {
  flex: 1;
}

.total {
  text-align: right;
  margin-top: 10px;
}

button {
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
  border: none;
  
}
</style>

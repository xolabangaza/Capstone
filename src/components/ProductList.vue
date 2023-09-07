<template>
  <div>
    <h2>Product List</h2>
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col-md-4 mb-3">
        <div class="card">
          <img :src="product.image" class="card-img-top" alt="Product Image" />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Price: ${{ product.price }}</p>
            <p class="card-text">Quantity: {{ product.quantity }}</p>
            <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg', quantity: 0 },
        { id: 2, name: 'Product 2', price: 20, image: 'product2.jpg', quantity: 0 },
        { id: 3, name: 'Product 3', price: 30, image: 'product3.jpg', quantity: 0 },
      ],
    };
  },
  methods: {
    addToCart(product) {
      product.quantity++;
      this.$store.commit('addToCart', product);
    },
  },
};
</script>

<style scoped>
/* Your CSS styles here */
</style>

<template>
  <div>
    <div v-if="product" class="product-detail row px-5 py-5 animate__animated animate__zoomInLeft">
      <div class="product-image col-12 col-sm-6 col-md-6">
        <img :src="product.prodImg" :alt="product.prodName" />
      </div>
      <div class="product-info col-12 col-sm-6 col-md-6 mt-5">
        <h3 class="mt-5">{{ product.prodName }}</h3>
        <h6> {{ product.prodDesc }}</h6>
        <h6> {{ product.prodCat }}</h6>
        <h6>{{ product.prodType }}</h6>
        <h5>R {{ product.prodPrice }}</h5>
      <div class="size-color-single">
          <label>Size</label>
          <select name="product-size">
              <option value="1">XXL</option>
              <option value="2">XL</option>
              <option value="3">L</option>
              <option value="4">M</option>
              <option value="5">S</option>
          </select>
      </div>
        <button @click="addToCart">AddToCart</button>
        
      </div>
      
    </div>
        <div class="grid related-products">
      <div class="column-xs-12">
        <h3>You may also like</h3>
      </div>
      <div class="column column-md-4">
        <img src="https://source.unsplash.com/miziNqvJx5M">
        <h4>Succulent</h4>
        <p class="price">$19.99</p>
      </div>
      <div class="column column-md-4">
        <img src="https://source.unsplash.com/2y6s0qKdGZg">
        <h4>Terranium</h4>
        <p class="price">$19.99</p>
      </div>
      <div class="column column-md-4">
        <img src="https://source.unsplash.com/6Rs76hNbIWE">
        <h4>Cactus</h4>
        <p class="price">$19.99</p>
      </div>
    </div>
  </div>
    
    <!-- <div v-else>Loading...</div> -->
  <!-- </div> -->
</template>

<script>
export default {
  // props: ["product"],
  data() {
    return {
      error: null,
    };
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  methods: {
    addToCartProduct() {
      this.$store
        .dispatch('addToCart', this.product)
        .then(() => {
          this.$store.dispatch('getCart');
        })
        .catch((error) => {
          console.error('Error adding to cart:', error);
        });
    },
  },
  async created() {
    const prodID = this.$route.params.prodID;
    try {
      await this.$store.dispatch('getProduct', prodID);
    } catch (error) {
      this.error = 'Product not found';
    }
  },
};
</script>

<style scoped>
img {
  border: 2px solid;
  border-radius: 20px;
  height: 75vh;
  width: 32vw;
}

.product-info {
  height: 100vh;
  color: aliceblue;
  height: 70vh;
  width: 40%;


  
}
button{
  border-radius: 14px;
  height: 40px;
  background-color: ghostwhite; 
  color: rgb(186, 15, 121);
  margin-top: 10px;
}
button:hover{
  background-color:#db599a ;
}
label{
  margin-bottom: 10px;
  margin-top: 10px;
}
.grid{
  display: flex;
}
.column{
  min-height: 40vh;
}
h3{
  color: #db599a;
}
</style>

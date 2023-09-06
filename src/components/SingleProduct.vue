<template>
    <div>
      <div v-if="product" class="product-detail row px-5 py-4">
        <div class="product-image col-12 col-sm-6 col-md-6">
          <img :src="product.prodImg" :alt="product.prodName" />
        </div>
        <div class="product-info col-12 col-sm-6 col-md-6 mt-5">
          <h3>{{ product.prodName }}</h3>
          <h4>Price: {{ product.prodPrice }}</h4>
          <h5>T: {{ product.prodType }}</h5>
          <h5>Category: {{ product.prodCat }}</h5>
          <div>   
            <p>Size: M</p>
            <p>Quantity: 4</p>
       </div>
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  <script>
  import { mapActions, mapState } from "vuex";
  export default {
    name: "SingleProductView",
    computed: {
      ...mapState(["Product"]),
      product() {
        return this.Product;
      },
    },
    methods: {
      ...mapActions(["fetchProductDetails"]),
      async fetchProduct() {
        try {
          const prodID = this.$route.params.prodID;
          await this.fetchProductDetails(prodID);
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      },
    },
    async mounted() {
      this.fetchProduct();
    },
  };
  </script>
  <style scoped>
  img {
    border: 2px solid;
    border-radius: 10px;
    height: 80vh;
    width: 32vw;
  }
  .product-detail {
    height: 100vh;
  }
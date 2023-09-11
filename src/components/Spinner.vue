<template>
  <div>
    <div v-if="isLoading" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else>
      
        <div class="row p-4">
      <div
        class="card-body card m-2 p-3"
        v-for="product in filteredProducts"
        :key="product.prodID"
      >
        <img
          :src="product.prodImg"
          class="card-img-top rounded rounded-2"
          :alt="product.prodName"
        />
        <h5 class="card-title">{{ product.prodName }}</h5>
        <h6 class="card-text">{{ product.prodDesc }}</h6>
        <h6 class="card-text">R {{ product.prodPrice }}.00</h6>
        <button class="btn btn-primary">
          <router-link
            :to="{ name: 'SingleProduct', params: { prodID: product.prodID } }"
            class="todler"
          >
            View Details
          </router-link>
        </button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.products === null;
    }
  }
};
</script>

<style scoped>
.spinner-border{
  color: rgb(187, 24, 24);
  width: 60px;
  border-radius: 80%;
}

</style>
<template>
  <div>
    <div class="row p-4">
      <div class="card-body card m-2 p-3" v-for="product in products" :key="product.prodID">
        <img :src="product.prodImg" class="card-img-top rounded rounded-2" :alt="product.prodName" />
        <h5 class="card-title">{{ product.prodName }}</h5>
        <h6 class="card-text">{{ product.prodDesc }}</h6>
        <h6 class="card-text">R {{ product.prodPrice }}.00</h6>
        <button class="btn btn-primary">
          <router-link
        :to="{ name: 'SingleProduct', params: { prodID: product.prodID } }"
        class="todler">
            View Details
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
  
};
</script>

<style scoped>
.card-body {
  transition: transform 0.2s;
}
.card-body:hover {
  -ms-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.todler {
  text-decoration: none;
}
.input {
  border: 2px solid;
  border-radius: 10px;
}
p {
  color: black;
}
.card {
  display: flex;
  width: 18rem;
  height: 33rem;
  margin-left: 40px;
}
img {
  width: 100%;
}
.card h5,
.card h6 {
  margin: auto;
}
.card-title,
.card-text {
  color: #cb47b1;
}
button {
  margin-bottom: 2rem;
  margin-top: 4px;
  margin-left: 20px;
  border: 3px solid #f1b4e2;
  border-radius: 2rem;
  text-align: center;
  background-color: #f1b4e2;
  width: 8rem;
}
button:hover {
  background: #cb47b1;
}
@media (max-width: 700px) {
  * {
    overflow: hidden;
  }
  .card {
    width: 100%;
    margin: 20px;
    flex-direction: column;
    align-items: center;
    height: auto;
    border-top: transparent;
  }
  button {
    margin-bottom: 20px;
    margin-left: 0;
  }
}
</style>

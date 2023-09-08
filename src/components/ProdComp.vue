<template>
<div>
  <div>
    <div>
      <!-- Sorting -->
      <div>
        <label>Sort by Price:</label>
        <button @click="sortProducts('asc')">Ascending</button>
        <button @click="sortProducts('desc')">Descending</button>
      </div>

      <!-- Filtering -->
      <div>
        <label>Filter by Category:</label>
        <select v-model="selectedCategory" @change="filterProducts">
          <option value="">All</option>
          <option
            v-for="category in uniqueCategories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>

      <!-- Searching -->
      <div>
        <label>Search by Product Name:</label>
        <input class="input" type="text" v-model="searchQuery" />
        <!-- <button @click="searchProducts">Search</button> -->
      </div>
    </div>

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
  props: ["products"],
  data() {
    return {
      selectedCategory: "",
      searchQuery: "",
    };
  },
  computed: {
    uniqueCategories() {
      // Calculate unique categories from products
      return [...new Set(this.products.map((product) => product.prodCat))];
    },
    filteredProducts() {
      let filtered = [...this.products];

      // Apply filtering by category
      if (this.selectedCategory) {
        filtered = filtered.filter(
          (product) => product.prodCat === this.selectedCategory
        );
      }

      // Apply searching by product name
      if (this.searchQuery) {
        filtered = filtered.filter((product) =>
          product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      // Apply sorting by price
      if (this.sortOrder === "asc") {
        filtered.sort((a, b) => a.prodPrice - b.prodPrice);
      } else if (this.sortOrder === "desc") {
        filtered.sort((a, b) => b.prodPrice - a.prodPrice);
      }

      return filtered;
    },
  },
  methods: {
    sortProducts(orderBy) {
      this.sortOrder = orderBy;
    },

    filterProducts() {
      // This method already updates the filteredProducts computed property.
    },

    searchProducts() {
      // This method already updates the filteredProducts computed property.
    },
  },
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
  min-height: 50vh;
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
  margin-left: 70px;
  border: 3px solid #f1b4e2;
  border-radius: 2rem;
  text-align: center;
  background-color: #f1b4e2;
  width: 8rem;
  color: #cb47b1;
  
}
button:hover {
  background: #cb47b1;
}
label{
  color: #cb47b1;
}
select{
  border-radius: 10px;
}
.input{
  height: 40px;
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

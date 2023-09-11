<template>
  <div class="products-container">
     <div class="tennis-image">
      <img src="https://i.postimg.cc/tTJxsQbc/US-Open-news-Novak-Djokovic-strengthens-GOAT-status-after-breaking-Serena-Williams-record.jpg" alt="Tennis" class="tennis-imagee" />
    </div>
    <div class="filters">
      <!-- Sorting -->
      <div class="sort-container">
        <label>Sort by Price:</label>
        <button @click="sortProducts('asc')" class="button">Ascending</button>
        <button @click="sortProducts('desc')" class="button">Descending</button>
      </div>

      <!-- Filtering -->
      <div class="filter-container">
        <label class="label">Filter by Category:</label>
        <select v-model="selectedCategory" @change="filterProducts" class="select">
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
      <div class="search-container">
        <label class="label">Search by Product Name:</label>
        <input class="input input" type="text" v-model="searchQuery" />
        <!-- <button @click="searchProducts">Search</button> -->
      </div>
    </div>

    <div class="products">
      <div
        class="card m-2 p-3 card"
        v-for="product in filteredProducts"
        :key="product.prodID"
      >
        <img
          :src="product.prodImg"
          class="card-img-top rounded"
          :alt="product.prodName"
        />
        <h5 class="card-title">{{ product.prodName }}</h5>
        <h6 class="card-text">{{ product.prodDesc }}</h6>
        <h6 class="card-text">R {{ product.prodPrice }}.00</h6>
        <button class="button">
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
.products-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.filters {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  max-width: 800px;
  margin-bottom: 20px;
  
}

.sort-container,
.filter-container,
.search-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  width: 50%;
  justify-content: space-between;
  margin-left: 40px;
}

.sort-container label,
.filter-container label,
.search-container label {
  flex: 1;
  margin-right: 10px;
}

.sort-container button,
.filter-container select,
.search-container input {
  flex: 2;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  display: flex;
  flex-direction: column;
  width: 18rem;
  height: auto;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  background-color: #fff;
  border: 1px solid #ccc;
  text-align: center;
  padding: 20px;
}

.card:hover {
  transform: scale(1.03);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.card-img-top {
  width: 100%;
  height: 15rem;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card h5,
.card h6 {
  margin: 0;
  padding: 10px;
  font-weight: bold;
  color: #333;
}

.card-title,
.card-text {
  color: #333;
}

.button {
  margin: 10px auto;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #e50998;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #f30ed0;
}

.label {
  color: #cf5bda;
}

.select {
  border-radius: 10px;
  padding: 8px;
  font-size: 16px;
  color: #d01889;
  background-color: #fff;
  flex: 2;
}

.input {
  border: 2px solid #333;
  border-radius: 10px;
  padding: 8px;
  font-size: 16px;
  color: #d827cd;
  background-color: #fff;
  flex: 2;
}

.tennis-image{
  width: 100%;
  margin-top: -6.5%;
}
.tennis-imagee{
  width: 100vw;
  height: 60vh;
  
  
}
.todler{
  text-decoration: none;
}

@media (max-width: 700px) {
  .card {
    width: 100%;
    margin: 20px 0;
  }
}
</style>
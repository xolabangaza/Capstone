<template>
  <div>
    <!-- <div class="text-center my-2"> -->
      <!-- <div>
        <div>
          <label>Search by Product Name:</label>
          <input class="input" type="text" v-model="searchQuery" />
          <button @click="searchProducts">Search</button>
        </div>
        <label class="b">Filter by Category:</label>
        <label>Filter by Category:</label>
        <select v-model="selectedCategory">
          <option value="">All</option>
          <option
            v-for="category in uniqueCategories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div> -->
      
      <!-- <button class="btn" @click="sortProducts('asc')">
        Sort by Price (ASC)
      </button>
      <button class="btn" @click="sortProducts('desc')">
        Sort by Price (DESC)
      </button> -->
    <!-- </div> -->
    <!-- <div v-if="products" class="row p-4"> -->
      <!-- <div
        v-for="product in filteredProducts"
        :key="product.productID"
        class="card m-2 p-3"
        id="productTable"
      >
        <img
          :src="product.productUrl"
          class="card-img-top rounded rounded-2"
          style="width: 18rem"
          :alt="product.productName"
        />  -->
        
        <div class="row p-4">
        <div class="card-body card m-2 p-3" v-for="product in products" :key="product.prodID">
          <img :src="product.prodImg" class="card-img-top rounded rounded-2" :alt="prodName ">
          <h5 class="card-title">{{ product.prodName }}</h5>
          <h6 class="card-text">{{ product.prodDesc }}</h6>
          <h6 class="card-text">R {{ product.prodPrice }}.00</h6>
          <button class="btn btn-primary">
             View Details 
            <!-- <router-link
              :to="{ name: 'single', params: { prodID: product.prodID } }"
            class="todler">
              View Details
            </router-link>  -->
          </button>
        </div>
      <!-- </div> -->
    <!-- </div> -->
    <!-- <div v-else class="text-center">Processing...</div> -->
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  props: ["products"]
  // computed: {
  //   // Update this computed property to use `products` prop instead of Vuex state
  //   filteredProducts() {
  //     if (this.selectedCategory) {
  //       return this.myProductsSorted.filter(
  //         (product) => product.category === this.selectedCategory
  //       );
  //     } else {
  //       return this.myProductsSorted;
  //     }
  //   },
  //   uniqueCategories() {
  //     return [...new Set(this.products.map((product) => product.category))];
  //   },
  // },
  // data() {
  //   return {
  //     selectedCategory: "",
  //     ProductsSorted: [],
  //     searchQuery: "",
  //   };
  // },
  // async mounted() {
  //   try {
  //     await this.$store.dispatch("getProducts");
  //     this.ProductsSorted = [...this.products];
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // },
  // methods: {
  //   searchProducts() {
  //     if (this.searchQuery.trim() === "") {
  //       this.ProductsSorted = [...this.products];
  //     } else {
  //       this.ProductsSorted = this.products.filter((product) =>
  //         product.productName
  //           .toLowerCase()
  //           .includes(this.searchQuery.toLowerCase())
  //       );
  //     }
  //   },
  //   filterProducts() {
  //     if (this.selectedCategory) {
  //       return this.ProductsSorted.filter(
  //         (product) => product.category === this.selectedCategory
  //       );
  //     } else {
  //       return this.ProductsSorted;
  //     }
  //   },
  //   sortProducts(orderBy) {
  //     this.ProductsSorted.sort((a, b) => {
  //       if (orderBy === "asc") {
  //         return a.productPrice - b.productPrice;
  //       } else if (orderBy === "desc") {
  //         return b.productPrice - a.productPrice;
  //       }
  //     });
  //   },
  // },
};
</script>

  <style scoped>
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
    /* background-color:#e7dae4; */
    margin-left: 40px;
  }
  img{
    width: 100%;
  }
  .card h5,
  .card h6 {
    margin: auto;
  }
  .card-title, .card-text{
    color: #CB47B1;
  }
  button {
    margin-bottom: 2rem;
    margin-top: 4px;
    margin-left: 20px;
    border: 3px solid #F1B4E2;
    border-radius: 2rem;
    text-align: center;
    background-color: #F1B4E2;
    width: 8rem;
   
  }
  button:hover {
    background: #CB47B1;
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
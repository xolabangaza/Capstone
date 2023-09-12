<template>
  <div>
    <div v-if="product" class="product-detail row px-5 py-5">
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
        <button @click="addToCartProduct">AddToCart</button>
        
      </div>
      
    </div>
    <h3 class="text-center">You may also like</h3>
        <div class="products">
      <div class="column">
      </div>
      <div class="column">
        <img src="https://i.postimg.cc/3xJ3BZW7/th5198-awc-01.webp" class="pic">
        <h4>Lacoste</h4>
        <p class="price">R999</p>
      </div>
      <div class="column">
        <img src="https://i.postimg.cc/G2qH7g08/36ab9e0c-8854-4af9-9818-f44b493f4b1c.webp" class="pic">
        <h4>Nike</h4>
        <p class="price">R799.99</p>
      </div>
      <div class="column">
        <img src="https://i.postimg.cc/9Q8CNqq9/0b9c74e2201d4a558f9528d6ad9a1b28.webp" class="pic">
        <h4>Lacoste</h4>
        <p class="price">R859.99</p>
      </div>
            <div class="column">
        <img src="https://i.postimg.cc/BnsjGD6w/mens-sport-crocodule-print-tennis-t-shirt-th9417yh9lacoste-mens-sport-crocodule-print-tennis-t-shirt.webp" class="pic">
        <h4>Lacoste</h4>
        <p class="price">R859.99</p>
      </div>
            <div class="column">
        <img src="https://i.postimg.cc/kXrd0J8b/2a0b3321f51b4dd5a968d727145dd80e.webp" class="pic">
        <h4>Lacoste</h4>
        <p class="price">R859.99</p>
      </div>
    </div>
  </div>
    
    <!-- <div v-else>Loading...</div> -->
  <!-- </div> -->
</template>

<script>
import Swal from "sweetalert2";
export default {
  // props: ["product"],
  data() {
    return {
      error: null,
       prodID: this.$route.params.prodID,
      quantity: 1,
    };
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
     cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
       async addToCartProduct() {
      try {
        const userDataJSON = localStorage.getItem("userData");
        if (userDataJSON) {
          const userData = JSON.parse(userDataJSON);
          const userID = userData.result.userID;
          const product = {
            prodID: this.product.prodID,
            userID: userID,
            quantity: this.quantity,
          };
          const existingProductIndex = this.$store.state.cart.findIndex(
            (item) => item.prodID === product.prodID
          );
          if (existingProductIndex !== -1) {
            const existingProduct = this.$store.state.cart[existingProductIndex];
            await this.$store.dispatch("updateCartItem", {
              index: existingProductIndex,
              newQuantity: existingProduct.quantity + this.quantity,
            });
          } else {
            await this.$store.dispatch("addToCart", product);
          }
          await this.$store.dispatch("getCart");
          Swal.fire({
            icon: "success",
            title: "Added to Cart",
            text: "The product has been added to your cart.",
          });
        } else {
          console.error("User data not found in localStorage.");
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while adding the product to your cart.",
        });
      }
    },
  },
  async created() {
    const prodID = this.$route.params.prodID;
    try {
      await this.$store.dispatch("getProduct", prodID);
    } catch (error) {
      this.error = "Product not found";
    }
  },

  // async created() {
  //   const prodID = this.$route.params.prodID;
  //   try {
  //     await this.$store.dispatch('getProduct', prodID);
  //   } catch (error) {
  //     this.error = 'Product not found';
  //   }
  // },
};
</script>

<style scoped>
img {
  border: 2px solid rgb(202, 88, 192);
  border-radius: 20px;
  height: 75vh;
  width: 30vw;
}

.product-info {
  height: 100vh;
  color: aliceblue;
  height: 70vh;
  width: 40%;


  
}
button{
  border-radius: 26px;
  height: 60px;
  width: 200px;
  background-color: rgb(10, 10, 61); 
  color: rgb(244, 232, 240);
  margin-top: 10px;
}
button:hover{
  background-color:#db599a ;
}
label{
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 10px;
}
select{
  width: 100px;
  height: 40px;
  border-radius: 12px;
  background-color: ghostwhite;
  margin-bottom: 10px;
}
.text-center {
      text-align: center;
      color: #db599a;
}
 .products {
      display: flex;
      flex-direction: row;
      /* align-items: center; */
      gap: 20px;
  }
 .column {
      /* display: flex;
      flex-direction: row; */
      /* align-items: center; */
      padding: 20px;
  }
 .pic {
      max-width: 100%;
      height: auto;
  }
 h4 {
      /* margin: 10px 0; */
      color: #db599a;
      margin-top: 20px;
      /* margin-right: 200px; */
  }
  .price {
      font-weight: bold;
      color: #db599a;
  }
.pic{
  width: 200px;
  height: 300px;
}
</style>

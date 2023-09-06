<template>
  <div>
    <div class="text-center">
       <users-list></users-list> 
    </div>
    <div class="text-center">
      <h3 class="text-center">Add Products</h3>
      <input
        type="text"
        v-model="form.productID"
        style="visibility: hidden; display: none"
      />
      <label>Product Price</label>
      <input class="just" type="number" v-model="form.prodPrice" />
      <label>Product Name</label>
      <input class="just" type="text" v-model="form.prodName" />
      <label>Product Desc</label>
      <input class="just" type="text" v-model="form.prodDesc" />
      <label>Product Category</label>
      <!-- Fixed typo in label -->
      <input class="just" type="text" v-model="form.prodCat" />
      <label>Product Type</label>
      <input class="just" type="text" v-model="form.prodType" />
      <label>Product Url</label>
      <input class="just" type="text" v-model="form.prodImg" />
      <br />
      <button class="button" @click="submit()">Submit</button>
    </div>
    <!-- <h2>Users</h2>
    <table class="table">
      <thead>
        <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.userID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.userDOB }}</td>
          <td>{{ user.emailAdd }}</td>
          <td>{{ user.userPass }}</td>
          <td>{{ user.userRole }}</td>
          <td>
            <img src="{{ user.userProfile}} " alt="{{ user.firstName }}" />
          </td>
        </tr>
      </tbody>
    </table> -->
    <table class="table">
      <thead>
        <tr>
          <th>Product Price</th>
          <th>Product Name</th>
          <th>Product Desc</th>
          <th>Category</th>
          <th>Product Type</th>
          <th>Product URL</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in Products" :key="product.productID">
          <td>{{ product.prodPrice }}</td>
          <td>{{ product.prodName }}</td>
          <td>{{ product.prodDesc }}</td>
          <td>{{ product.prodCat }}</td>
          <td>{{ product.prodType }}</td>
          <td><img :src="product.prodImg" :alt="product.prodName" /></td>
          <td>
            <button>
      <SingleUpdateProductModal :form="form" @update-product="editProduct()" />
        </button> 
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="populateForm(product)"
            >
              Edit
            </button>
            <!-- modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Update Product
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                    <label>Product Price</label>
                    <input
                      class="form-control"
                      type="number"
                      v-model="form.prodPrice"
                    />
                  <div class="modal-body">
                    <label>Product Name</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="form.prodName"
                    />
                    
                    <label>Product Cat</label>
                    <input
                      class="form-control"
                      type="number"
                      v-model="form.prodCat"
                    />
                    <label>Product Type</label>
                    <input
                      class="form-control"
                      type="number"
                      v-model="form.prodType"
                    />
                    <label>Product Url</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="form.prodImg"
                    />
                    <label>Product Category</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="form.prodCat"
                    />
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="editProduct()"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button @click="deleteProduct(product.prodID)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <div v-if="Products" class="row p-4"></div>
      <div v-else>Processing...</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import SingleUpdateProductModal from "../components/Update-Product.vue";
import UsersList from "@/components/UsersList.vue";
export default {
  components: { SingleUpdateProductModal,  UsersList },
  computed: {
    getProducts() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.fetchUsers();
    this.$store.dispatch("getProducts");
  },
  name: "",
  props: {},
  data() {
    return {
      form: {
        prodPrice: "",
        prodName: "",
        prodDesc: "",
        prodCat: "",
        prodType: "",
        prodImg: "",
        
      },
      users: [],
    };
  },
  methods: {
     async fetchUsers() {
      try {
        const response = await axios.get("http://localhost:5000/users");
        this.users = response.data;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async fetchProducts() {
      try {
        axios
          .get("http://localhost:5000/products/:id")
          .then(function (response) {
            const products = response.data;
            const table = document.getElementById("productTable");
            products.forEach(function (product) {
              const row = table.insertRow();
              row.insertCell(1).textContent = product.prodName;
              row.insertCell(2).textContent =
                "$" + product.prodPrice.toFixed(2);
              row.insertCell(3).textContent = product.prodDesc;
              row.insertCell(4).textContent = product.prodCat;
              row.insertCell(5).textContent = product.prodType;
              row.insertCell(6).textContent = product.prodImg;
            });
          })
          .catch(function (error) {
            console.error("Error fetching products:", error);
          });

        const response = await axios.get("http://localhost:5000/products");
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async fetchUsers() {
      try {
        const response = await axios.get("http://localhost:5000/users");
        this.users = response.data;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },

    async editProduct() {
      try {
        const editedProduct = {
          productPrice: this.form.prodPrice,
          productName: this.form.prodName,
          productDesc: this.form.prodDesc,
          category: this.form.prodCat,
          productType: this.form.prodType,
          productUrl: this.form.prodImg,
        };
        const response = await axios.patch(
          `http://localhost:5000/products/${this.form.prodID}`,
          editedProduct
        );
        alert("Product updated successfully");
        this.$store.dispatch("getProducts");
        this.resetForm();
        $("#exampleModal").modal("hide");
      } catch (error) {
        console.error("Error editing product:", error);
      }
    },
    resetForm() {
      this.form.prodPrice = "";
      this.form.prodName = "";
      this.form.prodDesc = "";
      this.form.prodCat = "";
      this.form.prodType = "";
      this.form.prodImg = "";
    },
    populateForm(product) {
       this.form.prodName = product.prodName;
      this.form.prodPrice = product.prodPrice;
      this.form.prodDesc = product.prodDesc;
      this.form.prodCat = product.prodCat;
      this.form.prodType = product.prodType;
      this.form.prodImg = product.prodImg;
    },
    async deleteProduct(productID) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/products/${prodID}`
        );
        alert("Product deleted successfully");
        this.$store.dispatch("getProducts");
        window.location.reload();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    },
  },
  async editProduct() {
    try {
      const editedProduct = {
          productPrice: this.form.prodPrice,
          productName: this.form.prodName,
          productDesc: this.form.prodDesc,
          category: this.form.prodCat,
          productType: this.form.prodType,
          productUrl: this.form.prodImg,
      };
      const response = await axios.patch(
        `http://localhost:5000/products/${this.form.prodID}`,
        editedProduct
      );
      alert("Product updated successfully");
      this.$store.dispatch("getProducts");
      this.resetForm();
    } catch (error) {
      console.error("Error editing product:", error);
    }
  },
};
</script>
<style scoped>
.just {
  margin: auto;
  color: rgb(216, 37, 126);
}
img {
  width: 100px;
  height: 110px;
}
h1 {
  text-align: center;
}
form {
  margin: 20px auto;
}
label {
  display: block;
  margin-top: 10px;
  color: rgb(226, 43, 134);
}
h3 {
  color: brown;
}
input {
  display: flex;
  justify-content: center;
  width: 30%;
  height: 50px;
  padding: 5px;
  margin-top: 5px;
  border-radius: 8px;
  background-color: transparent;
}
button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: rgb(183, 116, 183);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: rgb(183, 116, 183);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: auto;
}
button:hover {
  background-color: purple;
}
h2 {
  color: #0056b3;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  padding: 8px;
  text-align: center;
  border-bottom: 4px solid #ddd;
}
.table {
  border-collapse: collapse;
  width: 100%;
}
@media screen and (max-width: 700px) {
  * {
    overflow: hidden;
  }
  input {
    width: 70%;
    font-size: 14px;
  }
  button {
    width: 40%;
    font-size: 16px;
  }
  form {
    padding: 20px;
  }
  h2 {
    font-size: 28px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  label {
    font-size: 12px;
    margin-top: 3px;
  }
  table {
    font-size: 10px;
  }
  th,
  td {
    padding: 5px;
  }
  img {
    width: 70px;
    height: 80px;
  }
  button {
    display: flex;
    flex-direction: column;
    width: 80px;
  }
  thead {
    display: none;
  }
}
</style>

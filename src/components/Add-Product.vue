<template>
  <div>
    <table>
      <tr>
        <th>Product Name</th>
        <th>Product Price</th>
        <th>Product Stock</th>
        <th>Product URL</th>
        <th>Category</th>
      </tr>
      <tr v-for="project in myProjects" :key="project.projectID">
        <td>{{ project.productName }}</td>
        <td>{{ project.productPrice }}</td>
        <td>{{ project.productStock }}</td>
        <td>{{ project.productUrl }}</td>
        <td>{{ project.category }}</td>
        <td><button @click="populateForm(project)">Edit</button></td>
        <td><button @click="editProduct">Edit Product</button></td>
        <td><button @click="deleteProduct(project.productID)">Delete</button></td>
      </tr>
    </table>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
  <div>
      <input type="text" v-model="form.productID" style="visibility: hidden; display: none" />
      <label>Product Name</label>
      <input type="text" v-model="form.productName" />
      <label>Product Price</label>
      <input type="number" v-model="form.productPrice" />
      <label>Product Stock</label>
      <input type="number" v-model="form.productStock" />
      <label>Product Url</label>
      <input type="text" v-model="form.productUrl" />
      <label>Product Category</label>
      <input type="text" v-model="form.category" />
      <br />
      <button @click="submit()">Submit</button>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
  </div>
  
</template>

<script>
import axios from "axios";
const dbConnection = "https://backend-i8zg.onrender.com/";
export default {
  name: "HelloWorld",
  // computed: {
  //   products() {
  //     return this.$store.state.products;
  //   },
  // },
  // mounted() {
  //   this.$store.dispatch("getProducts");
  // },

  props: ["products"],

  data() {
    return {
      form: {
        prodID: "",
        prodPrice: "",
        prodName: "",
        prodDesc: "",
        prodCat: "",
        prodType: "",
        prodImg: "",
      },
    };
  },
  methods: {
    async submit() {
      try {
        if (this.form.prodID) {
          await axios.put(`${dbConnection}products/${this.form.prodID}`, this.form);
          alert("Product updated successfully");
        } else {
          await axios.post(`${dbConnection}productsAdd`, this.form);
          alert("Product added successfully");
        }
        this.resetForm();
        // this.$store.dispatch("getProducts");
      } catch (error) {
        console.error("Error submitting product:", error);
      }
    },
    resetForm() {
      this.form.prodID = "";
      this.form.prodPrice = "";
      this.form.prodName = "";
      this.form.prodDesc = "";
      this.form.prodCat = "";
      this.form.prodType = "";
      this.form.prodImg = "";
    },
    populateForm(product) {
      this.form.prodID = product.productID;
      this.form.prodPrice = product.prodPrice;
      this.form.prodName = product.prodName;
      this.form.prodDesc = product.prodDesc;
      this.form.prodCat = product.prodCat;
      this.form.prodType = product.prodType;
      this.form.prodImg = product.prodImg;
    },

    async deleteProduct(prodID) {
      try {
        await axios.delete(`${dbConnection}/products/${prodID}`);
        alert("Product deleted successfully");
        this.$store.dispatch("getProducts");
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    },
    async editProduct() {
      try {
        const editedProduct = {
          prodPrice: this.form.prodPrice,
          prodName: this.form.prodName,
          prodDesc: this.form.prodDesc,
          prodCat: this.form.prodCat,
          prodType: this.form.prodType,
          prodImg: this.form.prodImg,
        };
        await axios.patch(`${dbConnection}products/${this.form.prodID}`, editedProduct);
        alert("Product updated successfully");
        this.$store.dispatch("getProducts");
        this.resetForm();
      } catch (error) {
        console.error("Error editing product:", error);
      }
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <button
      @click="populateForm(product)"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Edit
    </button>
<div
  class="modal fade"
  id="exampleModal"  
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>

      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Update Product
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div>
              <label>Product ID</label>
              <input
                type="text"
                v-model="form.prodID"
                style="visibility: hidden; display: none"
              />
              <label>Product Name</label>
              <input type="text" v-model="form.prodName" />
              <label>Product Price</label>
              <input type="number" v-model="form.prodPrice" />
              <label>Product Description</label>
              <input type="text" v-model="form.prodDesc" />
              <label>Product Category</label>
              <input type="text" v-model="form.prodCat" />
              <label>Product Type</label>
              <input type="text" v-model="form.prodType" />
              <label>Product Image URL</label>
              <input type="text" v-model="form.prodImg" />
              <br />
            </div>
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
              @click="editProduct()"
              class="btn btn-primary"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        prodID: "",
        prodName: "",
        prodPrice: "",
        prodDesc: "",
        prodCat: "",
        prodType: "",
        prodImg: "",
      },
    };
  },
  methods: {
    populateForm(product) {
      this.form.prodID = product.prodID;
      this.form.prodName = product.prodName;
      this.form.prodPrice = product.prodPrice;
      this.form.prodDesc = product.prodDesc;
      this.form.prodCat = product.prodCat;
      this.form.prodType = product.prodType;
      this.form.prodImg = product.prodImg;
    },
    async editProduct() {
      try {
        const editedProduct = {
          prodName: this.form.prodName,
          prodPrice: this.form.prodPrice,
          prodDesc: this.form.prodDesc,
          prodCat: this.form.prodCat,
          prodType: this.form.prodType,
          prodImg: this.form.prodImg,
        };

        const response = await axios.patch(
          `http://localhost:5000/products/${this.form.prodID}`,
          editedProduct
        );

        alert("Product updated successfully");
        // Optionally, you can reload the product list after editing
        this.$store.dispatch("getProducts");
        this.resetForm();
        this.$el.querySelector("#staticBackdrop").classList.remove("show");
        this.$el.querySelector(".modal-backdrop").remove();
        $("#staticBackdrop").modal("hide");
      } catch (error) {
        console.error("Error editing product:", error);
      }
    },
    resetForm() {
      this.form.prodID = "";
      this.form.prodName = "";
      this.form.prodPrice = "";
      this.form.prodDesc = "";
      this.form.prodCat = "";
      this.form.prodType = "";
      this.form.prodImg = "";
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

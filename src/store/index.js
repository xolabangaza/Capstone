import { createStore } from 'vuex'
import axios from 'axios'
const dbConnection = "http://localhost:5000";
export default createStore({
  state: {
    products: null,
    product: null,
    myAdmins: null,
    users: null,
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setMyAdmins: (state, myAdmins) => {
      state.myAdmins = myAdmins;
    },
    setUsers: (state, users) => {
      state.users = users;
    },    
  },
  actions: {
    async getProducts(context) {
      try {
        const response = await axios.get(`${dbConnection}/products`);
        context.commit("setProducts", response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    },
    async getProduct(context, prodID) { // Add prodID as an argument
      try {
        const response = await axios.get(`${dbConnection}/products/${prodID}`);
        context.commit("setProduct", response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async getUsers(context) {
      try {
        const response = await axios.get(`${dbConnection}/users`);
        context.commit("setUsers", response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    },
    async fetchProductDetails(context, productID) {
      try {
        const response = await axios.get(
          `${dbConnection}/products/${productID}`
        );
        context.commit("setmyProduct", response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching product details:", error);
        throw error;
      }
    },
    async getmyAdmins(context) {
      try {
        const response = await axios.get(`${dbConnection}/products`);
        context.commit("setmyAdmins", response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    },
  }
});

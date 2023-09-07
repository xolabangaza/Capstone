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
        console.error("Error fetching products:", error);
      }
    },
    
    async getProduct(context, prodID) { 
      try {
        const response = await axios.get(`${dbConnection}/products/${prodID}`);
        context.commit("setProduct", response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async getUsers(context) {
      try {
        const response = await axios.get("http://localhost:5000/users");
        // Return the response data
        context.commit("setUsers", response.data);
        // return response.data;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw error; // Rethrow the error to handle it in the component
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
      async fetchUsers(context) {
        try {
          const response = await axios.get('http://localhost:5000/users');
          context.commit('setUsers', response.data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      },
  }
});

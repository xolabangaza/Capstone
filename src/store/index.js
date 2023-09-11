import { createStore } from "vuex";
import axios from "axios";
const dbConnection = "http://localhost:5000/";
import Swal from 'sweetalert2'
export default createStore({
  state: {
    products: null,
    product: null,
    myAdmins: null,
    users: null,
    token: null,
    isLoggedIn: false,
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
    setUser(state, user) {
      state.user = user;
      state.isLoggedIn = true;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearUser(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    //Err handling and Success
    setErrMsg(state, message) {
      state.errMsg = message;
    },
    setSuccMsg(state, message) {
      state.succMsg = message;
    },
    clearMessages(state) {
      state.errMsg = null;
      state.succMsg = null;
    },
    setUserFromLocalStorage(state) {
      const token = localStorage.getItem("userToken");
      if (token) {
        state.token = token;
        state.isLoggedIn = true;
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (userData) {
          state.user = userData;
        }
      }
    },
  },
  actions: {
    async getProducts(context) {
      try {
        const response = await axios.get(`${dbConnection}products`);
        context.commit("setProducts", response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    async getProduct(context, prodID) {
      try {
        const response = await axios.get(`${dbConnection}products/${prodID}`);
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
        const response = await axios.get(`${dbConnection}products`);
        context.commit("setmyAdmins", response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    },
    async fetchUsers(context) {
      try {
        const response = await axios.get("http://localhost:5000/users");
        context.commit("setUsers", response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    // Function for adding item on the store
async addItem({ commit, state }, product) {
  try {
    const existingProduct = state.items.find((item) => item.prodID === product.prodID);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      const response = await fetch(`${dbLink}add-item`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        commit("addItem", product);
      } else {
        console.error('Error adding to cart:', response.statusText);
      }
    }
  } catch (error) {


    console.error('Error adding to cart:', error);
  }
},


//User
  //register
  async registerUser({ commit }, userData) {
    try {
      const response = await axios.post(`${dbConnection}register`, userData);
      const user = response.data;
      commit("setUser", user);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Successful Registration ",
          text: "You have registered successfully .",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "An error occurred during registration.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  },
  //Login
  async loginUser({ commit }, credentials) {
    try {
      const response = await axios.post(`${dbConnection}login`, credentials);
      if (response.status === 200) {
        const { token, user } = response.data;
        console.log(response.data);
        console.log(token);
        commit("setToken", token);
        commit("setUser", user);
        // Store user data in local storage
        localStorage.setItem("userToken", token);
        localStorage.setItem("userData", JSON.stringify(response.data));
        window.location.reload();
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have logged in successfully .",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred during login.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  },
 
  logout({ commit }) {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    commit("clearUser");
    window.location.reload();
  },

},
});


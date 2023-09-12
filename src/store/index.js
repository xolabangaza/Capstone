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
    user: null,
    token: null,
    isLoggedIn: false,
    cart: [],
  },

  mutations: {
    //CART
  setCart(state, cart) {
    state.cart = cart;
  },
  // addToCart(state, product) {
  //   state.cart.push(product);
  // },
  addToCart(state, product) {
    const existingProduct = state.cart.find(
      (item) => item.prodID === product.prodID
    );
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      state.cart.push(product);
    }
  },
  updateCartItemQuantity(state, { prodID, prodQUANTITY }) {
    const cartItem = state.cart.find((item) => item.prodID === prodID);
    if (cartItem) {
      cartItem.quantity = prodQUANTITY;
    }
  },
  removeItem(state, cartID) {
    const index = state.cart.findIndex((item) => item.cartID === cartID);
    if (index !== -1) {
      state.cart.splice(index, 1);
    }
  },
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
    async getCart({ commit }) {
      try {
        const response = await axios.get(`${dbConnection}cart`);
        commit("setCart", response.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    },
    async addToCart({ commit, state }, product) {
      try {
        if (!state.cart) {
          console.error("Cart is not initialized.");
          return false;
        }
        const response = await axios.post(`${dbConnection}cart`, product);
        console.log(product);
        if (response.status === 200) {
          commit("addToCart", response.data);
          console.log("addToCart", response.data);
          await this.dispatch("getCart");
          Swal.fire({
            icon: "success",
            title: "Added to Cart",
            text: "The product has been added to your cart.",
          });
          return true;
        } else {
          console.error("Error adding to cart:", response.statusText);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred while adding the product to your cart.",
          });
          return false;
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while adding the product to your cart.",
        });
        throw error;
      }
    },
    async removeItem({ commit }, cartID) {
      try {
        await axios.delete(`${dbConnection}cart/${cartID}`);
        commit("removeItem", cartID);
        console.log(cartID);
        Swal.fire({
          icon: "success",
          title: "Item Removed",
          text: "The item has been successfully removed from the cart.",
        });
      } catch (error) {
        console.error("Error removing from cart:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while removing the item from the cart.",
        });
      }
    },
    
    async updateCartItemQuantity(
      { commit, state },
      { cartID, prodID, quantity }
    ) {
      try {
        const response = await axios.patch(`${dbConnection}cart/${prodID}`, {
          quantity,
        });
        if (response.status === 200) {

          const cartItem = state.cart.find(
            (item) => item.cartID === cartID && item.prodID === prodID
          );
          if (cartItem) {
            cartItem.quantity = quantity;
            commit("setCart", [...state.cart]);
          }
          console.log(cartID);
        } else {
          console.error(
            "Error updating cart item quantity:",
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error updating cart item quantity:", error);
        throw error;
      }
    },
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
    async getUsers(context) {
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


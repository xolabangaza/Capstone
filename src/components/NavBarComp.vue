<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">SportWearFlex</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Shop</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/UserProfile">Profile</router-link>
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" v-show="!Logged" to="/admin">Admin</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Users">Users</router-link>
            </li>
          </ul>
          <li class="nav-items">
            <router-link v-if="!isLoggedIn" class="nav-link " to="/login"
              ><i class="fa-solid fa-user" style="color: #da15f4"></i
            ></router-link>
             <button v-else @click="logout">Logout</button>
          </li>
          <li class="nav-items">
                <router-link class="nav-link" to="/UserProfile"><img src="https://i.postimg.cc/LXrv2SXw/146-1468479-my-profile-icon-blank-profile-picture-circle-hd.png"  class="img" alt=""></router-link>
             <router-link class="nav-link" to="/cart" @click="toggleCart">
               <i class="fas fa-shopping-cart"  style="color: #d537d7"></i>
             </router-link>
              <!-- <button @click="toggleCart" class="nav-link" to="/cart">
            <i class="fas fa-shopping-cart"  style="color: #d537d7"></i>
          </button> -->
          </li>
        </div>
      </div>
    <div v-if="isLoggedIn">
      <!-- <p>Welcome back {{ userFirstName }} {{ userLastName }}</p> -->

    </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
isLoggedIn() {
      // Check if the user is logged in
      const userDataJSON = localStorage.getItem("userData");
      return !!userDataJSON;
    },
    isLogged(){
      console.log(!this.user.result == " ");
      return this.user.result == " ";
    },
    userFirstName() {
      // Get the user's first name from localStorage
      const userDataJSON = localStorage.getItem("userData");
      if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        return userData.result.firstName || ""; // Replace 'firstName' with the actual field name
      }
      return "";
    },
    
    userLastName() {
      const userDataJSON = localStorage.getItem("userData");
      if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        return userData.result.lastName || "";
      }
      return "";
    },
    userRole() {
      return this.$store.state.userRole;
    },
   
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      localStorage.removeItem("userData");
      this.$router.push("/login");
      window.location.reload();
    },
  },
   toggleCart() {
      const cartOffCanvas = new bootstrap.Offcanvas(
        document.getElementById("cartOffCanvas")
      );
      cartOffCanvas.toggle();
    },
};
</script>

<style scoped>
.nav-link.router-link-active {
  color: rgba(83, 40, 208, 1) !important;
}
.navbar {
  background-color: rgba(3, 5, 27, 1) !important;
  color: white !important;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  overflow: none;
}

.nav-link {
  color: white;
}
.img{
  width: 40px;
  border-radius: 40%;
}
.navbar-brand {
  color: white;
  font-size: 30px;
  font-weight: 400;
  font-style: italic;
  
}

.nav-item {
  margin: 0;
  padding: 0;
  display: flex;
  margin-left: 100px;
  font-size: 1.4rem;
  color: white;
}
.nav-items {
  /* margin: 0; */
  /* padding: 0; */
  display: flex;
  margin-left: 2px;
  font-size: 1.4rem;
  color: white;
}
button{
  border-radius: 20px;
  background-color: blueviolet;
  color: rgb(39, 12, 128);
}

@media (max-width: 300px) {
  .navbar {
    flex-direction: column;
    height: auto;
    padding: 0 10px;
  }

  .navbar-logo {
    margin-bottom: 10px;
  }

  .navbar-menu li {
    margin: 5px 0;
  }

  .navbar-menu li a {
    font-size: 14px;
    padding: 6px;
  }
}
p{
  color: aliceblue;
}
</style>

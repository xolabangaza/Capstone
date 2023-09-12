<template>
  <div class="registration">
    <h2 class="text-center">Register</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          v-model="form.firstName"
          required
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          v-model="form.lastName"
          required
          class="input"
        />
      </div>
      <div class="form-group">
        
        <label for="gender">Gender:</label>
        <input type="text" id="gender" v-model="form.gender" class="input" />
      </div>
      <div class="form-group">
        <label for="userDOB">Date of Birth:</label>
        <input type="date" id="userDOB" v-model="form.userDOB" class="input" />
      </div>
      <div class="form-group">
        <label for="userRole">User Role:</label>
        <input
          type="text"
          id="userRole"
          v-model="form.userRole"
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="emailAdd">Email:</label>
        <input
          type="email"
          id="emailAdd"
          v-model="form.emailAdd"
          required
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="userPass">Password:</label>
        <input
          type="password"
          id="userPass"
          v-model="form.userPass"
          required
          class="input"
        />
      </div>
      <div class="form-group">
        <label for="profileUrl">Profile URL:</label>
        <input
          type="text"
          id="profileUrl"
          v-model="form.profileUrl"
          class="input"
        />
      </div>
      <button type="submit">Register</button>
       <p> You have an account?<router-link to="login">Login</router-link></p>
    </form>
    <p v-if="registrationError" class="error">{{ registrationError }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        gender: "",
        userDOB: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        profileUrl: "",
      },
      registrationError: null,
    };
  },
  methods: {
    async registerUser() {
      this.registrationError = null;
      console.log(this.registrationError);
      try {
        const response = await this.$store.dispatch("registerUser", this.form);
        console.log(response);
        this.$router.push("/login");
      } catch (error) {
        this.registrationError =
          "Registration failed. Please check your inputs and try again.";
      }
    },
  },
};
</script>
<style scoped>
.registration {
  max-width: 26.875rem; 
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 1.875rem; 
  border: 2px solid blueviolet;
  border-radius: 0.375rem;
  background: transparent;
}

.form-group {
  margin-bottom: 1.25rem;
}

label {
  font-size: 1rem;
  font-weight: 600;
  color: #b61c9a;
}

.input {
  width: 100%;
  height: 3.125rem;
  padding: 0.938rem;
  border: 0.063rem solid #83168f;
  border-radius: 0.375rem;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
}

button {
  color: #fff;
  background-color: #ec75e6;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 10px 20px; 
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  width: 366px;
}

button:hover {
  background-color: #b3279e;
}

.error {
  color: red;
  margin-top: 0.625rem;
}
h2{
    color: #83168f;
}
p{
  color: #83168f;
}

</style>









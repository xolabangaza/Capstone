<template>
  <div class="text-center">
    <h2>Users</h2>
    <table class="table">
      <thead>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Password</th>
          <th>User Role</th>
          <th>Profile URL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.userID">
          <td>{{ user.userID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.userDOB }}</td>
          <td>{{ user.emailAdd }}</td>
          <td>{{ user.userPass }}</td>
          <td>{{ user.userRole }}</td>
          <td><img :src="user.profileUrl" :alt="user.firstName" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: null,
       error: null, 
    };
  },
mounted() {
  this.$store
    .dispatch("getUsers")
    .then((response) => {
      this.users = response.data;
    })
    .catch((error) => {
      this.error = "Error fetching users. Please try again later."; 
      console.error("Error fetching users:", error);
    });
},

};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>

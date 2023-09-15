<template>
  <div>
    <h2>Delete User</h2>
    <p>Are you sure you want to delete your account?</p>
    <button @click="deleteUser">Delete</button>
  </div>
</template>

<script>
export default {
  methods: {
    deleteUser() {
      const userID = this.$store.state.user.userID;
      this.$store.dispatch("deleteUser", userID);
      // Redirect to a page after deletion (e.g., homepage)
      this.$router.push("/");
    },
  },
};
</script>

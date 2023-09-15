<template>
  <div>
    <h2>Edit User Profile</h2>
    <form @submit.prevent="editUser">
      <input v-model="editedUser.firstName" type="text" placeholder="First Name" />
      <input v-model="editedUser.lastName" type="text" placeholder="Last Name" />
      <!-- Add other input fields for editing user details -->
      <button type="submit">Save Changes</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedUser: { ...this.$store.state.user },
    };
  },
  methods: {
    editUser() {
      this.$store.dispatch("updateUser", this.editedUser);
      // Redirect to the user profile after editing
      this.$router.push(`/user-profile/${this.editedUser.userID}`);
    },
  },
};
</script>

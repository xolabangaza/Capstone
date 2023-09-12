<template>
  <div>
    <button
      @click="populateForm(user)"
      data-bs-toggle="modal"
      data-bs-target="#userModal"
    >
      Edit
    </button>

    <div
      class="modal fade"
      id="userModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="userModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="userModalLabel">
              Edit User
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
              <label>First Name</label>
              <input
                type="text"
                v-model="form.firstName"
              />
              <label>Last Name</label>
              <input
                type="text"
                v-model="form.lastName"
              />
              <label>Gender</label>
              <input
                type="text"
                v-model="form.gender"
              />
              <label>Date of Birth</label>
              <input
                type="date"
                v-model="form.userDOB"
              />
              <label>User Role</label>
              <input
                type="text"
                v-model="form.userRole"
              />
              <label>Email Address</label>
              <input
                type="text"
                v-model="form.emailAdd"
              />
              <label>Password</label>
              <input
                type="password"
                v-model="form.userPass"
              />
              <label>Profile URL</label>
              <input
                type="text"
                v-model="form.profileUrl"
              />
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
              @click="editUser()"
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
        userID: "",
        firstName: "",
        lastName: "",
        gender: "",
        userDOB: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        profileUrl: "",
      },
    };
  },
  methods: {
    populateForm(user) {
      this.form.userID = user.userID;
      this.form.firstName = user.firstName;
      this.form.lastName = user.lastName;
      this.form.gender = user.gender;
      this.form.userDOB = user.userDOB;
      this.form.userRole = user.userRole;
      this.form.emailAdd = user.emailAdd;
      this.form.userPass = user.userPass;
      this.form.profileUrl = user.profileUrl;
    },
    async editUser() {
      try {
        const editedUser = {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          gender: this.form.gender,
          userDOB: this.form.userDOB,
          userRole: this.form.userRole,
          emailAdd: this.form.emailAdd,
          userPass: this.form.userPass,
          profileUrl: this.form.profileUrl,
        };

        const response = await axios.patch(
          `http://localhost:5000/users/${this.form.userID}`,
          editedUser
        );

        alert("User updated successfully");
        // Optionally, you can reload the user list after editing
        this.$store.dispatch("getUsers");
        this.resetForm();
        this.$el.querySelector("#userModal").classList.remove("show");
        this.$el.querySelector(".modal-backdrop").remove();
        $("#userModal").modal("hide");
      } catch (error) {
        console.error("Error editing user:", error);
      }
    },
    resetForm() {
      this.form.userID = "";
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.gender = "";
      this.form.userDOB = "";
      this.form.userRole = "";
      this.form.emailAdd = "";
      this.form.userPass = "";
      this.form.profileUrl = "";
    },
  },
};
</script>

<style scoped>
/* Style for your user edit modal */
</style>

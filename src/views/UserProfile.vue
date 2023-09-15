<template>
  <div class="card">
    <div class="card-body">
      <!-- User Profile -->
      <div class="user-profile" v-if="isLoggedIn">
        <img :src="user.profileUrl" alt="User image" class="user-image" />
        <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
        <div class="user-details">
          <p><strong>Email:</strong> {{ user.emailAdd }}</p>
          <p><strong>Gender:</strong> {{ user.gender }}</p>
          <p><strong>Date of Birth:</strong> {{ user.userDOB }}</p>
          <p><strong>User Role:</strong> {{ user.userRole }}</p>
        </div>
        <button @click="editProfile" class="btn btn-primary">Edit</button>
        <button @click="showDeleteConfirmation" class="btn btn-danger">Delete</button>
      </div>
      <!-- End User Profile -->
    </div>
  </div>

  <!-- Edit Profile Modal -->
  <div class="modal" v-if="isEditing">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Profile</h5>
          <button type="button" class="close" @click="closeModal">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- Edit Profile Form -->
          <form @submit.prevent="saveProfile">
            <!-- Add form fields for editing profile details -->
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" class="form-control" id="firstName" v-model="editedUser.firstName">
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" class="form-control" id="lastName" v-model="editedUser.lastName">
            </div>
            <!-- Add more form fields as needed -->
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Delete Confirmation Modal -->
  <div class="modal" v-if="showDeleteModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirm Deletion</h5>
          <button type="button" class="close" @click="closeDeleteModal">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to delete your profile?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" @click="closeDeleteModal">Cancel</button>
          <button type="button" class="btn" @click="deleteProfile">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      showDeleteModal: false,
      editedUser: {
        // Initialize with the user's current data
        firstName: '',
        lastName: '',
        // Add more fields as needed
      },
    };
  },
  computed: {
    isLoggedIn() {
      const userDataJSON = localStorage.getItem("userData");
      return !!userDataJSON;
    },
    user() {
      const userDataJSON = localStorage.getItem("userData");
      if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        return userData.result || {};
      }
      return {};
    },
  },
  methods: {
    editProfile() {
      // Show the edit profile modal
      this.isEditing = true;
      // Initialize the editedUser with the current user data
      this.editedUser = { ...this.user };
    },
    closeModal() {
      // Close the edit profile modal
      this.isEditing = false;
    },
    saveProfile() {
      // Update the user data with editedUser
      // Perform any necessary API requests to save the changes
      // Close the edit profile modal
      this.isEditing = false;
    },
    showDeleteConfirmation() {
      // Show the delete confirmation modal
      this.showDeleteModal = true;
    },
    closeDeleteModal() {
      // Close the delete confirmation modal
      this.showDeleteModal = false;
    },
    deleteProfile() {
      // Perform the actual deletion of the user's profile data
      // Log the user out after deletion
      // Redirect to a logout or home page
    },
  },
};
</script>




<style scoped>
.card {
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #cc0dcf;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(51, 28, 151, 0.1);
  margin-bottom: 40px;
  margin-top: 40px;
  background-color: rgb(77, 76, 160);
}
.btn{
  background-color: #cc0dcf;
  margin: 10px;
  width: 90px;
}

.card-title {
  font-size: 18px;
  margin-top: 10px;
}

p {
  font-size: 14px;
  color: rgb(43, 5, 78);
}

.card-img-top {
  max-width: 100%;
}

.user-profile {
  text-align: center;
}

.user-image {
  width: 200px;
  border-radius: 45%;
  margin-bottom: 10px;
}

.user-profile h5.card-title {
  font-size: 25px;
  color: rgb(221, 37, 151)
}

.user-details p {
  font-size: 14px;
  margin: 0;
  margin-bottom: 5px;
}
</style>

<template>
  <div>
    <div v-if="users">
      <h2 class="mb-4 text-center">Users</h2>
      <div class="row">
        <div class="col-md-3" v-for="user in users" :key="user.userID">
          <div class="card mb-4 mx-5">
            <img :src="user.profileUrl" alt="User image" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">
                {{ user.firstName }} {{ user.lastName }}
              </h5>
              <p class="card-text">
                <strong>Email:</strong> {{ user.emailAdd }}
              </p>
              <p class="card-text">
                <strong>Gender:</strong> {{ user.gender }}
              </p>
              <p class="card-text">
                <strong>Date of Birth:</strong> {{ user.userDOB }}
              </p>
              <p class="card-text">
                <strong>User Role:</strong> {{ user.userRole }}
              </p>
              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Edit
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Update Product
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <label>Product Name</label>
                        <input
                          class="form-control"
                          type="text"
                          v-model="user.firstName"
                        />
                        <label>Last</label>
                        <input
                          class="form-control"
                          type="text"
                          v-model="user.lastName"
                        />
                        <label>Product Price</label>
                        <input
                          class="form-control"
                          type="number"
                          v-model="user.emailAdd"
                        />
                        <label>Product Stock</label>
                        <input
                          class="form-control"
                          type="number"
                          v-model="user.gender"
                        />
                        <label>Product Url</label>
                        <input
                          class="form-control"
                          type="text"
                          v-model="user.userDOB"
                        />
                        <label>Product Url</label>
                        <input
                          class="form-control"
                          type="text"
                          v-model="user.userRole"
                        />
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
                          class="btn btn-primary"
                          @click="editProduct()"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <button class="btn btn-danger" @click="deleteUser(user.userID)">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import axios from "axios";
import Spinner from "@/components/Spinner.vue"


export default {
  data() {
    return {
      users: null,
      user: {
        firstName: "",
        lastName: "",
        emailAdd: "",
        gender: "",
        userDOB: "",
        userRole: "",
      },
    };
  },
  created() {
    const baseUrl = "https://backend-i8zg.onrender.com/";
    axios
      .get(`${baseUrl}users`)
      .then((response) => {
        this.users = response.data.results;
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  },
  methods: {
    async editUser() {
      try {
        const editedUser = {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          emailAdd: this.user.emailAdd,
          gender: this.user.gender,
          userDOB: this.user.userDOB,
          userRole: this.user.userRole,
        };
        const response = await axios.patch(
          `${dbConnection}users/${this.user.userID}`,
          editedUser
        );
        alert("User updated successfully");
        this.$store.dispatch("getUsers");
        this.resetForm();
        $("#exampleModal").modal("hide");
      } catch (error) {
        console.error("Error editing user:", error);
      }
    },
    resetForm() {
      this.user.firstName = "";
      this.user.lastName = "";
      this.user.emailAdd = "";
      this.user.gender = "";
      this.user.userDOB = "";
      this.user.userRole = "";
    },
    populateForm(user) {
      this.user.userID = user.userID;
      this.user.firstName = user.firstName;
      this.user.lastName = user.lastName;
      this.user.emailAdd = user.emailAdd;
      this.user.gender = user.gender;
      this.user.userDOB = user.userDOB;
      this.user.userRole = user.userRole;
    },
  },
   deleteUser(userID) {
      if (confirm("Are you sure you want to delete this user?")) {
        axios
          .delete(`${baseUrl}user/${userID}`)
          .then((response) => {
            if (response.status === 200) {
              
              this.fetchUsers();
            } else {
              
              console.error("Error deleting user.");
            }
          })
          .catch((error) => {
            
            console.error("Error deleting user:", error);
          });
      }
    },
      components: {Spinner },
}

</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.02);
}
.mb-4 {
  color: #9e00b3;
}

.card-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.card-text {
  font-size: 14px;
  color: #260808;
}

.card-img-top {
  max-height: 200px;
  object-fit: cover;
}

.btn-primary {
  background-color: #6b1263;
  border-color: #b90ee3;
}

.btn-primary:hover {
  background-color: #9129a6;
  border-color: #0056b3;
}

.btn-danger {
  background-color: #c81cb4;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #8613a2;
  border-color: #6216a0;
}
</style>

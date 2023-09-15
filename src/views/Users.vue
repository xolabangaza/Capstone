<template>
  <div>
    <div v-if="users">
      <h2 class="mb-4 text-center">Users</h2>
      <div class="row">
        <div class="col-md-3" v-for="user in users" :key="user.userID">
          <div class="card mb-4 mx-5">
            <img :src="user.profileUrl" alt="User image" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
              <p class="card-text"><strong>Email:</strong> {{ user.emailAdd }}</p>
              <p class="card-text"><strong>Gender:</strong> {{ user.gender }}</p>
              <p class="card-text"><strong>Date of Birth:</strong> {{ user.userDOB }}</p>
              <p class="card-text">
                <strong>User Role:</strong> {{ user.userRole }}
              </p>
              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-primary mr-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="populateForm(user)"
                >
                  Edit
                </button>
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
export default {
  data() {
    return {
      users: null,
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
};
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
.mb-4{
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
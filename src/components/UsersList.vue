<template>
  <div class="text-center">
    <h2>Users</h2>
    <div class="row">
      <div class="col-md-4" v-for="user in users" :key="user.userID">
        <div class="card">
          <img :src="user.profileUrl" class="card-img-top" :alt="user.firstName" />
          <div class="card-body">
            <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
            <p class="card-text">{{ user.emailAdd }}</p>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              @click="populateForm(user)"
            >
              Edit
            </button>
            <button @click="deleteUser(user.userID)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  computed: {
       users() {
      return this.$store.state.users;
    },
    
  },
  mounted() {
     this.$store.dispatch("getUsers");
  },
data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        gender: "",
        userDOB: "",
        emailAdd: "",
        userPass: "",
        userRole : "",
        profileUrl: "",
      },
      // users: [],
    };
  },
  methods: {
     async fetchUsers() {
      try {
        const response = await axios.get("http://localhost:5000/users");
        this.users = response.data;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async editUser() {
      try {
        const editedUser = {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          gender: this.form.gender,
          userDOB: this.form.userDOB,
          emailAdd: this.form.emailAdd,
          userPass: this.form.userPass,
          userRole: this.form.userRole,
          profileUrl: this.form.profileUrl,
        };
        const response = await axios.patch(
          `http://localhost:5000/users/${this.form.userID}`,
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
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.gender = "";
      this.form.userDOB = "";
      this.form.emailAdd = "";
      this.form.userPass = "";
      this.form.userRole = "";
      this.form.profileUrl = "";
    },
    populateForm(user) {
      this.form.prodID = user.userID;
      this.form.firstName = user.firstName;
      this.form.lastName = user.lastName;
      this.form.gender = user.gender;
      this.form.userDOB = user.userDOB;
      this.form.emailAdd = user.emailAdd;
      this.form.userPass = user.userPass;
      this.form.userRole = user.userRole;
      this.form.profileUrl = user.profileUrl;
    },
    async deleteUser(userID) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/users/${userID}`
        );
        alert("User deleted successfully");
        this.$store.dispatch("getUsers");
        window.location.reload();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
    async submit() {
      try {
        const newUser = {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          gender: this.form.gender,
          userDOB: this.form.userDOB,
          emailAdd: this.form.emailAdd,
          userPass: this.form.userPass,
          userRole: this.form.userRole,
          profileUrl: this.form.profileUrl,
        };

        const response = await axios.post(
          "http://localhost:5000/users",
          newUser
        );

        if (response.status === 200) {
          alert("User added successfully");
          this.$store.dispatch("getUsers");
          this.resetForm();
          window.location.reload();
        } else {
          console.error("Error adding user:", response.data);
        }
      } catch (error) {
        console.error("Error adding user:", error);
      }
    },
  },
};

</script>

<style scoped>
.just {
  margin: auto;
  color: rgb(216, 37, 126);
}
img {
  width: 100px;
  height: 110px;
}
h1 {
  text-align: center;
}
form {
  margin: 20px auto;
}
label {
  display: block;
  margin-top: 10px;
  color: rgb(226, 43, 134);
}
h3 {
  color: brown;
}
input {
  display: flex;
  justify-content: center;
  width: 30%;
  height: 50px;
  padding: 5px;
  margin-top: 5px;
  border-radius: 8px;
  background-color: transparent;
}
button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: rgb(183, 116, 183);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: rgb(183, 116, 183);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: auto;
}
button:hover {
  background-color: purple;
}
h2 {
  color: #0056b3;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  padding: 8px;
  text-align: center;
  border-bottom: 4px solid #c836b2;
}
.table {
  border-collapse: collapse;
  width: 100%;
}
@media screen and (max-width: 700px) {
  * {
    overflow: hidden;
  }
  input {
    width: 70%;
    font-size: 14px;
  }
  button {
    width: 40%;
    font-size: 16px;
  }
  form {
    padding: 20px;
  }
  h2 {
    font-size: 28px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  label {
    font-size: 12px;
    margin-top: 3px;
  }
  table {
    font-size: 10px;
  }
  th,
  td {
    padding: 5px;
  }
  img {
    width: 70px;
    height: 80px;
  }
  button {
    display: flex;
    flex-direction: column;
    width: 80px;
  }
  thead {
    display: none;
  }
}
</style>


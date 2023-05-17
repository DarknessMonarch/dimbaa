<script setup>
import { ref } from "vue";
const Name = ref("");
const userRole  = ref("");
const userID  = ref("");
const Email = ref("");
const Mobile = ref("");

const getDetails = () => {
//   console.log(
//     userID.value,
//     mobile.value,
//     Team.value,
//     PlayerNumber.value,
//     email.value,
//     Team.value
//   );

  reset();
};

//Reset the form
const reset = () => {
  Email.value = "";
  Mobile.value = "";
  userRole.value = "";
  userID.value = "";
  Name.value = "";
};
</script>
<template>
  <div class="pop-adduser-form">
 
    <form
      action=""
      method="post"
      @submit.prevent="getDetails"
      class="userform-wrapper"
    >
    <div class="userform-input">
      <label for="add-user-select" class="user-label">User Role</label>
        <select
          required
          v-model="userRole"
          class="user-input"
          id="add-user-select"
        >
          <option>Super Admin</option>
          <option>Team Admin</option>
          <option>Team Manager</option>
          <option>General Coordinator</option>
          <option>Referee</option>
          <option>Match Commissioner</option>
          <option>Referee Assessor</option>
          <option>Data Manager</option>
          <option>League Director</option>
        </select>
        </div>
    <div class="userform-input">
        <label for="add-user-input" class="user-label">Name</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="Name"
          placeholder="User Name"
          />
        </div>
        <div class="userform-input">
        <label for="add-user-input" class="user-label">User ID</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="UserID"
          placeholder="UserID"
          />
        </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Mobile</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="Mobile"
          placeholder=" Your mobile"
        />
      </div>
      <div class="userform-input">
          <label for="add-user-input" class="user-label">Email</label>
          <input
            required
            type="email"
            class="user-input"
            v-model="Email"
            placeholder="kevin@example.com"
          />
      </div>
      <div class="user-btn-f">
        <button type="submit" class="btn-f a-u">Update</button>
          <button type="submit" class="btn-f r-u">Delete</button>
        <button type="submit" @click="reset" class="btn-f r-u">Reset</button>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/user.css";
</style>

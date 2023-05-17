<script setup>
import { ref , watchEffect } from "vue";
import axios from "axios";

const userName = ref("");
const mobileNumber = ref("");
const email = ref("");
const userRole = ref("");
const password = ref("");
const error = ref("");
const confirmPassword = ref("");
const showField = ref(false);

watchEffect(() => {
  switch (userRole.value) {
    case "Team Admin":
      showField.value = true;
      break;
      case "Team Manager":
      showField.value = true;
      break;
    default:
      showField.value = false;
      break;
  }
})



// //Stored in session
// userRole.value 
const createUser = () => {

if (password.value != confirmPassword.value) {
  error.value = "Password's don't match"
  
} else {

 const userData = JSON.stringify({
  "name": userName.value,
  "email": email.value,
  "mobile": mobileNumber.value,
  "password": password.value,
  "c_password": password.value,
});  


async () => {
  const options = {
    method: "POST",
    url: "https://be-tblp.dimbaa.com/api/admin/users",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNWZhMGRiODY3YTM0NTg3MTg2ZDk3MDdiMDBmYzliYWM4M2QyZjAzOWM2ZjhjZjVlMTRlMWUwY2UxZGYxYmRhNDdiYWYxNWEyMjJhMDhkMmIiLCJpYXQiOjE2NzExOTM1MzguNTU0MTM0LCJuYmYiOjE2NzExOTM1MzguNTU0MTM2LCJleHAiOjE2ODY5MTgzMzguNTQ4NTAxLCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.kYBwzo9ZoKTL9GG_j9iMpswww1UriiHYPufljSVJo_5QyLiJrI4Wb2k0sPD7iDb0SmlrFQnUdSI8knqLUZBe2Sd2bC4r4c_otOdYLnQAyxmM-0fJh_jVIGYgCjFF7msWOWsTcyl8fg7-Uj3yrsAxoxOdQW-L28dx4-hFAZUR9eOs2XCwU0cf9TUnGdqxvUm_wFBBou509NtZec1bmaAgUbG9GSpAfk7mfmuUOU1u7ElrOTFyvvN4bAI_70DpK3XUDJ0Nw81YsCO0_kp_Nr1hAZ2fmcIPXe-xKvwSPfp_7cMmT6HqV9MdQwPK7-ISoJq_eTy2fGvfHDQrWyKLDyKp8W0Fs5z6PURwT2hFZ6tV3jxCMH-sAzgTY72xXdb3EjG4etbbyc-wAWXmPQ9WB5SeOms2Xqm4M41XQbNeyK-qy2jYcDQLnYVnRZihWdBTLcBf64_DFuMWzRhvu4hTL8_fVu94whAWW-Oi9-s7BKRftDf3paExjJtEaT6-kUDnzRpe_Yfw9nfWDxA8LYUUsukYDDqvSshVRk5eG6kp3K169pppD7gAKakpORggebMgEHn4DGX7ieowJk3XCfDrIxZ5EVoX3HGZjamaRPmnl-bX2lvBTjBm3uFSGrLnMbckzS4fdpYK3YnNmyBESm9-sOCQ-5M3Nf6jsFQH6FdeWnGoo0E",
    },
    body: userData,
  };

 await axios
    .request(options)
    .then(function (response) {
      data.value = JSON.stringify(response.data);
      console.log(data.value);
    })
    .catch(function (error) {
      console.error(error);
    });
};

}

  reset();
};

//Reset the form
const reset = () => {
  email.value = "";
  userRole.value = "";
  userName.value = "";
  mobileNumber.value = "";
};

</script>
<template>
  <div class="pop-adduser-form">
 
    <form
      action=""
      method="post"
      @submit.prevent
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
      <div class="userform-input" v-show="showField == true">
        <label for="add-user-select" class="user-label">Select a team</label>
        <select
          required
          v-model="userRole"
          class="user-input"
          id="add-user-select"
        >
          <option>Harambee </option>
          <option>Chelsea</option>
        </select>
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Name</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="userName"
          placeholder="penguin"
          />
          </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Mobile</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="mobileNumber"
          placeholder="+25438392045"
        />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">email</label>
        <input
          required
          type="email"
          class="user-input"
          v-model="email"
          placeholder=" Your email"
        />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Password</label>
        <input
          required
          type="password"
          class="user-input"
          v-model="password"
          placeholder=" Your password"
        />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Confirm password</label>
        <input
          required
          type="password"
          class="user-input"
          v-model="confirmPassword"
          placeholder="confirm password"
        />
      </div>
     <span>{{ error }}</span> 
      <div class="user-btn-f">
        <button type="submit" class="btn-f a-u"  @click="createUser">Add</button>
        <button type="submit" @click="reset" class="btn-f r-u">Reset</button>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/user.css";
</style>

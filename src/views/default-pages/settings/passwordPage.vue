<script setup>
import { ref } from "vue";
const userId = ref("");
const oldPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");

const getCredentials = () => {
//   console.log(
//     userName.value,
//     userId.value,
//     userRole.value,
//     mobileNumber.value,
//     email.value,
//     userRole.value
//   );

  reset();
};

//Reset the form
const reset = () => {
  oldPassword.value = "";
  newPassword.value = "";
  confirmPassword.value = "";
};
</script>
<template>
  <div class="security-password-form">
    <form
      action=""
      method="post"
      @submit.prevent="getUser"
      class="securityform-wrapper"
    >
    <h1>Change Password</h1>
      <div class="secureform-input">
        <input
          required
          type="text"
          class="secure-input"
          v-model="oldPassword"
          placeholder="Old Password"
        />
      </div>
      <div class="secureform-input">
        <input
          required
          type="text"
          class="secure-input"
          v-model="newPassword"
          placeholder="New Password"
        />
      </div>
      <div class="secureform-input">
        <input
          required
          type="text"
          class="secure-input"
          v-model="confirmPassword"
          placeholder="confirm password"
        />
      </div>
      <div class="secure-btn-f">
        <button type="submit" class="btn-s s-u">Add</button>
        <button type="submit" @click="reset" class="btn-s s-f">Reset</button>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/security.css";
</style>

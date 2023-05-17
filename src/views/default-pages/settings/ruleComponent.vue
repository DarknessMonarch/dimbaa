<script setup>
import { ref } from "vue";
const cardNumber = ref("");
const numberOfRepeats = ref("");
const noOfBans = ref("");

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
const cancel = () => {
  cardNumber.value = "";
  numberOfRepeats.value = "";
  noOfBans.value = "";
};

</script>
<template>
  <div class="sp-rule">
    <div class="security-password-form">
    <form
      action=""
      method="post"
      @submit.prevent="getUser"
      class="securityform-wrapper popup-security"
    >
      <div class="secureform-input">
        <input
          required
          type="text"
          class="secure-input secure-input-pop"
          v-model="cardNumber"
          placeholder="Card number"
        />
      </div>
      <div class="secureform-input">
        <input
          required
          type="text"
          class="secure-input secure-input-pop"
          v-model="numberOfRepeats"
          placeholder="Number of repeats"
        />
      </div>
      <div class="secureform-input">
        <input
          required
          type="text"
          class="secure-input secure-input-pop"
          v-model="noOfBans"
          placeholder="Number of bans per match"
        />
      </div>
      <div class="secure-btn-f  secure-btn-pop">
        <button type="submit" class="btn-s btn-s-pop s-u">Add</button>
        <button type="submit" @click="cancel" class="btn-s btn-s-pop  s-f">Cancel</button>
      </div>
    </form>
  </div>
  </div>

</template>
<style>
@import "@/style/security.css";
</style>

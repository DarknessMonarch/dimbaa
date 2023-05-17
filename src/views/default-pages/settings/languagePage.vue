<script setup>
import { ref } from "vue";

const language = ref("");

const getUser = () => {
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
  language.value = "";
};
</script>
<template>
  <div class="language-form">
    <form
      action=""
      method="post"
      @submit.prevent="getUser"
      class="languageform-wrapper"
    >
    <h1>Choose a language</h1>
      <div class="languageform-input">
        <select
          required
          v-model="language"
          class="languageinput"
        >
          <option>English</option>
          <option>Kiswahili</option>
          <option>French</option>
        </select>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/language.css";
</style>

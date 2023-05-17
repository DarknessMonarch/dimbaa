<script setup>
import { ref, watchEffect } from "vue";
import { useColorMode } from '@vueuse/core'

const colorChoice = ref("");

const mode = useColorMode({
  emitAuto: true,
  //custom 
  modes: {
    contrast:'dark contrast',
    cafe:'coffee',
    // note that dark & light use the system preference 
  }
})

watchEffect(() => {
  switch (colorChoice.value) {
    case 'light':
      mode.value = 'light';
      break;
      case 'dark':
      mode.value = 'dark';
      break;
      case 'coffee':
      mode.value = 'coffee';
      break;
      case 'contrast':
      mode.value = 'contrast';
      break;
  
    default:
      break;
  }
})


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
  colorChoice.value = "";
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
    <h1>Choose a theme</h1>
      <div class="languageform-input">
        <select
          required
          v-model="colorChoice"
          class="languageinput"
        >
          <option>light</option>
          <option>dark</option>
          <option>coffee</option>
          <option>contrast</option>
        </select>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/language.css";
</style>

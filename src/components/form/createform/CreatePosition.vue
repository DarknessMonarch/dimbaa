<script setup>
import { ref } from "vue";
const name = ref("");
const number  = ref("");
const role = ref("");



const getDetails = () => {
  reset();
};

//Reset the form
const reset = () => {
  number.value = "";
  name.value = "";
  role.value = "";
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
        <label for="add-user-input" class="user-label">name</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="name"
          placeholder="name"
          />
        </div>
    <div class="userform-input">
        <label for="add-user-input" class="user-label">number</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="number"
          placeholder="number"
          />
        </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">role</label>
        <select
          required
          v-model="role"
          class="user-input"
        >
          <option>lines man</option>
          <option>referee</option>
        </select>
      </div>
      <div class="user-btn-f">
        <button type="submit" class="btn-f a-u">Add</button>
        <button type="submit" @click="reset" class="btn-f r-u">Reset</button>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/user.css";
</style>

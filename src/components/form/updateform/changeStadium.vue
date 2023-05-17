<script  setup>
import { ref } from "vue";
const current = ref("");
const changeTo  = ref("");


const getDetails = () => {

  reset();
};

//Reset the form
const reset = () => {
  changeTo.value = "";
  current.value = "";
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
        <label for="add-user-input" class="user-label">current</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="current"
          placeholder="current"
          />
        </div>
        <div class="userform-input">
        <label for="add-user-input" class="user-label">change To</label>
        <select
          required
          v-model="changeTo"
          class="user-input"
          id="add-user-select"
        >
          <option>Stadium 1</option>
          <option>Stadium 2</option>
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

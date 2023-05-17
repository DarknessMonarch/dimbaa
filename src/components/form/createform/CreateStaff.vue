<script setup>
import { ref } from "vue";
const medic = ref("");
const coach  = ref("");
const assistantCoach = ref("");


const getDetails = () => {
  reset();
};

//Reset the form
const reset = () => {
  coach.value = "";
  medic.value = "";
  assistantCoach.value = "";
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
        <label for="add-user-input" class="user-label">Medic</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="medic"
          placeholder="name"
          />
        </div>
    <div class="userform-input">
        <label for="add-user-input" class="user-label">Coach</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="coach"
          placeholder="coach"
          />
        </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Assistant coach</label>
        <input
          required
          type="email"
          class="user-input"
          v-model="assistantCoach"
          placeholder="name"
        />
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

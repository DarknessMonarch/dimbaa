<script setup>
import { ref } from "vue";
const formation = ref("");
const position  = ref("");
const number = ref("");
const role = ref("");
const subPosition = ref("");


const getDetails = () => {
  reset();
};

//Reset the form
const reset = () => {
  subPosition.value = "";
  position.value = "";
  formation.value = "";
  number.value = "";
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
          <label for="add-user-input" class="user-label">Player name</label>
          <input
            required
            type="text"
            class="user-input"
            v-model="playername"
            placeholder="mbappe"
          />
      </div>
    <div class="userform-input">
        <label for="add-user-input" class="user-label">Formation</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="formation"
          placeholder="4-4-2 Diamond"
          />
        </div>
    <div class="userform-input">
        <label for="add-user-input" class="user-label">Position</label>
        <input
          required
          type="text"
          class="user-input"
          v-model="position"
          placeholder="Defender"
          />
        </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">SubPosition</label>
        <input
          required
          type="email"
          class="user-input"
          v-model="subPosition"
          placeholder="right wingback"
        />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label">Number</label>
        <input
          required
          type="email"
          class="user-input"
          v-model="number"
          placeholder="07"
        />
      </div>
      <div class="userform-input">
        <label for="add-user-input" class="user-label"> Role</label>
        <input
          required
          type="email"
          class="user-input"
          v-model="role"
          placeholder="Forward"
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

<script setup>
import { ref } from "vue";
const Team = ref("");
const Tournament  = ref("");
const City = ref("");
const Referee = ref("");
const Referee2 = ref("");
const Stadium = ref("");
const Date = ref("");
const Away = ref("");
const year = ref("");
const commissioner = ref("");

const getDetails = () => {

  reset();
};

//Reset the form
const reset = () => {
  Team.value = "";
  Tournament.value = "";
  City.value = "";
  Referee.value = "";
  Referee2.value = "";
  Stadium.value = "";
  Date.value = "";
  Away.value = "";
  year.value = "";
  commissioner.value = "";
};
</script>
<template>
  <div class="pop-adduser-form">
 
    <form
      action=""
      method="post"
      @submit.prevent="getDetails"
      class="match-form-wrapper"
    >
    <div class="match-wrapper">
    <div class="match-wrapper1">
      <div class="match-container">
        <label for="match-select" class="match-label">Name of Tournament</label>
        <select
          required
          v-model="Tournament"
          class="match-input"
          id="match-select"
        >
          <option>Tournament1</option>
          <option>Tournament2</option>
        </select>
      </div>
      <!-- <div class="match-container">
        <label for="match-select" class="match-label labl-tans">Match</label>
       <input type="text"    class="match-input" placeholder="Tournament83746" disabled>
      </div> -->
    </div>
    <div class="match-wrapper2">
        <div class="match-container">
        <label for="match-select" class="match-label">Select Year</label>
        <select
          required
          v-model="year"
          class="match-input"
          id="match-select"
        >
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
      <div class="match-container">
        <label for="match-select" class="match-label">Date</label>
        <select
          required
          v-model="Date"
          class="match-input"
          id="match-select"
        >
          <option>Date1</option>
          <option>Date2</option>
        </select>
      </div>
      <div class="match-container">
        <label for="match-select" class="match-label">Stadium</label>
        <select
          required
          v-model="Stadium"
          class="match-input"
          id="match-select"
        >
          <option>Stadium1</option>
          <option>Stadium2</option>
        </select>
      </div>
    </div>
    </div>
      <div class="match-btn-f ">
        <button type="submit" class="btn-f u-a">Create</button>
        <button type="submit" @click="reset" class="btn-f u-r e-a">Reset</button>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/match.css";
</style>

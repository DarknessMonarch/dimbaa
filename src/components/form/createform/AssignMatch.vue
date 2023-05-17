<script setup>
import { ref } from "vue";

const match = ref("");
const assessor = ref("");
const City = ref("");
const Referee = ref("");
const general = ref("");

const assignO = () => {

  reset();
};

//Reset the form
const reset = () => {
  match.value = "";
  assessor.value = "";
  City.value = "";
  Referee.value = "";
  general.value = "";
};
</script>
<template>
  <div class="pop-adduser-form">

    <form action="" method="post" @submit.prevent="assignO" class="match-form-wrapper">
      <div class="match-wrapper">
        <div class="match-wrapper1">
          <div class="match-container">
            <label for="match-select" class="match-label">Referee</label>
            <select required v-model="Referee" class="match-input" id="match-select">
              <option>Referee1</option>
              <option>Referee2</option>
            </select>
          </div>
          <div class="match-container">
            <label for="match-select" class="match-label">Match commissioner</label>
            <select required v-model="match" class="match-input" id="match-select">
              <option>match1</option>
              <option>match2</option>
            </select>
          </div>
        </div>
        <div class="match-wrapper2">
          <div class="match-container">
            <label for="match-select" class="match-label">Referee assessor</label>
            <select required v-model="assessor" class="match-input" id="match-select">
              <option>assessor</option>
              <option>assessor</option>
            </select>
          </div>
          <div class="match-container">
            <label for="match-select" class="match-label">general commissioner</label>
            <select required v-model="commissioner" class="match-input" id="match-select">
              <option>general1</option>
              <option>general2</option>
            </select>
          </div>
        </div>
      </div>
      <div class="match-btn-f ">
        <button type="submit" class="btn-f u-a" @click="assignO">Submit</button>
        <button type="submit" @click="reset" class="btn-f u-r e-a">Reset</button>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/match.css";
</style>

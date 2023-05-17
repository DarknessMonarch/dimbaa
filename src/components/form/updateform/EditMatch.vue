<script setup>
import { ref } from "vue";
const Team = ref("");
const Tournament = ref("");
const City = ref("");
const Referee = ref("");
const Referee2 = ref("");
const Stadium = ref("");
const Date = ref("");
const Away = ref("");
const Official = ref("");
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
  Official.value = "";
  commissioner.value = "";
};
</script>
<template>
  <div class="pop-adduser-form">

    <form action="" method="post" @submit.prevent="getDetails" class="match-form-wrapper">
      <div class="match-wrapper">
        <div class="match-wrapper1">
          <div class="match-container">
            <label for="match-select" class="match-label">Home Team</label>
            <select required v-model="Team" class="match-input" id="match-select">
              <option>Home Team1</option>
              <option>Home Team2</option>
            </select>
          </div>
          <div class="match-container">
            <label for="match-select" class="match-label">Tournament</label>
            <select required v-model="Tournament" class="match-input" id="match-select">
              <option>Tournament1</option>
              <option>Tournament2</option>
            </select>
          </div>
          <div class="match-container">
            <label for="match-select" class="match-label">City</label>
            <select required v-model="City" class="match-input" id="match-select">
              <option>City1</option>
              <option>City2</option>
            </select>
          </div>
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
            <label for="match-select" class="match-label">Away Team</label>
            <select required v-model="Away" class="match-input" id="match-select">
              <option>Away Team1</option>
              <option>Away Team2</option>
            </select>
          </div>
          <div class="match-container">
            <label for="match-select" class="match-label">Date</label>
            <select required v-model="Date" class="match-input" id="match-select">
              <option>Date1</option>
              <option>Date2</option>
            </select>
          </div>
          <div class="match-container">
            <label for="match-select" class="match-label">Stadium</label>
            <select required v-model="Stadium" class="match-input" id="match-select">
              <option>Stadium1</option>
              <option>Stadium2</option>
            </select>
          </div>
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
        <button type="submit" class="btn-f u-a">Update</button>
        <button type="submit" @click="reset" class="btn-f u-r e-a">Reset</button>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/match.css";
</style>

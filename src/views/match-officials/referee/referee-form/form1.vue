<script setup>
import axios from "axios";
import { ref, onMounted, watchEffect } from "vue";
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
const teamHA = ref("");
const teamHB = ref("");
const teamFA = ref("");
const teamFB = ref("");
const filling = ref("");

watchEffect(() => {
  if (teamHA.value != '' || teamHB.value != '' || teamFA.value != '' || teamFB.value != '') {
    filling.value = true;
  } else {
    filling.value = false;
  }
})

const isSubmitted = () => {



  const data = JSON.stringify({
    "match": "1",
    "halftime_score": {
      "team1": 0,
      "team2": 0
    },
    "final_score": {
      "team1": 0,
      "team2": 0
    }
  });

let token = localStorage.authKey;
let url = 'https://be-tblp.dimbaa.com/api/'


  onMounted(async () => {
    const options = {
      method: "POST",
      url: `${url}referee/team-results`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  reset();

}

const reset = () => {
  
  teamHA.value = "";
  teamHB.value = "";
  teamFA.value = "";
  teamFB.value = "";

}


</script>
<template>
  <div class="form1-container">
    <h1>Referee</h1>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">Final score</label>
        <div class="form1-i">
          <div class="form1-input short-i">
          </div>
          <input type="text" class="form1-input short-i" placeholder="Team A" V-model="teamFA">
          <input type="text" class="form1-input short-i" placeholder="Team B" V-model="teamFB">
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w f2-i">
        <label for="">Half time</label>
        <div class="form1-i ">
          <input type="text" class="form1-input short-i" placeholder="Team A" V-model="teamHA">
          <input type="text" class="form1-input short-i" placeholder="Team B" V-model="teamHB">
        </div>
      </div>
    </div>
    <div class="btn1-center">
    <div class="form1-btn">
        <button class="btn1 btn1-a" :class="filling == true ? 'filling' : ''">Reset</button>
        <button class="btn1 btn1-b hide-m" @click="submitted" :class="filling == true ? 'filling' : ''">Save draft</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" @click="nextStore.updatePreviousState()">Previous</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" @click="nextStore.updateNextState()">Next</button>
      </div>
  </div>
  </div>
</template>
<style>
@import "@/style/form.css";
</style>

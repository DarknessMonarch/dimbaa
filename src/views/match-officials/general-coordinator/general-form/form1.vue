<script setup>
import axios from "axios";
import {ref, watchEffect, onMounted} from 'vue'
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
const filling = ref(false);
const submitted = ref(false);
const FTeamA = ref('');
const FTeamB = ref('');
const ETeamA = ref('');
const ETeamB = ref('');
const PTeamA = ref('');
const PTeamB = ref('');
const favorFinal = ref('');
const favorExtra = ref('');
const favorPenalty = ref('');

watchEffect(() => {
  if(favorPenalty.value != '' || favorExtra.value != '' || favorFinal.value != '' || FTeamA.value != '' || FTeamB.value != '' || ETeamA.value != '' || ETeamB.value != '' ||  PTeamA.value != '' || PTeamB.value != '' ) {
    filling.value = true;
  } else {
    filling.value = false;
  }
})

const reset = () => {
  FTeamA.value = "";
  FTeamB.value = "";
  ETeamA.value = "";
  ETeamB.value = "";
  PTeamA.value = "";
  PTeamB.value = "";
  favorExtra.value = "";
  favorFinal.value = "";
  favorPenalty.value = "";
}


const Submit = () => {

const data = JSON.stringify({
  "match": "molestias",
  "extra_time_score": [{
    "teamA": ETeamA.value,
    "teamB": ETeamB.value,
  } 
  ],
  "penalty": [
  {
    "teamA": PTeamA.value,
    "teamB": PTeamB.value,
  } 
  ],
  "final_score": [
  {
    "teamA": FTeamA.value,
    "teamB": FTeamB.value,
  } 
  ]
});

let token = localStorage.authKey;
let url = 'https://be-tblp.dimbaa.com/api/'



onMounted(async () => {
  const options = {
    method:"POST",
    url: `${url}general-coordinator/team-results`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    data:  data,
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

</script>
<template>
  <div class="form1-container">
  <h1>Results</h1>
  <!-- input container  -->
    <div class="form1-wrapper">
    <div class="form1-w">
    <label for="">Final Score</label>
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Team A" v-model="FTeamA">
      <input type="text" class="form1-input short-i" placeholder="Team B" v-model="FTeamB">
      </div>
    </div>
    <div class="form1-w">
    <label for="">In Favour Of</label>
      <input type="text" class="form1-input" placeholder="Enter here" v-model="favorFinal">
      </div>
    </div>
  <!-- input container  -->
  <div class="form1-wrapper">
    <div class="form1-w">
    <label for="">Extra Time score</label>
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Team A" v-model="ETeamA">
      <input type="text" class="form1-input short-i" placeholder="Team B" v-model="ETeamB">
      </div>
    </div>
    <div class="form1-w">
    <label for="">In Favour Of</label>
      <input type="text" class="form1-input" placeholder="Enter here" v-model="favorExtra">
      </div>
    </div>
  <!-- input container  -->
  <div class="form1-wrapper">
    <div class="form1-w">
    <label for="">Penalty</label>
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Team A" v-model="PTeamA">
      <input type="text" class="form1-input short-i" placeholder="Team B" v-model="PTeamB">
      </div>
    </div>
    <div class="form1-w">
    <label for="">In Favour Of</label>
      <input type="text" class="form1-input" placeholder="Enter here" v-model="favorPenalty">
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
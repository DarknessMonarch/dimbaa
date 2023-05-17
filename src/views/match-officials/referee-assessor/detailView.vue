<script setup>
import axios from "axios";
import { useNextStore } from "@/stores/next.js";
import { onMounted } from "vue";

const nextStore = useNextStore();

let token = localStorage.authKey;
let url = 'https://be-tblp.dimbaa.com/api/'

// endpoint not working
onMounted(async () => {
  const options = {
    method: "GET",
    url: `${url}referee-assessor/list-match-events`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      data.value = response.data.events;
      console.log(data.value);
    })
    .catch(function (error) {
      console.error(error);
    });
});


</script>
<template>
  <div class="detail-container">
    <h2>About the Match</h2>
    <form action="" class="d-form">
      <div class="d-container1">
        <div class="d-wrapper">
          <label for="" class="d-label">Competition:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Mobile:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Region:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Team A:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Date:</label>
          <input type="date" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Venue:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Center:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Kick Off:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
      </div>
      <div class="d-container1">
        <div class="d-wrapper">
          <label for="" class="d-label">Assessor Name:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Email:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Team B:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Half time score:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">In favour of:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Final Score:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">In favour of:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
      </div>
    </form>
  </div>
  <div class="btn1-center">
    <div class="form1-btn">
        <button class="btn1 btn1-a" @click="reset"  :class="filling == true ? 'filling' : ''">Reset</button>
        <button class="btn1 btn1-b hide-m" @click="submitted" :class="filling == true ? 'filling' : ''">Save draft</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" @click="nextStore.updateNextState()">Next</button>
      </div>
  </div>
</template>
<style>
@import "@/style/general.css";
</style>

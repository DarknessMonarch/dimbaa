<script setup>
import axios from "axios";
import { useNextStore } from "@/stores/next.js";
import { ref, onMounted } from "vue";

const selected = ref();
const nextStore = useNextStore();
let url = 'https://be-tblp.dimbaa.com/api/'


let token = localStorage.authKey;


  onMounted(async () => {
    const options = {
      method: "GET",
      url: `${url}teammanager/team-players/detail`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        data.value = response.data.stadia;
      })
      .catch(function (error) {
        console.error(error);
      });
  });

</script>
<template>
  <div class="detail-container">
    <form action="" class="d-form">
      <div class="d-container1">
        <div class="d-wrapper">
          <label for="" class="d-label">Team A</label>
          <input
            type="text"
            placeholder="predefined"
            class="d-input"
            disabled
          />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Date</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Time</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Venue</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
      </div>
      <h4>vs</h4>
      <div class="d-container1">
        <div class="d-wrapper">
          <label for="" class="d-label">Team B</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
      </div>
    </form>
  </div>
  <div class="btn1-center">
    <div class="form1-btn">
      <button class="btn1 btn1-a" :class="filling == true ? 'filling' : ''">
        Reset
      </button>
      <button
        class="btn1 btn1-b hide-m"
        @click="submitted"
        :class="filling == true ? 'filling' : ''"
      >
        Save draft
      </button>
      <button
        class="btn1 btn1-b"
        :class="filling == true ? 'filling' : ''"
        @click="nextStore.updateNextState()"
      >
        Next
      </button>
    </div>
  </div>
</template>
<script setup></script>
<style>
@import "@/style/general.css";
</style>

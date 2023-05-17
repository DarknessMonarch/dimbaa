<script setup>
import {ref, watchEffect} from 'vue';
import { useNextStore } from "@/stores/next.js";


const filling = ref(false);
const nextStore = useNextStore();
const competition = ref('');
const date = ref('');
const city = ref('');
const No = ref('');
const TeamA = ref('');
const TeamB = ref('');
const Stadium = ref('');
const RD = ref('');

watchEffect(() => {
  if(competition.value != '' ) {
    filling.value = true;
  } else {
    filling.value = false;
  }
})

</script>
<template>
  <div class="detail-container">
    <form action="" class="d-form">
    <div class="d-container1">
      <div class="d-wrapper">
      <label for="" class="d-label">Competition</label>
      <input type="text" placeholder="predefined" v-model="competition" class="d-input">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">Date</label>
      <input type="date" placeholder="predefined" class="d-input" v-model="date">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">Played in (City)</label>
      <input type="text" placeholder="predefined" class="d-input"   v-model="city">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">M/No</label>
      <input type="text" placeholder="predefined" class="d-input"  v-model="No">
    </div>
    </div>
      <div class="d-container1">
      <div class="d-wrapper">
      <label for="" class="d-label">Team A</label>
      <input type="text" placeholder="predefined" class="d-input" v-model="TeamA">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">Team B</label>
      <input type="text" placeholder="predefined" class="d-input"  v-model="TeamB">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">Stadium</label>
      <input type="text" placeholder="predefined" class="d-input"  v-model="Stadium">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">RD</label>
      <input type="text" placeholder="predefined" class="d-input" v-model="RD">
    </div>
    </div>
    </form>
    <!-- input container  -->
  <div class="btn1-center">
      <div class="form1-btn">
        <button class="btn1 btn1-a" :class="filling == true ? 'filling' : ''">Reset</button>
        <button class="btn1 btn1-b hide-m" @click="submitted" :class="filling == true ? 'filling' : ''">Save draft</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling': ''" @click="nextStore.updateNextState()">Next</button>
      </div>
    </div>
  </div>
</template>
<style>
  @import "@/style/general.css"
</style>
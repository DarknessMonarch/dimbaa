<script setup>
import {ref, watchEffect} from 'vue'
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="detail-container post-con">
    <form action="" class="d-form">
      <div class="d-container1">
        <div class="d-wrapper">
          <label for="" class="d-label">Competition:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Match Date:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">KickOff Time:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Home Team:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">City:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
      </div>
      <div class="d-container1">
        <div class="d-wrapper">
          <label for="" class="d-label">Stadium:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Match Number:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Match Commissioner:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Away Team:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
      </div>
    </form>
  </div>
  <div class="btn1-center">
    <div class="form1-btn">
        <button class="btn1 btn1-a" :class="filling == true ? 'filling' : ''">Reset</button>
        <button class="btn1 btn1-b hide-m" @click="submitted" :class="filling == true ? 'filling' : ''">Save draft</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" @click="nextStore.updateNextState()">Next</button>
      </div>
  </div>
</template>
<style>
@import "@/style/post.css";
</style>

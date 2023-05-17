<script setup>
import {ref, watchEffect} from 'vue'
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="form1-container pre-o-form">
    <!-- form input container  -->
    <h1>ADDITIONAL REMARKS</h1>
    <div class="f12-f  pre-fo">
    <input type="text" class="form1-input  pre-fo" placeholder="Type here">
    </div>

    <h2>Match commissioner can be contacted on site as follows:</h2>
    <div class="detail-container final-re">
    <form action="" class="d-form ">
    <div class="d-container1">
      <div class="d-wrapper">
      <label for="" class="d-label">Email:</label>
      <input type="text" placeholder="predefined" class="d-input">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">Mobile:</label>
      <input type="text" placeholder="predefined" class="d-input">
    </div>
    </div>
      <div class="d-container1">
      <div class="d-wrapper">
      <label for="" class="d-label">Whatsapp:</label>
      <input type="text" placeholder="predefined" class="d-input">
    </div>
    <div class="d-wrapper">
      <label for="" class="d-label">Signature</label>
      <input type="text" placeholder="predefined" class="d-input">
    </div>
    </div>
    </form>
  </div>
  <div class="btn1-center">
      <div class="form1-btn">
        <button class="btn1 btn1-a" :class="filling == true ? 'filling' : ''">Reset</button>
        <button class="btn1 btn1-b hide-m" @click="submitted" :class="filling == true ? 'filling' : ''">Save draft</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" @click="nextStore.updatePreviousState()">Previous</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" >Submit</button>
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/pre.css";
@import "@/style/report.css";
@import "@/style/general.css";
</style>

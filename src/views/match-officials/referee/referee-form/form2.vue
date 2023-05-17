<script setup>
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="form1-container r1">
  <h1>TEAMS' PLAYER OFFICIALS/Orodha ya Viongozi na Wachezaji</h1>
  <!-- input container  -->
    <div class="form1-wrapper">
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Type here">
      <input type="text" class="form1-input short-i" placeholder="Team A">
      <input type="text" class="form1-input short-i" placeholder="Team B">
      </div>
    </div>
      <!-- input container  -->
      <div class="form1-wrapper">
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Type here">
      <input type="text" class="form1-input short-i" placeholder="Team A">
      <input type="text" class="form1-input short-i" placeholder="Team B">
      </div>
    </div>
      <!-- input container  -->
      <div class="form1-wrapper">
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Type here">
      <input type="text" class="form1-input short-i" placeholder="Team A">
      <input type="text" class="form1-input short-i" placeholder="Team B">
      </div>
    </div>
      <!-- input container  -->
      <div class="form1-wrapper">
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Type here">
      <input type="text" class="form1-input short-i" placeholder="Team A">
      <input type="text" class="form1-input short-i" placeholder="Team B">
      </div>
    </div>
      <!-- input container  -->
      <div class="form1-wrapper">
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Type here">
      <input type="text" class="form1-input short-i" placeholder="Team A">
      <input type="text" class="form1-input short-i" placeholder="Team B">
      </div>
    </div>
      <!-- input container  -->
      <div class="form1-wrapper">
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Type here">
      <input type="text" class="form1-input short-i" placeholder="Team A">
      <input type="text" class="form1-input short-i" placeholder="Team B">
      </div>
    </div>
      <!-- input container  -->
      <div class="form1-wrapper">
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Type here">
      <input type="text" class="form1-input short-i" placeholder="Team A">
      <input type="text" class="form1-input short-i" placeholder="Team B">
      </div>
    </div>
      <!-- input container  -->  
<div class="count-down-w f2-i">
  <h3>The CountDown was respected by both teams: 
   <div class="count-i">
    <input
            type="radio"
            id="yes"
            value="yes"
            v-model="yes"
          />
          <label for="ascending">Yes</label>
          <input
            type="radio"
            id="No"
            value="No"
            v-model="No"
          />
          <label for="ascending">No</label>
   </div>
  </h3>
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
</template>
<style>
@import "@/style/form.css";
@import "@/style/report.css";
</style>

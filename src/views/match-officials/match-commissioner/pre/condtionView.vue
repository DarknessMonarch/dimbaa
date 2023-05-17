<script setup>
import {ref, watchEffect} from 'vue'
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="form1-container r9">
    <!-- form input container  -->
    <div class="form9-r pre-r9 ">
    <label for="">Stadium Preparations</label>
    <input type="text" class="form1-input pre-i" placeholder="Type here" >
    </div>
    <div class="form9-r pre-r9">
    <label for="">Pitch Quality</label>
    <input type="text" class="form1-input pre-i" placeholder="Type here" >
    </div>
    <!-- form input container  -->
      <div class="form9-r pre-r9">
    <label for="">Expected Stadium Attendance</label>
    <input type="text" class="form1-input pre-i" placeholder="Type here" >
    </div>
    <div class="form9-r pre-r9">
    <label for="">FoodLights</label>
    <input type="text" class="form1-input pre-i" placeholder="Type here" >
    </div>
    <!-- form input container  -->
      <div class="form9-r pre-r9">
    <label for="">Weather</label>
    <input type="text" class="form1-input pre-i" placeholder="Type here" >
    </div>
    <div class="form9-r pre-r9">
    <label for="">Match Balls</label>
    <input type="text" class="form1-input pre-i" placeholder="Type here" >
    </div>
    <!-- form input container  -->
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
@import "@/style/report.css";
@import "@/style/pre.css";
</style>

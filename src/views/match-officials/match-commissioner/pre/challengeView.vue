<script setup>
import {ref, watchEffect} from 'vue'
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();

</script>
<template>
  <div class="form1-container pre-o-form">
    <!-- input container  -->
    <h1>Describe Three(3) MAIN CHALLENGE(S) for the MATCH (if any)</h1>
    <div class="form1-wrapper f2-w">
      <div class="form1-w ">
        <label for="">One</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input"
            placeholder="Descriptions"
          />
          <input type="text" class="form1-input" placeholder="Possible MEASURES" />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w ">
        <label for="">Two</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input"
            placeholder="Descriptions"
          />
          <input type="text" class="form1-input" placeholder="Possible MEASURES" />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w">
      <div class="form1-w ">
        <label for="">Three</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input"
            placeholder="Descriptions"
          />
          <input type="text" class="form1-input" placeholder="Possible MEASURES" />
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
@import "@/style/pre.css";
</style>

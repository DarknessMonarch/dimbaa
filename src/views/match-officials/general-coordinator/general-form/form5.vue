<script setup>
import {ref, watchEffect} from 'vue';
import { useNextStore } from "@/stores/next.js";
const filling = ref(false);
const nextStore = useNextStore();

</script>
<template>
  <div class="form4-container">
    <!-- input container  -->
    <div class="form4-con">
    <!-- input container  -->
    <div class="form4-wrapper">
   
      <div class="form4-w">
        <label for="">Incident</label>
        <div class="form4-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Type here"
          />
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="form4-container">
    <!-- input container  -->
    <div class="form4-con">
    <!-- input container  -->
    <div class="form4-wrapper">
   
      <div class="form4-w">
        <label for="">Remarks</label>
        <div class="form4-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Type here"
          />
        </div>
      </div>
    </div>
  </div>

  </div>
  <div class="form1-container">
  <!-- input container  -->
    <div class="form1-wrapper f2-w">
    <div class="form1-w f2-i">
    <label for="">Name of the general coordinator</label>
    <div class="form1-i">
      <input type="text" class="form1-input short-i" placeholder="Type Here">
      </div>
    </div>
    </div>
  <!-- input container  -->
    <div class="form1-wrapper f2-w">
    <div class="form1-w f2-i">
    <label for="">Date</label>
    <div class="form1-i ">
      <input type="text" class="form1-input short-i" placeholder="Today Date">
      </div>
    </div>
    </div>
    <div class="form1-btn">
        <button class="btn1 btn1-a">Reset</button>
        <button class="btn1 btn1-b hide-m">Save draft</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" @click="nextStore.updatePreviousState()">Previous</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" >submit</button>
      </div>
  </div>
</template>
<style>
@import "@/style/form4.css";
@import "@/style/form.css";
</style>

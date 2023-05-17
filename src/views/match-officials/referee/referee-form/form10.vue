<script setup>
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="form1-container r1">
  <h1>WAAMUZI WASAIDIZI(Officials' Assistants) </h1>
  <!-- input container  -->
  <div class="r-conquer">
    <div class="form1-wrapper r-f">
    <div class="form1-i r-form-i  ">
    <div class="r-input">
      <label for="">Assistant No. I</label>
      <div class="report-12">
        <label for="">Full Name</label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12">
        <label for="">Referee Reg No </label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12">
        <label for="">District </label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12">
        <label for="">Region </label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12">
        <label for="">Tel Number</label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12">
        <label for="">Email</label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12">
        <label for="">Game No. (TOL)</label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12">
        <label for="">Game No. (Other)</label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12">
        <label for="">Match Payment</label>
        <input type="text" class="form1-input short12">
      </div>
    </div>
    <div class="r-input">
      <label for="">Assistant No. II</label>
      <div class="report-12 ri-hide">
        <label for="">Full Name</label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12 ri-hide">
        <label for="">Referee Reg No </label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12 ri-hide">
        <label for="">District </label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12 ri-hide">
        <label for="">Region </label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12 ri-hide">
        <label for="">Tel Number</label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12 ri-hide">
        <label for="">Email</label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12 ri-hide">
        <label for="">Game No. (TOL)</label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12 ri-hide">
        <label for="">Game No. (Other)</label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12 ri-hide">
        <label for="">Match Payment</label>
        <input type="text" class="form1-input short12">
      </div>
    </div>
    <div class="r-input">
      <label for="">Reserve Referee</label>
      <div class="report-12 ri-hide">
        <label for="">Full Name</label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12 ri-hide">
        <label for="">Referee Reg No </label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12 ri-hide">
        <label for="">District </label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12 ri-hide">
        <label for="">Region </label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12 ri-hide">
        <label for="">Tel Number</label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12 ri-hide">
        <label for="">Email</label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12 ri-hide">
        <label for="">Game No. (TOL)</label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12 ri-hide">
        <label for="">Game No. (Other)</label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12 ri-hide">
        <label for="">Match Payment</label>
        <input type="text" class="form1-input short12">
      </div>
    </div>
      </div>
    </div>
  </div>
  <div class="r-conquer r10-c">
    <div class="form1-i r-form-i">
      <div class="r-input ">
      <div class="report-12">
        <label for="">Commissioner</label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12">
        <label for="">Referee Assessor </label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12">
        <label for="">Center Supervisor</label>
        <input type="text" class="form1-input short12">
      </div>
      </div>
    </div>
    <div class="form1-i r-form-i">
      <div class="r-input ">
      <div class="report-12">
        <label for="">Region </label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12">
        <label for="">Region </label>
        <input type="text" class="form1-input short12">
      </div>
      <div class="report-12">
        <label for="">Region Supervisor</label>
        <input type="text" class="form1-input short12">
      </div>
      </div>
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
</template>
<style>
@import "@/style/form.css";
@import "@/style/report.css";
</style>

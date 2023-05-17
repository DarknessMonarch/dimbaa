<script setup>
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="form1-container r12">
    <!-- form input container  -->
    <h1>Maoni au Taarifa ya Tukio/Matukio</h1>
    <div class="f12-contain">
    <div class="f12-divide">
      <div class="f12-r">
    <label for="">Referee</label>
    <input type="text" class="form1-input i-r12">
    </div>
    <div class="f12-r">
    <label for="">Region</label>
    <input type="text" class="form1-input i-r12">
    </div>
    <!-- form input container  -->
      <div class="f12-r">
    <label for="">Season Match No</label>
    <input type="text" class="form1-input i-r12">
    </div>
    <div class="f12-r">
    <label for="">Ref Reg No</label>
    <input type="text" class="form1-input i-r12">
    </div>
    <!-- form input container  -->
      <div class="f12-r">
    <label for="">Email</label>
    <input type="text" class="form1-input i-r12">
    </div>
    <!-- form input container  -->
    </div>
    <div class="f12-divide">
      <div class="f12-r">
    <label for="">District</label>
    <input type="text" class="form1-input i-r12">
    </div>
    <div class="f12-r">
    <label for="">PL Match No</label>
    <input type="text" class="form1-input i-r12">
    </div>
    <!-- form input container  -->
      <div class="f12-r">
    <label for="">Match Payment</label>
    <input type="text" class="form1-input i-r12">
    </div>
    <div class="f12-r">
    <label for="">Phone No</label>
    <input type="text" class="form1-input i-r12">
    </div>
    <!-- form input container  -->
      <div class="f12-r">
    <label for="">Date</label>
    <input type="text" class="form1-input i-r12">
    </div>
    <!-- form input container  -->  
    </div>
    </div>
    <div class="f12-f f13-f">
    <label for="">Signature</label>
    <input type="text" class="form1-input i-r13">
    </div>
  </div>
    <div class="btn1-center">
    <div class="form1-btn">
        <button class="btn1 btn1-a" :class="filling == true ? 'filling' : ''">Reset</button>
        <button class="btn1 btn1-b hide-m" @click="submitted" :class="filling == true ? 'filling' : ''">Save draft</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" @click="nextStore.updatePreviousState()">Previous</button>
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" >Submit</button>
      </div>
  </div>
</template>
<style>
@import "@/style/report.css";
</style>

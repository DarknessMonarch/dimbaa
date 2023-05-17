<script setup>
import {ref, watchEffect} from 'vue'
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="post-wr2 ">
    <div class="wr2-p">
      <h1>Incidents/Remarks</h1>
    </div>
    <div class="a-container iwp">
      <div class="a-wrap">
        <div class="a-input-c">
          <div class="p-erp">
            <input type="text" class="form1-input apc-i" />
          </div>
        </div>
        <div class="per-a">
        </div>
        <div class="a-input-c erp-a">
            <div class="p-erp">
            <label for="">Date:</label>
            <input type="text" class="form1-input apc-i" />
          </div>
          <div class="p-erp">
            <label for="">Sign:</label>
            <input type="text" class="form1-input apc-i" />
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
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" >Submit</button>
      </div>
  </div>
</template>
<style>
@import "@/style/pos4.css";
@import "@/style/post3.css";
@import "@/style/post5.css";
</style>

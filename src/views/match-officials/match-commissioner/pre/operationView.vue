<script setup>
import {ref, watchEffect} from 'vue'
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="form1-container pre-o-form">
    <!-- input container  -->
    <div class="form1-wrapper f2-w pre-form1-w">
      <div class="form1-w ">
        <label for="">General Coordinator</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="predetermined"
          />
          <input type="text" class="form1-input short-i" placeholder="Email" />
          <input type="text" class="form1-input short-i" placeholder="Mobile" />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w pre-form1-w">
      <div class="form1-w ">
        <label for="">Security Officer</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Full name"
          />
          <input type="text" class="form1-input short-i" placeholder="Email" />
          <input type="text" class="form1-input short-i" placeholder="Mobile" />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w pre-form1-w">
      <div class="form1-w ">
        <label for="">Media Officer</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Full name"
          />
          <input type="text" class="form1-input short-i" placeholder="Email" />
          <input type="text" class="form1-input short-i" placeholder="Mobile" />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w pre-form1-w">
      <div class="form1-w ">
        <label for="">Match Doctor</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Full name"
          />
          <input type="text" class="form1-input short-i" placeholder="Email" />
          <input type="text" class="form1-input short-i" placeholder="Mobile" />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w pre-form1-w">
      <div class="form1-w ">
        <label for="">Referee Assessor</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="predetermined"
          />
          <input type="text" class="form1-input short-i" placeholder="Email" />
          <input type="text" class="form1-input short-i" placeholder="Mobile" />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w pre-form1-w">
      <div class="form1-w ">
        <label for="">Technical Anaylst</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Full name"
          />
          <input type="text" class="form1-input short-i" placeholder="Email" />
          <input type="text" class="form1-input short-i" placeholder="Mobile" />
        </div>
      </div>
    </div>
    <!-- input container  -->
    <div class="form1-wrapper f2-w pre-form1-w">
      <div class="form1-w ">
        <label for="">Center Supervisor</label>
        <div class="form1-i">
          <input
            type="text"
            class="form1-input short-i"
            placeholder="Full name"
          />
          <input type="text" class="form1-input short-i" placeholder="Email" />
          <input type="text" class="form1-input short-i" placeholder="Mobile" />
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

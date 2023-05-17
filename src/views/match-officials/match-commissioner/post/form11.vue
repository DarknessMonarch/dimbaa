<script setup>
import {ref, watchEffect} from 'vue'
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="match-fr">
    <h1>Tiba</h1>
    <div class="match-w1">
      <div class="w1-container">
        <label for=""> <span>(check box if the following were present during the match)</span></label>
        <h3 class="w1-input">Huduma ya kwanza</h3>
        <h3 class="w1-input">Chumba cha tiba</h3>
        <h3 class="w1-input">Hospitali ya rufaa</h3>
        <h3 class="w1-input">Daktari wa mchezo</h3>
        <h3 class="w1-input">Gari la wagonjwa</h3>
      </div>
      <div class="w1-container">
        <label for=""></label>
        <div class="w1-input check-w1">
            <input type="checkbox" class="w1-check" />
        </div>
        <div class="w1-input check-w1">
            <input type="checkbox" class="w1-check" />
        </div>
        <div class="w1-input check-w1">
            <input type="checkbox" class="w1-check" />
        </div>
        <div class="w1-input check-w1">
            <input type="checkbox" class="w1-check" />
        </div>
        <div class="w1-input check-w1">
            <input type="checkbox" class="w1-check" />
        </div>
      </div>
      <div class="w1-container">
        <label for="">Maelezo mafupi<span> kuhusu masuala ya tiba</span></label>
        <input type="text" class="w1-input" />
        <input type="text" class="w1-input" />
        <input type="text" class="w1-input" />
        <input type="text" class="w1-input" />
        <input type="text" class="w1-input" />
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
@import "@/style/post2.css";
</style>

<script setup>
import {ref, watchEffect} from 'vue'
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="match-fr">
    <h1>Ulinzi na usalama</h1>
    <div class="match-w1">
      <div class="w1-container">
        <label for=""> <span>(check box if the following were present during the match)</span></label>
        <h3 class="w1-input">Polisi</h3>
        <h3 class="w1-input">Ulinzi maalum(stewards)</h3>
        <h3 class="w1-input">Ulinzi mwingineo</h3>
        <h3 class="w1-input">Zimamoto(fire & rescue)</h3>
        <h3 class="w1-input">Gari la wagonjwa</h3>
        <h3 class="w1-input">Milango ya kuingilia</h3>
        <h3 class="w1-input">Mageti ya kutokea</h3>
        <h3 class="w1-input">Magari</h3>
      </div>
      <div class="w1-container w-dadi">
        <label for="">Idadi</label>
        <input type="text" class="w1-input" />
        <input type="text" class="w1-input" />
        <input type="text" class="w1-input" />
        <input type="text" class="w1-input" />
        <input type="text" class="w1-input" />
        <input type="text" class="w1-input" />
        <input type="text" class="w1-input" />
        <input type="text" class="w1-input" />
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
        <label for="">Maelezo mafupi<span> ya hali ya uendeshaji mchezo (General Organisation)</span></label>
        <input type="text" class="w1-input" />
        <input type="text" class="w1-input" />
        <input type="text" class="w1-input" />
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

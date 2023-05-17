<script setup>
import {ref, watchEffect} from 'vue'
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="match-fr">
    <h1>Habari na masoko</h1>
    <div class="match-w1">
      <div class="w1-container">
        <label for=""> <span>(check box if the following were present during the match)</span></label>
        <h3 class="w1-input">AfisaHabari</h3>
        <h3 class="w1-input">AfisaMasoko</h3>
        <h3 class="w1-input">Mabongo ya mdhamini</h3>
        <h3 class="w1-input">Mabongo ya TFF/NBC</h3>
        <h3 class="w1-input">Huduma kwa wanahabari</h3>
        <h3 class="w1-input">Jukwaa la wanahabar</h3>
        <h3 class="w1-input">Mkutano na wanahabari</h3>
        <h3 class="w1-input">Orodha za wachezaji</h3>
        <h3 class="w1-input">Vitambulisho(Accreditations)</h3>
        <h3 class="w1-input">Alama Maelekezo (SignAge)</h3>
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
        <div class="w1-input check-w1">
            <input type="checkbox" class="w1-check" />
        </div>
        <div class="w1-input check-w1">
            <input type="checkbox" class="w1-check" />
        </div>
      </div>
      <div class="w1-container">
        <label for="">Maelezo mafupi<span> kuhusu Habari na masoko</span></label>
        <input type="text" class="w1-input" />
        <input type="text" class="w1-input" />
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
  <div class="btn1-center ">
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

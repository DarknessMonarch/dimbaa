<script setup>
import {ref, watchEffect} from 'vue'
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="match-fr">
    <h1>Uwanja wa mchezo</h1>
    <div class="match-w1">
      <div class="w1-container">
        <label for=""> <span>(check box if the following were present during the match)</span></label>
        <h3 class="w1-input">Hali ya kiwanjani (pitch)</h3>
        <h3 class="w1-input">Magoli na Nyavu</h3>
        <h3 class="w1-input">Bendera za Kona</h3>
        <h3 class="w1-input">Uzio wa Ndani</h3>
        <h3 class="w1-input">Mabenchi ya Ufundi</h3>
        <h3 class="w1-input">Ubao wa Magoli</h3>
        <h3 class="w1-input">Substitution Board</h3>
        <h3 class="w1-input">Mipira (ya Kituo)</h3>
        <h3 class="w1-input">TAA (Floodlights)</h3>
        <h3 class="w1-input">Bendera (KuingiziaTimu)</h3>
        <h3 class="w1-input">Vyumba vya Kuvalia</h3>
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
        <div class="w1-input check-w1">
            <input type="checkbox" class="w1-check" />
        </div>
      </div>
      <div class="w1-container">
        <label for="">Maelezo mafupi <span>ya hali na vifaa uwanjani</span></label>
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

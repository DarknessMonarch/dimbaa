<script setup>
import {ref, watchEffect} from 'vue'
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="match-rap">
    <h1>
      Elezea(kwakifupi)Tabia za wachezaji na washabiki (Attitude of Player &
      Spectators)
    </h1>
    <div class="rap-con">
      <div class="rap-c">
        <div class="ra-d">
          <h1 for="">Team A</h1>
          <div class="r-ad">
            <label for="">Tabia za wachezaji</label>
            <input type="text" class="input-match ra" />
            <input type="text" class="input-match ra" />
          </div>
        </div>
        <div class="ra-d">
          <h1 for="">Team B</h1>
          <div class="r-ad">
            <label for="">Tabia za washabiki</label>
            <input type="text" class="input-match ra" />
            <input type="text" class="input-match ra" />
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
<script></script>
<style></style>

<script setup>
import {ref, watchEffect} from 'vue'
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="post-wr2">
    <div class="wr2-p">
      <h1>Uchezaji wa kiungana (FairPlay)</h1>
    </div>
    <div class="a-container iwp">
      <div class="a-wrap">
        <p>
          AINISHA na ELEZEA kwa kifupi kuhusu Kitendo BORA Zaidi cha
          Uchezaji wa Kiungwana (FAIRPLAY) kilicho onyeshana muhusika au
          wahusika kwenye mchezo. Ndani ya kiwanja (Pitch) au
          nje ya kiwanja katika shughuli za mchezo husika
        </p>
        <div class="a-input-c">
          <div class="p-erp">
            <label for="">Blx: </label>
            <input type="text" class="form1-input apc-i" />
          </div>
        </div>
        <div class="a-input-c erp-a">
          <div class="p-erp">
            <label for="">Man of the match:</label>
            <select class="form1-input apc-er">
            <option value="">Select Team</option>
            <option value="">Chelsea</option>
            </select>
          </div>
          <div class="p-erp">
            <label for="">Player name:</label>
            <select class="form1-input apc-er">
            <option value="">Select Player</option>
            <option value="">Man u</option>
            </select>
          </div>
        </div>
        <div class="per-a">
            <h1>Uchambuzi wa mapato</h1>
        </div>
        <div class="a-input-c erp-a">
        <div class="ed-ps">
            <div class="p-erp">
            <label for="">Total revenue collected:</label>
            <input type="text" class="form1-input apc-i" />
          </div>
          <div class="p-erp">
            <label for="">Total revenue collected:</label>
            <input type="text" class="form1-input apc-i" />
          </div>
        </div>
          <div class="p-erp">
            <label for="">Ratio:</label>
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
        <button class="btn1 btn1-b" :class="filling == true ? 'filling' : ''" @click="nextStore.updateNextState()">Next</button>
      </div>
  </div>
</template>
<style>
@import "@/style/pos4.css";
@import "@/style/post3.css";
@import "@/style/post5.css";
</style>

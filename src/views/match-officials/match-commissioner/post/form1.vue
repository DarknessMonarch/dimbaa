<script setup>
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="detail-container post-con">
    <h2>NBC PREMIER LEAGUE 2023/24</h2>
    <form action="" class="d-form">
      <div class="d-container1">
        <div class="d-wrapper">
          <label for="" class="d-label">Tarehe:</label>
          <input type="date" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Mchezo Na:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Kituo:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Uwanja:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Mkoa:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Baruapepe:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
      </div>
      <div class="d-container1">
        <div class="d-wrapper">
          <label for="" class="d-label">Muda:</label>
          <input type="time" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Timu A:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Timu B:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">MC (Name):</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Simu:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
        <div class="d-wrapper">
          <label for="" class="d-label">Whatsapp:</label>
          <input type="text" placeholder="predefined" class="d-input" />
        </div>
      </div>
    </form>
  </div>
  <div class="Post-wrapp">
    <div class="post-1">
      <h1>Matokeo (Results Halftime) Mapumziko</h1>
      <div class="post-container-m">
        <span class="p-m">A</span>
        <span class="p-mc"></span>
        <span class="p-mc"></span>
        <span class="p-m">B</span>
      </div>
    </div>
    <div class="post-1">
      <h1>Matokeo ya mwisho</h1>
      <div class="post-container-m">
        <span class="p-m">A</span>
        <span class="p-mc"></span>
        <span class="p-mc"></span>
        <span class="p-m">B</span>
      </div>
    </div>
    <div class="post-1">
      <h1>Matokeo ya penati</h1>
      <div class="post-container-m">
        <span class="p-m">A</span>
        <span class="p-mc"></span>
        <span class="p-mc"></span>
        <span class="p-m">B</span>
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
@import "@/style/post.css";
</style>

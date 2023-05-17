<script setup>
import { useNextStore } from "@/stores/next.js";
const nextStore = useNextStore();
</script>
<template>
  <div class="match-fr">
    <h1>Mabadiliko ya wachezaji</h1>
    <div class="match-wrapper">
      <div class="match-wp1">
        <h2>Team A</h2>
        <div class="match-sd">
          <div class="match-in">
            <label for="">Je#</label>
            <input type="text" class="input-match  m-short">
            <input type="text" class="input-match  m-short">
            <input type="text" class="input-match  m-short">
            <input type="text" class="input-match  m-short">
          </div>
          <div class="match-in">
            <label for="">Full name</label>
            <input type="text" class="input-match">
            <input type="text" class="input-match">
            <input type="text" class="input-match">
            <input type="text" class="input-match">
          </div>
          <div class="match-in">
            <label for="">Mnt</label>
            <input type="text" class="input-match  m-short">
            <input type="text" class="input-match  m-short">
            <input type="text" class="input-match  m-short">
            <input type="text" class="input-match  m-short">
          </div>
        </div>
      </div>
      <div class="match-wp1">
        <h2>Team B</h2>
        <div class="match-sd">
          <div class="match-in">
            <label for="">Je#</label>
            <input type="text" class="input-match  m-short">
            <input type="text" class="input-match  m-short">
            <input type="text" class="input-match  m-short">
            <input type="text" class="input-match  m-short">
          </div>
          <div class="match-in">
            <label for="">Full name</label>
            <input type="text" class="input-match">
            <input type="text" class="input-match">
            <input type="text" class="input-match">
            <input type="text" class="input-match">
          </div>
          <div class="match-in">
            <label for="">Mnt</label>
            <input type="text" class="input-match  m-short">
            <input type="text" class="input-match  m-short">
            <input type="text" class="input-match  m-short">
            <input type="text" class="input-match  m-short">
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
@import "@/style/post.css";
</style>

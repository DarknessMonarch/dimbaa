<script setup>
import {ref, watchEffect} from 'vue'
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="form1-container r1">
  <h1>Maonyo/Cautions </h1>
  <h2>onyesha endapo goli limefungwa kwa penalti au adhabu ndogo au kawaida au amejifunga </h2>
  <!-- input container  -->
  <div class="r-conquer">
    <div class="form1-wrapper r-f">
    <div class="form1-i r-form-i">
      <div class="r-input">
      <label for="">Team</label>
      <select v-model="selected" class="form1-input selected-psf">
              <option>Team1</option>
              <option>Team2</option>
              <option>Team3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Team1</option>
              <option>Team2</option>
              <option>Team3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Team1</option>
              <option>Team2</option>
              <option>Team3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Team1</option>
              <option>Team2</option>
              <option>Team3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Team1</option>
              <option>Team2</option>
              <option>Team3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Team1</option>
              <option>Team2</option>
              <option>Team3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Team1</option>
              <option>Team2</option>
              <option>Team3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Team1</option>
              <option>Team2</option>
              <option>Team3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Team1</option>
              <option>Team2</option>
              <option>Team3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Team1</option>
              <option>Team2</option>
              <option>Team3</option>
            </select>
    </div>
    <div class="r-input">
      <label for="">J/No</label>
      <select v-model="selected" class="form1-input selected-psf">
              <option>No1</option>
              <option>No2</option>
              <option>No3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>No1</option>
              <option>No2</option>
              <option>No3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>No1</option>
              <option>No2</option>
              <option>No3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>No1</option>
              <option>No2</option>
              <option>No3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>No1</option>
              <option>No2</option>
              <option>No3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>No1</option>
              <option>No2</option>
              <option>No3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>No1</option>
              <option>No2</option>
              <option>No3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>No1</option>
              <option>No2</option>
              <option>No3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>No1</option>
              <option>No2</option>
              <option>No3</option>
            </select>    
              <select v-model="selected" class="form1-input selected-psf">
              <option>No1</option>
              <option>No2</option>
              <option>No3</option>
            </select>
    </div>
    <div class="r-input">
      <label for="">Mchezaji/Player</label>
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
    </div>
    <div class="r-input">
      <label for="">Dakika</label>
      <select v-model="selected" class="form1-input selected-psf">
              <option>Mnt1</option>
              <option>Mnt2</option>
              <option>Mnt3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Mnt1</option>
              <option>Mnt2</option>
              <option>Mnt3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Mnt1</option>
              <option>Mnt2</option>
              <option>Mnt3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Mnt1</option>
              <option>Mnt2</option>
              <option>Mnt3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Mnt1</option>
              <option>Mnt2</option>
              <option>Mnt3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Mnt1</option>
              <option>Mnt2</option>
              <option>Mnt3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Mnt1</option>
              <option>Mnt2</option>
              <option>Mnt3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Mnt1</option>
              <option>Mnt2</option>
              <option>Mnt3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Mnt1</option>
              <option>Mnt2</option>
              <option>Mnt3</option>
            </select>
            <select v-model="selected" class="form1-input selected-psf">
              <option>Mnt1</option>
              <option>Mnt2</option>
              <option>Mnt3</option>
            </select>

    </div>
    <div class="r-input">
      <label for="">Sababu/Reasons</label>
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
      <input type="text" class="form1-input">
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
@import "@/style/form.css";
@import "@/style/report.css";
</style>

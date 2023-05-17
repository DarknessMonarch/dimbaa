<script setup>
import {ref, watchEffect} from 'vue'
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="match-fr">
    <div class="match-wrapper">
      <div class="match-wp1 df-r">
        <h2>Team A</h2>
        <div class="match-sd">
          <div class="match-in">
            <label for="">Je#</label>
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
          </div>
          <div class="match-in">
            <label for="">Full name</label>
            <input type="text" class="input-match" />
            <input type="text" class="input-match" />
            <input type="text" class="input-match" />
            <input type="text" class="input-match" />
            <input type="text" class="input-match" />
            <input type="text" class="input-match" />
            <input type="text" class="input-match" />
          </div>
          <div class="match-in">
            <label for="">S</label>
            <select type="text" class="input-match m-short">
              <option value="">option1</option>
              <option value="">option1</option>
            </select>
            <select type="text" class="input-match m-short">
              <option value="">option1</option>
              <option value="">option1</option>
            </select>
            <select type="text" class="input-match m-short">
              <option value="">option1</option>
              <option value="">option1</option>
            </select>
            <select type="text" class="input-match m-short">
              <option value="">option1</option>
              <option value="">option1</option>
            </select>
            <select type="text" class="input-match m-short">
              <option value="">option1</option>
              <option value="">option1</option>
            </select>
            <select type="text" class="input-match m-short">
              <option value="">option1</option>
              <option value="">option1</option>
            </select>
            <select type="text" class="input-match m-short">
              <option value="">option1</option>
              <option value="">option1</option>
            </select>
          </div>
          <div class="match-in">
            <label for="">Mnt</label>
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
          </div>
        </div>
      </div>
      <div class="match-wp1 df-r">
        <h2>Team B</h2>
        <div class="match-sd">
          <div class="match-in">
            <label for="">Je#</label>
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
          </div>
          <div class="match-in">
            <label for="">Full name</label>
            <input type="text" class="input-match" />
            <input type="text" class="input-match" />
            <input type="text" class="input-match" />
            <input type="text" class="input-match" />
            <input type="text" class="input-match" />
            <input type="text" class="input-match" />
            <input type="text" class="input-match" />
          </div>
          <div class="match-in">
            <label for="">S</label>
            <select type="text" class="input-match m-short">
              <option value="">option1</option>
              <option value="">option1</option>
            </select>
            <select type="text" class="input-match m-short">
              <option value="">option1</option>
              <option value="">option1</option>
            </select>
            <select type="text" class="input-match m-short">
              <option value="">option1</option>
              <option value="">option1</option>
            </select>
            <select type="text" class="input-match m-short">
              <option value="">option1</option>
              <option value="">option1</option>
            </select>
            <select type="text" class="input-match m-short">
              <option value="">option1</option>
              <option value="">option1</option>
            </select>
            <select type="text" class="input-match m-short">
              <option value="">option1</option>
              <option value="">option1</option>
            </select>
            <select type="text" class="input-match m-short">
              <option value="">option1</option>
              <option value="">option1</option>
            </select>
          </div>
          <div class="match-in">
            <label for="">Mnt</label>
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
            <input type="text" class="input-match m-short" />
          </div>
        </div>
      </div>
      <div class="match-info-we">
        <h1>
          Jaza herufi inayowakilisha sababu za kadiya njano au nyekundu
          iliyotolewana mwamuzi kwenyekolamu yenye herufi
        </h1>
        <span>A: unsporting behavior</span>
        <span>B: dissent by word or action</span>
        <span>C: persistent Infringement of the laws of the game</span>
        <span>D: delaying the restart of play</span>
        <span
          >E: failure to respect the required distance when play is restarted
          with a corner kick, freekick or throw in</span
        >
        <span
          >F: entering or re-entering the field of play without the referee's
          permission</span
        >
        <span
          >G: deliberately leaving the field of play without the referee's
          permission</span
        >
        <span>H: serious foul play</span>
        <span>I: violent conduct</span>
        <span>J: spitting at an opponent or any other person</span>
        <span
          >K: denying the opposing team a goal or an obvious goal scoring
          opportunity by deliberately handling the ball</span
        >
        <span
          >L: denying an obvious goal scoring opportunity to an opponent moving
          towards the player's goal by an offence punishable by a free kick or a
          penalty kick</span
        >
        <span
          >M: using offensive, insulting or abusive language and/or
          gestures</span
        >
        <span>N: receiving two cautions during the same match</span>
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
<style>
@import "@/style/post.css";
</style>

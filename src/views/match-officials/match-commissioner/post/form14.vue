<script setup>
import work from "./form14/work.vue";
import match from "./form14/match.vue";
import accuracy from "./form14/accuracy.vue";
import position from "./form14/position.vue";
import { usePostStore } from "@/stores/post";
import { useDrawerStore } from "@/stores/drawer";
import personality from "./form14/personality.vue";
import PopUP from "@/components/drawer/popup.vue";
import Info from "@/components/icons/InfoIcon.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import { shallowRef, ref } from "vue";
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
const drawerStore = useDrawerStore();
const postStore = usePostStore();
const check = ref(false);


const openPopI = () => {
  check.value = true;
  drawerStore.togglePop();
};


const postPage = shallowRef(personality);
</script>
<template>
  <div class="post-wr2">
    <div class="wr2-p">
      <h1>1st Assistant Referee Perfomance</h1>
      <CircleDraw class="circle-rds" @click="openPopI">
        <Info class="icon icon-info-rds" />
      </CircleDraw>
    </div>
    <div class="ra-qr">
      <div class="ra1">
        <div class="Ra-container">
          <button
            class="ra-db"
            @click="postPage = personality"
            :class="[postPage == personality ? 'rad-on' : '']"
          >
            Personality
            <div>{{ postStore.personality }} marks</div>
          </button>
          <button
            class="ra-db"
            @click="postPage = position"
            :class="[postPage == position ? 'rad-on' : '']"
          >
            Position and Movement
            <div>{{ postStore.position }} marks</div>
          </button>
          <button
            class="ra-db"
            @click="postPage = accuracy"
            :class="[postPage == accuracy ? 'rad-on' : '']"
          >
            Accuracy of signals
            <div>{{ postStore.accuracy }} marks</div>
          </button>
          <button
            class="ra-db"
            @click="postPage = match"
            :class="[postPage == match ? 'rad-on' : '']"
          >
            Match Control
            <div>{{ postStore.match }} marks</div>
          </button>
          <button
            class="ra-db"
            @click="postPage = work"
            :class="[postPage == work ? 'rad-on' : '']"
          >
            Team Work
            <div>{{ postStore.work }} marks</div>
          </button>
          <div class="checkmate">
            Total Marks
            <div>{{ postStore.total }} marks</div>
          </div>
        </div>
      </div>
      <div class="ra-dn wpe">
          <div class="inner-rp-qwe">
            <component :is="postPage" />
          </div>
        </div>
    </div>
  </div>
  <PopUP v-if="check == true">
    <div class="pos1 pop-pos">
      <h1>Place value between 0-10 for each question</h1>
    </div>
  </PopUP>
  <div class="btn1-center m-rp">
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
</style>

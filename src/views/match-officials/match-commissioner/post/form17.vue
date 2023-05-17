<script setup>
import { useNextStore } from "@/stores/next.js";
import { useDrawerStore } from "@/stores/drawer";
import PopUP from "@/components/drawer/popup.vue";
import Info from "@/components/icons/InfoIcon.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import { shallowRef, ref } from "vue";

const drawerStore = useDrawerStore();
const nextStore = useNextStore();
const check = ref(false);

const openPopI = () => {
  check.value = true;
  drawerStore.togglePop();
};
</script>
<template>
  <div class="post-wr2">
    <div class="wr2-p">
      <h1>Kiwango cha tathimini ya ugumu wa mchezo</h1>
      <Info class="icon icon-info-rds" />
      <CircleDraw class="circle-rds" @click="openPopI">
        <Info class="icon icon-info-rds" />
      </CircleDraw>
    </div>
    <div class="a-container iwp">
      <div class="a-wrap">
        <p>
          Kiwango cha ugumu wa mchezo kiwianena alama anazoshinda mwamuzi.
          tathmi niifanywe kwa kila mwamuzi binafsi katika mchezo na si kwa
          umoja wao. Level of difficulty must be intergrated into the mark and
          should be assessed for each Match official Separately.
        </p>
      </div>
      <div class="match-fr">
        <div class="match-w1">
          <div class="w1-container">
            <h3 class="w1-input qo">3</h3>
            <h3 class="w1-input qo" >2</h3>
            <h3 class="w1-input qo">1</h3>
          </div>
          <div class="w1-container">
            <input
              type="text"
              class="w1-input qo-q"
              placeholder="Mchezo mgumu sana wenye matukio mengi magumu kwa mwamuzi (Very difficult Match with many difficulty situations for the official)"
            />
            <input
              type="text"
              class="w1-input qo-q"
              placeholder="Mchezo mgumu ukiwa na sehemu ya matukio magumu kufanya maamuzi (Difficult match with some difficult decisions for the official)"
            />
            <input
              type="text"
              class="w1-input qo-q"
              placeholder="Mchezo wa kawaida kwa mwamuzi; changa moto cha chezaki mchezo (Normal match for the official; few challenging situations)"
            />
          </div>
          <div class="w1-container">
            <input type="text" class="w1-input qo" />
            <input type="text" class="w1-input qo" />
            <input type="text" class="w1-input qo" />
          </div>
        </div>
        <div class="w-ed">
          <div class="w-er">
              <label for="user-role">Mchezo wa kawaida(normal game)</label>
              <input
                type="radio"
                id="one"
                value="game"
                v-model="game"
              />
          </div>
          <div class="w-er">
              <label for="user-role">Mchezo mgumu(difficult game)</label>
              <input
                type="radio"
                id="one"
                select
                value="difficult"
                v-model="difficult"
              />
          </div>
          <div class="w-er">
              <label for="user-role">Mchezo mgumu sana(very difficult game)</label>
              <input
                type="radio"
                id="one"
                value="veryD"
                v-model="veryD"
              />
          </div>
          </div> 
      </div>
    </div>
  </div>
  <PopUP v-if="check == true">
    <div class="pos1 pop-pos">
      <h1>Place value between 0-10 for each question</h1>
    </div>
  </PopUP>
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
@import "@/style/post5.css";
</style>

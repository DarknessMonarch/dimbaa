<script setup>
import form1a from "./form13/1a.vue";
import form1b from "./form13/1b.vue";
import form2a from "./form13/2a.vue";
import form2b from "./form13/2b.vue";
import form2c from "./form13/2c.vue";
import { useDrawerStore } from "@/stores/drawer";
import PopUP from "@/components/drawer/popup.vue";
import Info from "@/components/icons/InfoIcon.vue";
import CircleDraw from "@/components/drawer/CircleDrawer.vue";
import { shallowRef, ref } from "vue";
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
const drawerStore = useDrawerStore();
const check = ref(false);

const openPopI = () => {
  check.value = true;
  drawerStore.togglePop();
};

const postPage = shallowRef(form1a);
</script>
<template>
  <div class="post-wr2">
    <div class="wr2-p">
      <h1>Tathimini kwa mwamuzi (Evaluation of the referee)</h1>
      <CircleDraw class=" circle-rds" @click="openPopI">
        <Info class="icon icon-info-rds" />
      </CircleDraw>
    </div>
    <div class="post-qr">
      <div class="pos1 pos-dissapper">
        <h1>
          Mwamuzi anatakiwa kupata jumla ya ALAMA 10 kutoka vipengele
          vinavyofanyiwa tathimini. Kamishinaatatoa ALAMA kuzingatia lengo
          lililowekwa katika kila kipengele. Jumla ya ALAMA itagawanywa kwa 10
          kupata ALAMA Alizoshinda
        </h1>
        <p><span>9.0 - 10 </span> NZURI SANA SANA/EXCELENT</p>
        <p><span>8.5 - 8.9 </span> NZURI SANA (very good)</p>
        <p>
          <span>8.2</span>Anafaa kuendelezwa (satisfactory with small areas of
          improvement)
        </p>
        <p>
          <span>8.0 - 8.1 </span>Anaridhisha, afikiriwe kuendelezwa
          (satisfactory with important areas of improvement)
        </p>
        <p>
          <span>7.9</span>Amefanya kosa muhimu kwenye mchezo alistahili kupewa
          8.2
        </p>
        <p>
          <span>7.8</span>Amefanya kosa muhimu kwenye mchezo alistahili kupata
          8.0 - 8.1
        </p>
        <p>
          <span>7.5 - 7.7</span>Chini ya matarajio mambo ya msingi anatakiwa
          kurebishwa(below expectations, significant point for improvement)
        </p>
        <p>
          <span>7.0 - 7.4</span>Kiwango cha chini, amefanya kosa moja la wazina
          la msingi (disappointing below expectations with one clear important
          mistake)
        </p>
        <p><span>6.0 - 6.9</span>Kiwango kisicho kubalika (UNACCEPTABLE)</p>
      </div>
      <div class="pos1 pos-dn">
        <div class="data-nav pos-naa">
          <button
            class="data-n-b"
            @click="postPage = form1a"
            :class="[postPage == form1a ? 'datapage' : '']"
          >
            1A
          </button>
          <button
            class="data-n-b"
            @click="postPage = form1b"
            :class="[postPage == form1b ? 'datapage' : '']"
          >
            1B
          </button>
          <button
            class="data-n-b"
            @click="postPage = form2a"
            :class="[postPage == form2a ? 'datapage' : '']"
          >
            2A
          </button>
          <button
            class="data-n-b"
            @click="postPage = form2b"
            :class="[postPage == form2b ? 'datapage' : '']"
          >
            2B
          </button>
          <button
            class="data-n-b"
            @click="postPage = form2c"
            :class="[postPage == form2c ? 'datapage' : '']"
          >
            2C
          </button>
          <div class="w-in">
            <label for="">Total Marks</label>
            <input type="text" class="form1-input apc-s" />
          </div>
        </div>
        <div class="inner-data-content ">
          <component :is="postPage" />
        </div>
      </div>
    </div>
  </div>
  <PopUP v-if="check == true">
    <div class="pos1 pop-pos">
      <h1>
        Mwamuzi anatakiwa kupata jumla ya ALAMA 10 kutoka vipengele
        vinavyofanyiwa tathimini. Kamishinaatatoa ALAMA kuzingatia lengo
        lililowekwa katika kila kipengele. Jumla ya ALAMA itagawanywa kwa 10
        kupata ALAMA Alizoshinda
      </h1>
      <p><span>9.0 - 10 </span> NZURI SANA SANA/EXCELENT</p>
      <p><span>8.5 - 8.9 </span> NZURI SANA (very good)</p>
      <p>
        <span>8.2</span>Anafaa kuendelezwa (satisfactory with small areas of
        improvement)
      </p>
      <p>
        <span>8.0 - 8.1 </span>Anaridhisha, afikiriwe kuendelezwa (satisfactory
        with important areas of improvement)
      </p>
      <p>
        <span>7.9</span>Amefanya kosa muhimu kwenye mchezo alistahili kupewa 8.2
      </p>
      <p>
        <span>7.8</span>Amefanya kosa muhimu kwenye mchezo alistahili kupata 8.0
        - 8.1
      </p>
      <p>
        <span>7.5 - 7.7</span>Chini ya matarajio mambo ya msingi anatakiwa
        kurebishwa(below expectations, significant point for improvement)
      </p>
      <p>
        <span>7.0 - 7.4</span>Kiwango cha chini, amefanya kosa moja la wazina la
        msingi (disappointing below expectations with one clear important
        mistake)
      </p>
      <p><span>6.0 - 6.9</span>Kiwango kisicho kubalika (UNACCEPTABLE)</p>
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
@import "@/style/post3.css";
</style>

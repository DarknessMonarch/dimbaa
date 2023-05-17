<script setup>
import OutIcon from "@/components/icons/OutIcon.vue";
import { useNextStore } from "@/stores/next.js";

const nextStore = useNextStore();
</script>
<template>
  <div class="form1-container r1">
    <h1>SUBSTITUTIONS</h1>
    <div class="r-conquer r-8">
      <div class="r-divider">
        <h2>Team A</h2>

        <!-- form input container  -->
        <div class="form1-wrapper r-f">
          <div class="form1-i">
            <div class="form8-r">
              <label for="">J/No</label>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
            </div>
            <div class="form8-r">
              <label for="">Name</label>
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
            </div>
            <div class="form8-r">
              <label for="">Minutes</label>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
            </div>
            <div class="form8-r">
              <label for="">.</label>
              <div class="pl-fd8">
                <OutIcon class="icon icon-out"/>
              <input type="text" class="form1-input ">
              </div>
              <div class="pl-fd8">
                <OutIcon class="icon icon-in"/>
              <input type="text" class="form1-input ">
              </div>
              <div class="pl-fd8">
                <OutIcon class="icon icon-out"/>
              <input type="text" class="form1-input ">
              </div>
              <div class="pl-fd8">
                <OutIcon class="icon icon-in"/>
              <input type="text" class="form1-input ">
              </div>
              <div class="pl-fd8">
                <OutIcon class="icon icon-out"/>
              <input type="text" class="form1-input ">
              </div>
              <div class="pl-fd8">
                <OutIcon class="icon icon-in"/>
              <input type="text" class="form1-input ">
              </div>
              <div class="pl-fd8">
                <OutIcon class="icon icon-out"/>
              <input type="text" class="form1-input ">
              </div>
              <div class="pl-fd8">
                <OutIcon class="icon icon-in"/>
              <input type="text" class="form1-input ">
              </div>
                  <div class="pl-fd8">
                <OutIcon class="icon icon-out"/>
              <input type="text" class="form1-input ">
              </div>
              <div class="pl-fd8">
                <OutIcon class="icon icon-in"/>
              <input type="text" class="form1-input ">
              </div>
            </div>
          </div>
        </div>
        <!-- form input container  -->

      </div>
      <div class="r-divider">
        <h2>Team B</h2>


        <!-- form input container  -->
        <div class="form1-wrapper r-f">
          <div class="form1-i">
            <div class="form8-r">
              <label for="">J/No</label>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>No1</option>
                <option>No2</option>
                <option>No3</option>
              </select>
            </div>
            <div class="form8-r">
              <label for="">Name</label>
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
              <input type="text" class="form1-input short-i">
            </div>
            <div class="form8-r">
              <label for="">Minutes</label>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
              <select v-model="selected" class="form1-input  short-i">
                <option>Mnt1</option>
                <option>Mnt2</option>
                <option>Mnt3</option>
              </select>
            </div>
            <div class="form8-r">
              <label for="">.</label>
              <div class="pl-fd8">
                <OutIcon class="icon icon-out"/>
              <input type="text" class="form1-input ">
              </div>
              <div class="pl-fd8">
                <OutIcon class="icon icon-in"/>
              <input type="text" class="form1-input ">
              </div>
              <div class="pl-fd8">
                <OutIcon class="icon icon-out"/>
              <input type="text" class="form1-input ">
              </div>
              <div class="pl-fd8">
                <OutIcon class="icon icon-in"/>
              <input type="text" class="form1-input ">
              </div>
              <div class="pl-fd8">
                <OutIcon class="icon icon-out"/>
              <input type="text" class="form1-input ">
              </div>
              <div class="pl-fd8">
                <OutIcon class="icon icon-in"/>
              <input type="text" class="form1-input ">
              </div>
              <div class="pl-fd8">
                <OutIcon class="icon icon-out"/>
              <input type="text" class="form1-input ">
              </div>
              <div class="pl-fd8">
                <OutIcon class="icon icon-in"/>
              <input type="text" class="form1-input ">
              </div>
                  <div class="pl-fd8">
                <OutIcon class="icon icon-out"/>
              <input type="text" class="form1-input ">
              </div>
              <div class="pl-fd8">
                <OutIcon class="icon icon-in"/>
              <input type="text" class="form1-input ">
              </div>
            </div>
          </div>
        </div>
        <!-- form input container  -->
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

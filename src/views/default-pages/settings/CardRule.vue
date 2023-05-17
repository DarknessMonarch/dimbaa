<script setup>
import axios from "axios";
import { useDrawerStore } from "@/stores/drawer";
import PopUP from "@/components/drawer/popup.vue";
import { ref, onMounted, computed, watchEffect } from "vue";
import rule from "./ruleComponent.vue";
import DeleteStaff from "@/components/form/deleteForm/DeleteStaff.vue";

const data = ref([]);
const search = ref("");
const check = ref(null);
const drawerStore = useDrawerStore();

const openPos = () => {
  check.value = true;
  drawerStore.togglePop();
};

const deletePos = () => {
  check.value = false;
  drawerStore.togglePop();
};

//api
const searchResult = computed(() => {
  return data.value.filter((d) => d.medic.includes(search.value));
});

let token = localStorage.authKey;
let url = 'https://be-tblp.dimbaa.com/api/'


onMounted(async () => {
  const options = {
    method: "GET",
    url: `${url}teammanager/players`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      data.value = response.data.players;
    })
    .catch(function (error) {
      console.error(error);
    });
});
</script>
<template>
  <div class="main-container">
    <div class="user-content">
      <div class="table-slide">
        <table>
          <tr>
            <th>CardNumber</th>
            <th>number of repeats</th>
            <th>number of bans</th>
            <th>Action</th>

          </tr>
          <!-- <h1 v-if="data.length <= 0">loading data....................⚽</h1> -->
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div class="table-link-c">
                <div class="table-link">
                  <a href="#" @click="openPos">Add</a>
                </div>
                <div class="table-link">
                  <a href="#" @click="openPos">Edit</a>
                </div>
                <div class="table-link">
                  <a href="#" @click="deletePos">Delete</a>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <PopUP title="Add Match rule" v-if="check == true">
      <rule />
    </PopUP>
    <PopUP title="Delete position" v-else>
        <DeleteStaff />
      </PopUP>
  </div>
</template>
<style>
@import "@/style/main.css";
</style>

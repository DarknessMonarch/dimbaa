<script setup>
import axios from "axios";
import { useDrawerStore } from "@/stores/drawer";
import PopUP from "@/components/drawer/popup.vue";
import CreateStaff from "@/components/form/createform/CreateStaff.vue";
import DeleteStaff from "@/components/form/deleteForm/DeleteStaff.vue";
import { ref, onMounted, computed, watchEffect } from "vue";

const data = ref([]);
const search = ref("");
const check = ref(null);
const drawerStore = useDrawerStore();

const openStaff = () => {
  check.value = true;
  drawerStore.togglePop();
};

const deleteStaff = () => {
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
            <th>Medic</th>
            <th>Coach</th>
            <th>Assistant Coach</th>
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
                  <a href="#" @click="openStaff">Edit</a>
                </div>
                <div class="table-link">
                  <a href="#" @click="deleteStaff">Delete</a>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- side bar component for sorting  -->
    <div>
      <PopUP title="Edit Staff" v-if="check == true">
        <CreateStaff />
      </PopUP>
      <PopUP title="Delete Staff" v-else>
        <DeleteStaff />
      </PopUP>
    </div>
  </div>
</template>
<style>
@import "@/style/main.css";
</style>

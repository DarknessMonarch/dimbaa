import { ref } from "vue";
import { defineStore } from "pinia";


export const useRouteStore = defineStore("route", () => {
const userID = ref(null)
const playerID = ref(null)
const stadiumName = ref(null);
const playerPos = ref(null);
const showPage = ref(false)

const setUserId = (Id) => {
    userID.value =  Id;
}

const setPlayerId = (Id) => {
    playerID.value =  Id;
}

const togglePage = () => {
  showPage.value = !showPage.value;
}

const setStadium = (name) => {
 stadiumName.value =  name;
}
const setPlayer = (pos) => {
  playerPos.value =  pos;
 }

  return { playerID, userID, setStadium, setPlayer, playerPos, stadiumName, setUserId , setPlayerId, showPage, togglePage};
});

// import { ref } from "vue";
// import { defineStore } from "pinia";

// import axios from "axios";
// import { refThrottled } from "@vueuse/core";


// export const useAuthStore = defineStore("auth", () => {
//   const isLoggedIn = ref(false);
//   const userName = ref(null);

//   function logIn() {
//     isLoggedIn.value = true;
//   }

//   function getUser(user) {
//     userName.value = user;
//   }

//   return { getUser, isLoggedIn, logIn , userName};
// });


// export const usePlayerStore = defineStore("player", () => {

//   //api config
//   const options = {
//     method: "GET",
//     url: "https://be-tblp.dimbaa.com/api/teammanager/players",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization:
//         "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNWZhMGRiODY3YTM0NTg3MTg2ZDk3MDdiMDBmYzliYWM4M2QyZjAzOWM2ZjhjZjVlMTRlMWUwY2UxZGYxYmRhNDdiYWYxNWEyMjJhMDhkMmIiLCJpYXQiOjE2NzExOTM1MzguNTU0MTM0LCJuYmYiOjE2NzExOTM1MzguNTU0MTM2LCJleHAiOjE2ODY5MTgzMzguNTQ4NTAxLCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.kYBwzo9ZoKTL9GG_j9iMpswww1UriiHYPufljSVJo_5QyLiJrI4Wb2k0sPD7iDb0SmlrFQnUdSI8knqLUZBe2Sd2bC4r4c_otOdYLnQAyxmM-0fJh_jVIGYgCjFF7msWOWsTcyl8fg7-Uj3yrsAxoxOdQW-L28dx4-hFAZUR9eOs2XCwU0cf9TUnGdqxvUm_wFBBou509NtZec1bmaAgUbG9GSpAfk7mfmuUOU1u7ElrOTFyvvN4bAI_70DpK3XUDJ0Nw81YsCO0_kp_Nr1hAZ2fmcIPXe-xKvwSPfp_7cMmT6HqV9MdQwPK7-ISoJq_eTy2fGvfHDQrWyKLDyKp8W0Fs5z6PURwT2hFZ6tV3jxCMH-sAzgTY72xXdb3EjG4etbbyc-wAWXmPQ9WB5SeOms2Xqm4M41XQbNeyK-qy2jYcDQLnYVnRZihWdBTLcBf64_DFuMWzRhvu4hTL8_fVu94whAWW-Oi9-s7BKRftDf3paExjJtEaT6-kUDnzRpe_Yfw9nfWDxA8LYUUsukYDDqvSshVRk5eG6kp3K169pppD7gAKakpORggebMgEHn4DGX7ieowJk3XCfDrIxZ5EVoX3HGZjamaRPmnl-bX2lvBTjBm3uFSGrLnMbckzS4fdpYK3YnNmyBESm9-sOCQ-5M3Nf6jsFQH6FdeWnGoo0E",
//     },
//   };
//   //state
//   const player = ref(null);
//   const error = ref(null);

//   //getters
//   const getPlayer = () => { 
    
//    return player.value };

//   //actions
//   const fetchUser =  async () => {
//     try {
      
//       await axios.request(options).then((res) => {
//         player.value = res.data.players;
//       })

//       .catch((err) => {
//         console.log(err);
//         error.value = err;
//       });

//     } catch (error) {
//       console.log(error);
//     }
//   }
// });
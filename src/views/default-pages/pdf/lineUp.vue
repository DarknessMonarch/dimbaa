<script>
import html2pdf from "html2pdf.js";
export default {
    methods: {
        generatePdf() {
            html2pdf(document.getElementById("pdf-area"), {
                margin: 1,
                filename: "LineUp.pdf",
            });
        },
    },
};
</script>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const premier = ref("NBC PREMIER League 2023/24")
const roleTitle = ref("LINE UP REPORT");
const data = ref([]);
console.log(data.value)

let token = localStorage.authKey;
let url = 'https://be-tblp.dimbaa.com/api/'

onMounted(async () => {
  const options = {
    method: "GET",
    url: `${url}data-manager/list-match-events`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      data.value = response.data.match;
      console.log(data.value); 
    })
    .catch(function (error) {
      console.error(error);
    });
});
</script>
<template>
    <div ref="document" class="pdf-wrapper">
        <div class="pdf-container" id="pdf-area">
            <div class="pdf-header">
                <img src="@/assets/nbc.png" alt="nbc-logo" class="nbc-logo" />
                <div class="pdf-header-info">
                    <div class="inner-header lineup-header">
                        <h1>{{ premier }}</h1>
                        <h2>{{ roleTitle }}</h2>
                    </div>
                    <img src="@/assets/tplb.png" alt="tplb-logo" class="tplb-pdf" />
                </div>
                <img src="@/assets/tff-logo.png" alt="tff-logo" class="tff-pdf" />
            </div>
            <div class="pdf-details">
                <div class="inner-pdf-details">
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title lineup-title"><span>Details</span> </div>
                        <div class="table-pdf-header">
                            <div>Competition</div>
                            <div>Timu</div>
                            <div>Tarehe</div>
                            <div>Mchezo Na</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                          <!-- loop -->
                          <div class="pdf-tbl-d">
                        <div class="pdf-title lineup-title"><span>Wachezaji Wanaoanza</span> </div>
                        <div class="table-pdf-header">
                            <div>N</div>
                            <div>Jina</div>
                            <div>Jezi Na</div>
                            <div>Leseni No</div>
                            <div>Saini</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title lineup-title"><span>Wachezaji Wa Akiba</span> </div>
                        <div class="table-pdf-header">
                            <div>N</div>
                            <div>Jina</div>
                            <div>Jezi Na</div>
                            <div>Leseni No</div>
                            <div>Saini</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title lineup-title"><span>Viongozi Wa Timu</span> </div>
                        <div class="table-pdf-header">
                            <div>N</div>
                            <div>Jina</div>
                            <div>Nafasi</div>
                            <div>Saini</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <h5 class="lineup-header-i">Nathibitisha kuwa Orodha hii ni Majina Halisi ya Timu yangu tajwa hapo juu inayocheza na</h5>
                           <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Timu Ya </div>
                            <div>Leo hii Tarehe</div>
                            <div>Saini ya Meneja</div>
                            <div>Saini ya Kocha</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                </div>
            </div>
            <div class="pdf-footer lineup-header">
                <h1 class="">TANZANIA PREMIER LEAGUE BOARD (TPLB)</h1>
                <h5>P.O.Box 79043 Dar es Salaam.</h5>
                <h5>Email: taarifa@ligikuu.co.tz, info@ligikuu.co.tz
                </h5>
                <h5>14thFloor, NSSF Mafao House Plot NO. 40, Block Y, Uhuru Street Ilala, Dar es Salaam</h5>
            </div>
        </div>
        <div class="pdf-btn">
            <button class="btn1 btn1-b" @click="generatePdf">Download</button>
        </div>
    </div>
</template>
<style>
@import "@/style/pdf.css";
</style>
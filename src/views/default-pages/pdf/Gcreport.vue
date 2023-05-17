<script>
import html2pdf from "html2pdf.js";
export default {
    methods: {
        generatePdf() {
            html2pdf(document.getElementById("pdf-area"), {
                margin: 1,
                filename: "Gcreport.pdf",
            });
        },
    },
};
</script>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const premier = ref("NBC PREMIER League 2023/24")
const roleTitle = ref("GC Report");
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
      Authorization: `Bearer ${token}`
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
                    <div class="inner-header">
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
                        <div class="pdf-title"><span>Details</span> </div>
                        <div class="table-pdf-header">
                            <div>Competition</div>
                            <div>Match Date</div>
                            <div>RD</div>
                            <div>Mchezo Na</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Number</div>
                            <div>Date</div>
                            <div>Home Team</div>
                            <div>Away Team</div>
                            <div>Venue</div>
                            <div>City</div>
                        </div>
                        <div class="pdf-table-column"  v-for="(
            { city, venue, date, id, home_team_id, away_team_id, }, index
          ) in data" :key="index">
                            <div>{{ id }}</div>
                            <div>{{ date }}</div>
                            <div>{{ home_team_id }}</div>
                            <div>{{ away_team_id }}</div>
                            <div>{{ venue }} </div>
                            <div>{{ city }}</div>
                        </div>
                    </div>
                        <!-- loop -->
                        <div class="pdf-tbl-d">
                        <div class="pdf-title"><span>Results</span> </div>
                        <div class="table-pdf-header">
                            <div>Parameter</div>
                            <div>Match Officials Name</div>
                            <div>Region</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>The CountDown was respected by both teams :</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title"><span>Match Coordination Meeting</span> </div>
                        <div class="table-pdf-header">
                            <div>Match Coordination Meeting held ? </div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Meeting Date</div>
                            <div>If No why?</div>
                            <div>Comments</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title"><span>TFF Flag</span> </div>
                        <div class="table-pdf-header">
                            <div>TFF Flag Raised?</div>
                            <div>On the Pole</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title"><span>Position of Benches</span> </div>
                        <div class="table-pdf-header">
                            <div>Position of benches respected by both team ?</div>
                            <div>If no, Why?</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Performance</div>
                            <div>Grade</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title"><span>Incident</span> </div>
                        <div class="table-pdf-header">
                            <div>Was there any incident during the team check ?</div>
                            <div>If Yes, Why?</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title"><span>Dressing Room</span> </div>
                        <div class="table-pdf-header">
                            <div>Condition of dressing room</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title"><span>Stretchers & ambulance </span> </div>
                        <div class="table-pdf-header">
                            <div>Ambulance</div>
                            <div>No of Ambulance</div>
                            <div>Stretchers</div>
                            <div>No of Stretchers</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title"><span>Others</span> </div>
                        <div class="table-pdf-header">
                            <div>Infotainment</div>
                            <div>Giant Screen</div>
                            <div>Announcer</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Incident</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Remarks</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title"><span>GC Details</span> </div>
                        <div class="table-pdf-header">
                            <div>GC Name</div>
                            <div>Date</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                </div>
            </div>
            <div class="pdf-footer">
                <h1>TANZANIA PREMIER LEAGUE BOARD (TPLB)</h1>
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
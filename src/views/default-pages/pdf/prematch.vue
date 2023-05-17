<script>
import html2pdf from "html2pdf.js";
export default {
    methods: {
        generatePdf() {
            html2pdf(document.getElementById("pdf-area"), {
                margin: 1,
                filename: "pre_match.pdf",
            });
        },
    },
};
</script>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const premier = ref("NBC PREMIER League 2023/24")
const roleTitle = ref("PreMatch Report");
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
                    <div class="inner-header pre-header">
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
                        <div class="pdf-title pre-title"><span>Details</span> </div>
                        <div class="table-pdf-header">
                            <div>Competition</div>
                            <div>Match Date</div>
                            <div>KickOff Time</div>
                            <div>Mchezo Na</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Home Team</div>
                            <div>Away Team</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Match Commissioner</div>
                            <div>Stadium</div>
                            <div>City</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title pre-title"><span>Conditions</span> </div>
                        <div class="table-pdf-header">
                            <div>N</div>
                            <div>Parameter</div>
                            <div>Details</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title pre-title"><span>OPERATIONS </span> </div>
                        <div class="table-pdf-header">
                            <div>Parameter</div>
                            <div>Full Name</div>
                            <div>Email</div>
                            <div>Phone</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title pre-title"><span>Cooperation</span> </div>
                        <div class="table-pdf-header">
                            <div>N</div>
                            <div>Parameter</div>
                            <div>Details</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title pre-title"><span>Home Team Colors</span> </div>
                        <div class="table-pdf-header">
                            <div>N</div>
                            <div>Parameter</div>
                            <div>Field Players</div>
                            <div>Field Players</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title pre-title"><span>Away Team Colors</span> </div>
                        <div class="table-pdf-header">
                            <div>N</div>
                            <div>Parameter</div>
                            <div>Field Players</div>
                            <div>Field Players</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                           <div class="pdf-tbl-d">
                        <div class="pdf-title pre-title"><span>Please Describe three (3) TOP ISSUES</span> </div>
                        <div class="table-pdf-header">
                            <div>N</div>
                            <div>Description</div>
                            <div>Measures (to be) TAKEN</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title pre-title"><span>three MAIN CHALLENGE(S) for the MATCH </span> </div>
                        <div class="table-pdf-header">
                            <div>N</div>
                            <div>Description</div>
                            <div>Possible MEASURES</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title pre-title"><span>Additional Remarks</span> </div>
                        <div class="table-pdf-header">
                            <div>Description</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <h5 class="pre-header-i">Match COMMISSIONER can be Contacted on SITE as follows:</h5>
      <!-- loop -->
      <div class="pdf-tbl-d">
                        <div class="pdf-title pre-title"><span>Additional Remarks</span> </div>
                        <div class="table-pdf-header">
                            <div>Email</div>
                            <div>WhatsApp</div>
                            <div>Mobile</div>
                            <div>Sign</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pdf-footer pre-header">
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
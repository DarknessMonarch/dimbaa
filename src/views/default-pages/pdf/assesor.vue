<script>
import html2pdf from "html2pdf.js";
export default {
    methods: {
        generatePdf() {
            html2pdf(document.getElementById("pdf-area"), {
                margin: 1,
                filename: "referee_assesor.pdf",
            });
        },
    },
};
</script>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const premier = ref("NBC PREMIER League 2023/24")
const roleTitle = ref("Ref Assessor Report");
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
                    <div class="inner-header assessor-header">
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
                        <div class="pdf-title assessor-title"><span>About the Match</span> </div>
                        <div class="table-pdf-header">
                            <div>Parameter</div>
                            <div>Detail</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title assessor-title"><span>Refereeing Team</span> </div>
                        <div class="table-pdf-header">
                            <div>Dakika</div>
                            <div>Name</div>
                            <div>Region</div>
                            <div>Degree of difficulty</div>
                            <div>Marks</div>
                            <div>Marks*</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <h5 class="assessor-header-i">Evaluation Of The Referee</h5>
                    <div class="pdf-tbl-d">
                        <div class="pdf-title assessor-title"><span>Control of the Game</span> </div>
                        <div class="table-pdf-header">
                            <div>Performance</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Positive Points</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Area Of Improvement</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Additional Comments on control of the Game</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title assessor-title"><span>Physical fitness & Positioning</span> </div>
                        <div class="table-pdf-header">
                            <div>Performance</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Positive Points</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Area Of Improvement</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Additional Comments on control of the Game</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title assessor-title"><span>Team Work</span> </div>
                        <div class="table-pdf-header">
                            <div>Performance</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Positive Points</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Area Of Improvement</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Additional Comments on control of the Game</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                       <h5 class="assessor-header-i">Evaluation Of The Referee 1</h5>
                    <div class="pdf-tbl-d">
                        <div class="pdf-title assessor-title"><span>Key Point</span> </div>
                        <div class="table-pdf-header">
                            <div>Performance</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Positive Points</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Area Of Improvement</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Additional Comments on control of the Game</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                       <h5 class="assessor-header-i">Evaluation Of The Referee 2</h5>
                    <div class="pdf-tbl-d">
                        <div class="pdf-title assessor-title"><span>Key Point</span> </div>
                        <div class="table-pdf-header">
                            <div>Performance</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Positive Points</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Area Of Improvement</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Additional Comments on control of the Game</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <h5 class="assessor-header-i">Evaluation Of the 4th Official</h5>
                    <div class="pdf-tbl-d">
                        <div class="pdf-title assessor-title"><span>Key Point</span> </div>
                        <div class="table-pdf-header">
                            <div>Performance</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Positive Points</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Area Of Improvement</div>
                            <div>Minutes</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Additional Comments on control of the Game</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title assessor-title"><span>Additional Reamark</span> </div>
                        <div class="table-pdf-header">
                            <div>Additional Assistant Referee 1</div>
                            <div>Marks</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Additional Assistant Referee 2</div>
                            <div>Marks</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                             <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Date</div>
                            <div>Sign</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                </div>
            </div>
            <div class="pdf-footer assessor-header">
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
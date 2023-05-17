<script>
import html2pdf from "html2pdf.js";
export default {
    methods: {
        generatePdf() {
            html2pdf(document.getElementById("pdf-area"), {
                margin: 1,
                filename: "referee.pdf",
            });
        },
    },
};
</script>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const premier = ref("NBC PREMIER League 2023/24")
const roleTitle = ref("Referee Report");
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
                    <div class="inner-header referee-header">
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
                        <div class="pdf-title referee-title"><span>Details</span> </div>
                        <div class="table-pdf-header">
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
                            <div>Team A</div>
                            <div>Team B</div>
                            <div>Stadium</div>
                            <div>City</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title referee-title"><span>Results</span> </div>
                        <div class="table-pdf-header">
                            <div>Parameter</div>
                            <div>Team A</div>
                            <div>Team B</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title referee-title"><span>Team’s Players & Officaials</span> </div>
                        <div class="table-pdf-header">
                            <div>NO</div>
                            <div>Parameter</div>
                            <div>Team A</div>
                            <div>Team B</div>
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
                    <!-- half -->
                    <div class="pdf-referee-d">
                        <div class="pdf-d">
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="pdf-title referee-title"><span>Starting Players Team A</span> </div>
                                <div class="table-pdf-header">
                                    <div>Jr No</div>
                                    <div>POS</div>
                                    <div>Player Name</div>
                                    <div>Leseni</div>
                                </div>
                                <div class="pdf-table-column">
                                    <div></div>
                                </div>
                            </div>
                            <!-- loop -->
                        </div>
                        <div class="pdf-d">
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="pdf-title referee-title"><span>Starting Players Team B</span> </div>
                                <div class="table-pdf-header">
                                    <div>Jr No</div>
                                    <div>POS</div>
                                    <div>Player Name</div>
                                    <div>Leseni</div>
                                </div>
                                <div class="pdf-table-column">
                                    <div></div>
                                </div>
                            </div>
                            <!-- loop -->
                        </div>
                    </div>

                    <!-- half -->
                    <div class="pdf-referee-d">
                        <div class="pdf-d">
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="pdf-title referee-title"><span>Reserve Players Team A</span> </div>
                                <div class="table-pdf-header">
                                    <div>Jr No</div>
                                    <div>POS</div>
                                    <div>Player Name</div>
                                    <div>Leseni</div>
                                </div>
                                <div class="pdf-table-column">
                                    <div></div>
                                </div>
                            </div>
                            <!-- loop -->
                        </div>
                        <div class="pdf-d">
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="pdf-title referee-title"><span>Reserve Players Team B</span> </div>
                                <div class="table-pdf-header">
                                    <div>Jr No</div>
                                    <div>POS</div>
                                    <div>Player Name</div>
                                    <div>Leseni</div>
                                </div>
                                <div class="pdf-table-column">
                                    <div></div>
                                </div>
                            </div>
                            <!-- loop -->
                        </div>
                    </div>
                    <!-- half -->
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title referee-title"><span>Scores</span> </div>
                        <div class="table-pdf-header">
                            <div>Dakika</div>
                            <div>Player</div>
                            <div>Jr No</div>
                            <div>Team</div>
                            <div>Scoring Condition</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title referee-title"><span>Cautions</span> </div>
                        <div class="table-pdf-header">
                            <div>Dakika</div>
                            <div>Player</div>
                            <div>Jr No</div>
                            <div>Team</div>
                            <div>Reasons</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title referee-title"><span>Expulsion</span> </div>
                        <div class="table-pdf-header">
                            <div>Dakika</div>
                            <div>Player</div>
                            <div>Jr No</div>
                            <div>Team</div>
                            <div>Reasons</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-referee-d">
                        <div class="pdf-d">
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="pdf-title referee-title"><span>Substitutions Team A</span> </div>
                                <div class="table-pdf-header">
                                    <div>Dakika</div>
                                    <div>Player</div>
                                    <div>Jr No</div>
                                    <div>Player Name</div>
                                    <div>Jr No</div>
                                </div>
                                <div class="pdf-table-column">
                                    <div></div>
                                </div>
                            </div>
                            <!-- loop -->
                        </div>
                        <div class="pdf-d">
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="pdf-title referee-title"><span>Substitutions Team B</span> </div>
                                <div class="table-pdf-header">
                                    <div>Dakika</div>
                                    <div>Player</div>
                                    <div>Jr No</div>
                                    <div>Player Name</div>
                                    <div>Jr No</div>
                                </div>
                                <div class="pdf-table-column">
                                    <div></div>
                                </div>
                            </div>
                            <!-- loop -->
                        </div>
                    </div>
                    <!-- half -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title referee-title"><span>Attitude & Condition</span> </div>
                        <div class="table-pdf-header">
                            <div>Wachezaji wa Timu A</div>
                            <div>Wachezaji wa Timu B</div>
                            <div>Watazamaji</div>
                            <div>Spectators</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Team A </div>
                            <div>Team B</div>
                            <div>Stadium</div>
                            <div>City</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title referee-title"><span>Uwanja na Vifaa/Ground & Equipments</span> </div>
                        <div class="table-pdf-header">
                            <div>NO</div>
                            <div>Parameter</div>
                            <div>Nzuri</div>
                            <div>MAONI</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title referee-title"><span> Maandalizi/Organisation</span> </div>
                        <div class="table-pdf-header">
                            <div>NO</div>
                            <div>Parameter</div>
                            <div>Walikuwepo</div>
                            <div>MAONI</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title referee-title"><span> Officials Assisstants</span> </div>
                        <div class="table-pdf-header">
                            <div>NO</div>
                            <div>Parameter</div>
                            <div>Assistaent No 1</div>
                            <div>Assistaent No 2</div>
                            <div>Reserve Referee</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title referee-title"><span> Commissioner</span> </div>
                        <div class="table-pdf-header">
                            <div>Name</div>
                            <div>Region</div>
                           
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title referee-title"><span> Referee Assessor</span> </div>
                        <div class="table-pdf-header">
                            <div>Name</div>
                            <div>Region</div>
                        
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title referee-title"><span> Center Supervisor</span> </div>
                        <div class="table-pdf-header">
                            <div>Name</div>
                            <div>Region</div>
                        
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title referee-title"><span> Maoni au Taarifa ya Tukio</span> </div>
                        <div class="table-pdf-header">
                            <div>Matukio</div>
                        
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title referee-title"><span> Maoni au Taarifa ya Tukio/Matukio</span> </div>
                        <div class="table-pdf-header">
                            <div>Referee</div>
                            <div>District</div>
                            <div>Region</div>
                            <div>Pl Natch No</div>
                        
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Season Match No</div>
                            <div>Match Payment</div>
                            <div>ref reg no</div>
                            <div>Phone no</div>
                        
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>Email</div>
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
            <div class="pdf-footer referee-header">
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
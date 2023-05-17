<script>
import html2pdf from "html2pdf.js";
export default {
    methods: {
        generatePdf() {
            html2pdf(document.getElementById("pdf-area"), {
                margin: 1,
                filename: "post_match.pdf",
            });
        },
    },
};
</script>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const premier = ref("NBC PREMIER League 2023/24")
const roleTitle = ref("PostMatch Report");
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
                    <div class="inner-header post-header">
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
                        <div class="pdf-title post-title"><span>Details</span> </div>
                        <div class="table-pdf-header">
                            <div>Terehe</div>
                            <div>Muda</div>
                            <div>Mchezo Na</div>
                            <div>Kituo</div>
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
                            <div>Uwanja</div>
                            <div>City</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="table-pdf-header">
                            <div>MC Name</div>
                            <div>Mobile</div>
                            <div>Email</div>
                            <div>Whatsapp</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- half -->
                    <div class="pdf-post-d">
                        <div class="pdf-d">
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="table-pdf-header">
                                    <div>Results Haftime</div>
                                </div>
                                <div class="pdf-table-column">
                                    <div></div>
                                </div>
                            </div>
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="table-pdf-header">
                                    <div>Results Full Time</div>
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
                                <div class="table-pdf-header">
                                    <div>Results Penalty</div>
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
                        <div class="pdf-title post-title"><span>Match Officials</span> </div>
                        <div class="table-pdf-header">
                            <div>Position</div>
                            <div>FullName</div>
                            <div>Region</div>
                            <div>Phone Number</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- half -->
                    <div class="pdf-post-d">
                        <div class="pdf-d">
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="pdf-title post-title"><span>Goals Team A</span> </div>
                                <div class="table-pdf-header">
                                    <div>Jr No</div>
                                    <div>Player Name</div>
                                    <div>OG </div>
                                    <div>P</div>
                                    <div>Mnt</div>
                                </div>
                                <div class="pdf-table-column">
                                    <div></div>
                                </div>
                            </div>
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="pdf-title post-title"><span>Goals Team B</span> </div>
                                <div class="table-pdf-header">
                                    <div>Jr No</div>
                                    <div>Player Name</div>
                                    <div>OG </div>
                                    <div>P</div>
                                    <div>Mnt</div>
                                </div>
                                <div class="pdf-table-column">
                                    <div></div>
                                </div>
                            </div>
                            <!-- loop -->
                        </div>
                    </div>
                    <!-- half -->
                    <div class="pdf-post-d">
                        <div class="pdf-d">
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="pdf-title post-title"><span>ABADILIKO YA WACHEZAJI Team A</span> </div>
                                <div class="table-pdf-header">
                                    <div>Mnt</div>
                                    <div>Player</div>
                                    <div>Player Name</div>
                                    <div>Jr No</div>
                                </div>
                                <div class="pdf-table-column">
                                    <div></div>
                                </div>
                            </div>
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="pdf-title post-title"><span>ABADILIKO YA WACHEZAJI Team B</span> </div>
                                <div class="table-pdf-header">
                                    <div>Mnt</div>
                                    <div>Player</div>
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
                          <div class="pdf-post-d">
                        <div class="pdf-d">
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="pdf-title post-title"><span>Yellow Card Team A</span> </div>
                                <div class="table-pdf-header">
                                    <div>Jr No</div>
                                    <div>Player Name</div>
                                    <div>Mnt</div>
                                    <div>S</div>
                                </div>
                                <div class="pdf-table-column">
                                    <div></div>
                                </div>
                            </div>
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="pdf-title post-title"><span>Yellow Card Team B</span> </div>
                                <div class="table-pdf-header">
                                    <div>Jr No</div>
                                    <div>Player Name</div>
                                    <div>Mnt</div>
                                    <div>S</div>
                                </div>
                                <div class="pdf-table-column">
                                    <div></div>
                                </div>
                            </div>
                            <!-- loop -->
                        </div>
                    </div>
                    <!-- half -->
                    <div class="pdf-post-d">
                        <div class="pdf-d">
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="pdf-title post-title"><span>Red Card Team A</span> </div>
                                <div class="table-pdf-header">
                                    <div>Jr No</div>
                                    <div>Player Name</div>
                                    <div>Mnt</div>
                                    <div>S</div>
                                </div>
                                <div class="pdf-table-column">
                                    <div></div>
                                </div>
                            </div>
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="pdf-title post-title"><span>Red Card Team B</span> </div>
                                <div class="table-pdf-header">
                                    <div>Jr No</div>
                                    <div>Player Name</div>
                                    <div>Mnt</div>
                                    <div>S</div>
                                </div>
                                <div class="pdf-table-column">
                                    <div></div>
                                </div>
                            </div>
                            <!-- loop -->
                        </div>
                    </div>
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="pdf-title post-title"><span>Attitude of Players & Spectators</span> </div>
                                <div class="table-pdf-header">
                                    <div>Tabiaza WACHEZAJI</div>
                                    <div>Tabiaza WASHABIKI</div>
                                </div>
                                <div class="pdf-table-column">
                                    <div></div>
                                </div>
                            </div>
                            <!-- loop -->
                            <div class="pdf-tbl-d">
                                <div class="pdf-title post-title"><span>VIFAA NA KIWANJA</span> </div>
                                <div class="table-pdf-header">
                                    <div>No</div>
                                    <div>Parameter</div>
                                    <div>Availble</div>
                                    <div>MaelezoMafupiya Hali naVifaaKiwanjani</div>
                                </div>
                                <div class="pdf-table-column">
                                    <div></div>
                                </div>
                            </div>
                            <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title post-title"><span>UENDESHAJI MCHEZO</span> </div>
                        <div class="table-pdf-header">
                            <div>NO</div>
                            <div>Parameter</div>
                            <div>Availble</div>
                            <div>MaelezoMafupiya Hali naVifaaKiwanjani</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title post-title"><span>ULINZI NA USALAMA</span> </div>
                        <div class="table-pdf-header">
                            <div>NO</div>
                            <div>Parameter</div>
                            <div>Availble</div>
                            <div>Idadi</div>
                            <div>Maelezo Mafupi ya Hali na Vifaa Kiwanjani</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                        <div class="pdf-tbl-d">
                        <div class="pdf-title post-title"><span>TIBA</span> </div>
                        <div class="table-pdf-header">
                            <div>NO</div>
                            <div>Parameter</div>
                            <div>Availble</div>
                            <div>Maelezo Mafupi ya Hali na Vifaa Kiwanjani</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                    <!-- loop -->
                    <div class="pdf-tbl-d">
                        <div class="pdf-title post-title"><span>HABARI NA MASOKO</span> </div>
                        <div class="table-pdf-header">
                            <div>NO</div>
                            <div>Parameter</div>
                            <div>Availble</div>
                            <div>Maelezo Mafupi ya Hali na Vifaa Kiwanjani</div>
                        </div>
                        <div class="pdf-table-column">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pdf-footer post-header">
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
<script setup>
</script>
<script >
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

import LineWithLineChart from '@/components/drawer/LineChart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default {
    components: {
        LineWithLineChart
    },
    data() {
        return {
            data: {
                labels: ['Plb', 'W', 'D', 'L', 'GF', 'GA'],
                datasets: [
                    {
                        label: 'Perfomance chart',
                        backgroundColor: 'rgb(247, 0, 1)',
                        data: [4, 3, 1, 8, 8, 8]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    intersect: false
                }
            }
        }
    }
}
</script>
<template>
    <div class="table-if">
        <div class="inn-spy-a">
            <div class="spy-a">
                <div class="inn-t">
                    <span>
                        Recent Match
                    </span>
                    <span>
                        time
                    </span>
                </div>
                <div class="inn-match-ds">
                    <img src="https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_96x96.png"
                        alt="manchester" class="match-logo-ds"> <span>2</span>
                    <span>-</span>
                    <span>1</span>
                    <img src="https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Xw_96x96.png"
                        alt="mancity" class="match-logo-ds">
                </div>
            </div>
            <div class="spy-a">
                <div class="inn-t">
                    <span>
                        Next Match
                    </span>
                    <span>
                        time
                    </span>
                </div>
                <div class="inn-match-ds">
                    <img src="https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_96x96.png"
                        alt="manchester" class="match-logo-ds">
                    <span>Vs</span>
                    <img src="https://ssl.gstatic.com/onebox/media/sports/logos/-WjHLbBIQO9xE2e2MW3OPQ_96x96.png"
                        alt="wolves" class="match-logo-ds">
                </div>
            </div>
        </div>
        <div>
            <div class="header-spy">
                <table>
                    <tr>
                        <th>Pld</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GF</th>
                        <th>GA</th>
                    </tr>
                    <td>4</td>
                    <td>3</td>
                    <td>1</td>
                    <td>8</td>
                    <td>8</td>
                    <td>8</td>
                    <tr>
                    </tr>
                </table>
            </div>
            <div class="graph-tbl">
                <LineWithLineChart :data="data" :options="options" />
            </div>
        </div>
    </div>
</template>
<style>
@import '@/style/table.css';
</style>
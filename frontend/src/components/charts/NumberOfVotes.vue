<template>
    <div class="number-of-votes">
        <canvas id="myChart"></canvas>
    </div>
</template>

<script setup>
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';

const ctx = document.getElementById('myChart');

onMounted(()=>{
    new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: '#7300df',
      }]
    },
    options: {
      scales: {
        y: {
          ticks: {color: '#fff'},
          beginAtZero: true
        },
        x: {
            ticks: {color: '#fff'}
        }
      },
      plugins: {
            legend: {
                labels: {
                    color: '#fff' // Set the text color here
                }
            }
        }
    }
});
})

</script>

<style scoped>
.number-of-votes{
    width: 400px;
    height: 200px;
    padding: 12px;

    background-color: #1e1f26;
    border-radius: 1em;
}
</style>
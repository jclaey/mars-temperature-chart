let chart = document.getElementById('chart').getContext('2d');
const nasaKey = 'g795Ovorq0NI8ckUi4jSzhGAXAWhaWEsCyhXfNfg';

function fetchData() {
  fetch(`https://api.nasa.gov/insight_weather/?api_key=${nasaKey}&feedtype=json&ver=1.0`)
    .then(res => res.json())
    .then(data => {
      let sols = [];
      for(let i = 0; i < data.sol_keys.length; i++) {
        sols.push(data[data.sol_keys[i]].AT.av);
      }
      let tempChart = new Chart(chart, {
        type: 'line',
        data: {
          labels: ['Solar Day 1', 'Solar Day 2', 'Solar Day 3', 'Solar Day 4', 'Solar Day 5', 'Solar Day 6', 'Solar Day 7'],
          datasets: [{
            label: 'Average Daily Temperature On Mars (Celsius)',
            data: [...sols],
            backgroundColor: '#16a085'
          }]
        }
      });
    });
}

fetchData();
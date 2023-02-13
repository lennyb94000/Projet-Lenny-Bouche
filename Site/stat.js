var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['9h', '10h', '11h', '12h', '13h', '14h', '15h'],
            datasets: [{
                label: 'Tirs réussis',
                data: [40, 60, 50, 90, 75, 75, 45],
                backgroundColor: 'rgba(255, 94, 5, 0.2)',
                borderColor: 'rgba(255, 94, 5, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });


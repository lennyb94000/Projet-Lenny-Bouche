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


    var donutEl = document.getElementById("donut").getContext("2d");
var donut = new Chart(donutEl).Doughnut(
	// Datas
	[
		{
			value: 300,
			color:"#F7464A",
			highlight: "#FF5A5E",
			label: "Red"
		},
		{
			value: 50,
			color: "#46BFBD",
			highlight: "#5AD3D1",
			label: "Green"
		},
		{
			value: 100,
			color: "#FDB45C",
			highlight: "#FFC870",
			label: "Yellow"
		}
	],
	// Options
	{
		segmentShowStroke : true,
		segmentStrokeColor : "#fff",
		segmentStrokeWidth : 2,
		percentageInnerCutout : 50,
		animationSteps : 100,
		animationEasing : "easeOutBounce",
		animateRotate : true,
		animateScale : false,
		responsive: true,
		maintainAspectRatio: true,
		showScale: true,
		animateScale: true
	});

const chart = document.querySelector("#chart").getContext('2d');

//create a new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['5th', '10th', '15th', '20th', '25th', '31st'],

        datasets: [
            {
                label: 'Medicine',
                data: [200,375,452,100,435,500],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'Expenses',
                data: [500,756,235,1000,1200,2000],
                borderColor: 'green',
                borderWidth: 2
            },
            {
                label: 'Essentials',
                data: [590,745,450,200,600,400],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]

    },
    options: {
        responsive: true
    }
})

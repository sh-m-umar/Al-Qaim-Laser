import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // $.getScript("./assets/js/deafult-dashboard.js")

    // chart 1
    const canvas = <HTMLCanvasElement>document.getElementById('chart1');
    var ctx1 = canvas.getContext('2d');

    var gradientStroke1 = ctx1.createLinearGradient(0, 0, 0, 300);
    gradientStroke1.addColorStop(0, '#6078ea');
    gradientStroke1.addColorStop(1, '#17c5ea');

    var gradientStroke2 = ctx1.createLinearGradient(0, 0, 0, 300);
    gradientStroke2.addColorStop(0, '#ff8359');
    gradientStroke2.addColorStop(1, '#ffdf40');

    var myChart = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Laptops',
            data: [65, 59, 80, 81, 65, 59, 80, 81, 59, 80, 81, 65],
            borderColor: gradientStroke1,
            backgroundColor: gradientStroke1,
            hoverBackgroundColor: gradientStroke1,
            pointRadius: 0,
            fill: false,
            borderWidth: 0,
          },
          {
            label: 'Mobiles',
            data: [28, 48, 40, 19, 28, 48, 40, 19, 40, 19, 28, 48],
            borderColor: gradientStroke2,
            backgroundColor: gradientStroke2,
            hoverBackgroundColor: gradientStroke2,
            pointRadius: 0,
            fill: false,
            borderWidth: 0,
          },
        ],
      },

      options: {
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
          display: false,
          labels: {
            boxWidth: 8,
          },
        },
        tooltips: {
          displayColors: false,
        },
        scales: {
          xAxes: [
            {
              // barPercentage: 0.5,
            },
          ],
        },
      },
    });

    // chart 2

    const canvas2 = <HTMLCanvasElement>document.getElementById('chart2');
    var ctx2 = canvas2.getContext('2d');

    var gradientStroke1 = ctx2.createLinearGradient(0, 0, 0, 300);
    gradientStroke1.addColorStop(0, '#fc4a1a');
    gradientStroke1.addColorStop(1, '#f7b733');

    var gradientStroke2 = ctx2.createLinearGradient(0, 0, 0, 300);
    gradientStroke2.addColorStop(0, '#4776e6');
    gradientStroke2.addColorStop(1, '#8e54e9');

    var gradientStroke3 = ctx2.createLinearGradient(0, 0, 0, 300);
    gradientStroke3.addColorStop(0, '#ee0979');
    gradientStroke3.addColorStop(1, '#ff6a00');

    var gradientStroke4 = ctx2.createLinearGradient(0, 0, 0, 300);
    gradientStroke4.addColorStop(0, '#42e695');
    gradientStroke4.addColorStop(1, '#3bb2b8');

    var myChart = new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: ['Jeans', 'T-Shirts', 'Shoes', 'Lingerie'],
        datasets: [
          {
            backgroundColor: [
              gradientStroke1,
              gradientStroke2,
              gradientStroke3,
              gradientStroke4,
            ],
            hoverBackgroundColor: [
              gradientStroke1,
              gradientStroke2,
              gradientStroke3,
              gradientStroke4,
            ],
            data: [25, 80, 25, 25],
            borderWidth: [1, 1, 1, 1],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        cutoutPercentage: 75,
        legend: {
          position: 'bottom',
          display: false,
          labels: {
            boxWidth: 8,
          },
        },
        tooltips: {
          displayColors: false,
        },
      },
    });

    const canvas3 = <HTMLCanvasElement>document.getElementById('chart3');
    var ctx3 = canvas3.getContext('2d');

    var gradientStroke1 = ctx3.createLinearGradient(0, 0, 0, 300);
    gradientStroke1.addColorStop(0, '#008cff');
    gradientStroke1.addColorStop(1, 'rgba(22, 195, 233, 0.1)');

    var myChart = new Chart(ctx3, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Revenue',
            data: [3, 30, 10, 10, 22, 12, 5],
            pointBorderWidth: 2,
            pointHoverBackgroundColor: gradientStroke1,
            backgroundColor: gradientStroke1,
            borderColor: gradientStroke1,
            borderWidth: 3,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
          display: false,
        },
        tooltips: {
          displayColors: false,
          mode: 'nearest',
          intersect: false,
          position: 'nearest',
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
      },
    });

    // chart 4

    const canvas4 = <HTMLCanvasElement>document.getElementById('chart4');
    var ctx4 = canvas4.getContext('2d');

    var gradientStroke1 = ctx4.createLinearGradient(0, 0, 0, 300);
    gradientStroke1.addColorStop(0, '#ee0979');
    gradientStroke1.addColorStop(1, '#ff6a00');

    var gradientStroke2 = ctx4.createLinearGradient(0, 0, 0, 300);
    gradientStroke2.addColorStop(0, '#283c86');
    gradientStroke2.addColorStop(1, '#39bd3c');

    var gradientStroke3 = ctx4.createLinearGradient(0, 0, 0, 300);
    gradientStroke3.addColorStop(0, '#7f00ff');
    gradientStroke3.addColorStop(1, '#e100ff');

    var myChart = new Chart(ctx4, {
      type: 'pie',
      data: {
        labels: ['Completed', 'Pending', 'Process'],
        datasets: [
          {
            backgroundColor: [
              gradientStroke1,
              gradientStroke2,
              gradientStroke3,
            ],

            hoverBackgroundColor: [
              gradientStroke1,
              gradientStroke2,
              gradientStroke3,
            ],

            data: [50, 50, 50],
            borderWidth: [1, 1, 1],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        cutoutPercentage: 0,
        legend: {
          position: 'bottom',
          display: false,
          labels: {
            boxWidth: 8,
          },
        },
        tooltips: {
          displayColors: false,
        },
      },
    });

    // chart 5

    const canvas5 = <HTMLCanvasElement>document.getElementById('chart5');
    var ctx5 = canvas5.getContext('2d');

    var gradientStroke1 = ctx5.createLinearGradient(0, 0, 0, 300);
    gradientStroke1.addColorStop(0, '#f54ea2');
    gradientStroke1.addColorStop(1, '#ff7676');

    var gradientStroke2 = ctx5.createLinearGradient(0, 0, 0, 300);
    gradientStroke2.addColorStop(0, '#42e695');
    gradientStroke2.addColorStop(1, '#3bb2b8');

    var myChart = new Chart(ctx5, {
      type: 'bar',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [
          {
            label: 'Clothing',
            data: [40, 30, 60, 35, 60, 25, 50, 40],
            borderColor: gradientStroke1,
            backgroundColor: gradientStroke1,
            hoverBackgroundColor: gradientStroke1,
            pointRadius: 0,
            fill: false,
            borderWidth: 1,
          },
          {
            label: 'Electronic',
            data: [50, 60, 40, 70, 35, 75, 30, 20],
            borderColor: gradientStroke2,
            backgroundColor: gradientStroke2,
            hoverBackgroundColor: gradientStroke2,
            pointRadius: 0,
            fill: false,
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
          display: false,
          labels: {
            boxWidth: 8,
          },
        },
        scales: {
          xAxes: [
            {
              // barPercentage: 0.5,
            },
          ],
        },
        tooltips: {
          displayColors: false,
        },
      },
    });
  }
}

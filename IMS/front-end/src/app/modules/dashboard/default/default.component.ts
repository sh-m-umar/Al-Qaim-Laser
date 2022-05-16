import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { FormGroup, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { StatsService } from 'src/app/services/stats.service';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  
  public stats = {
    customersCount: 0,
    newCustomersCount: 0,
    ordersCount: 0,
    productsSold: 0
  };

  public trendingProducts = {
    data: [1, 2, 3, 4],
    lable: ['-', '-', '-', '-']
  };
  
  public amountBalance = {
    amountTaken: 3,
    totalBalance: 2,
    totalSalesAmount: 1
  };
  
  public dateRange = new FormGroup({
    from: new FormControl(new Date().toISOString()),
    to: new FormControl(new Date().toISOString()),
  });
  
  constructor(
    private statsService: StatsService
  ) {}

  ngOnInit(): void {

    this.dateRange.setValue({
      from: moment().subtract(7,'d').format('YYYY-MM-DD'), 
      to: moment().format('YYYY-MM-DD')
    });

    this.getStats(this.dateRange.value);
    this.setTopProductsChartData(this.dateRange.value);
    this.setAmountBalanceChartData(this.dateRange.value);
  }

  filterData() {
    if(moment(this.dateRange.value.to).format('YYYY-MM-DD') !== 'Invalid date'){
      let dataRange = {
        from: moment(this.dateRange.value.from).format('YYYY-MM-DD'),
        to: moment(this.dateRange.value.to).format('YYYY-MM-DD')
      };
      this.getStats(dataRange);
      this.setTopProductsChartData(dataRange);
      this.setAmountBalanceChartData(dataRange);
    }
  }


  setCharts(){
    // const canvas3 = <HTMLCanvasElement>document.getElementById('chart3');
    // var ctx3 = canvas3.getContext('2d');

    // var gradientStroke1 = ctx3.createLinearGradient(0, 0, 0, 300);
    // gradientStroke1.addColorStop(0, '#008cff');
    // gradientStroke1.addColorStop(1, 'rgba(22, 195, 233, 0.1)');

    // var myChart = new Chart(ctx3, {
    //   type: 'line',
    //   data: {
    //     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //     datasets: [
    //       {
    //         label: 'Revenue',
    //         data: [3, 30, 10, 10, 22, 12, 5],
    //         pointBorderWidth: 2,
    //         pointHoverBackgroundColor: gradientStroke1,
    //         backgroundColor: gradientStroke1,
    //         borderColor: gradientStroke1,
    //         borderWidth: 3,
    //       },
    //     ],
    //   },
    //   options: {
    //     maintainAspectRatio: false,
    //     legend: {
    //       position: 'bottom',
    //       display: false,
    //     },
    //     tooltips: {
    //       displayColors: false,
    //       mode: 'nearest',
    //       intersect: false,
    //       position: 'nearest',
    //       xPadding: 10,
    //       yPadding: 10,
    //       caretPadding: 10,
    //     },
    //   },
    // });
  }

  setTopProductsChartData(dateRange){

    this.statsService.getTopSellingProducts(dateRange).subscribe({
      next: (res: any) => { 

        if(res.saleRecord){
          this.trendingProducts.data = res.saleRecord.map((ele) => { return ele.count});
          this.trendingProducts.lable = res.saleRecord.map((ele) => { return ele.product[0].name});
          this.setTopProductsChart(this.trendingProducts.lable, this.trendingProducts.data);
        } else {
          this.setTopProductsChart(this.trendingProducts.lable, this.trendingProducts.data);
        }
      },
      error: (error) => {
        console.log("Error in Dashboard Stats: ", error); 
      },
    });
  }

  setTopProductsChart(lables, data){
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
        labels: lables,
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
            data: data,
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
  }

  setAmountBalanceChartData(dateRange){

    var data = [];
    this.statsService.getAmountBalance(dateRange).subscribe({
      next: (res: any) => { 
        if(res.stats){
          this.amountBalance.amountTaken = res.stats.amountTaken;
          this.amountBalance.totalBalance = res.stats.totalBalance;
          this.amountBalance.totalSalesAmount = res.stats.totalSalesAmount;
          data = [res.stats.totalSalesAmount, res.stats.amountTaken, res.stats.totalBalance]
          this.setAmountBalanceChart(data);
        } else {
          this.setAmountBalanceChart([1, 2, 3]);
        }
      },
      error: (error) => {
        console.log("Error in Dashboard Stats: ", error); 
      },
    });
    
  }

  setAmountBalanceChart(data){

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
        labels: ['Total Sales', 'Amount Collected', 'Balance'],
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

            data: data,
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
  }

  getStats(dateRange){
    this.statsService.getDashboardStats(dateRange).subscribe({
      next: (res: any) => { 
        this.stats.customersCount = res.stats.customersCount;
        this.stats.newCustomersCount = res.stats.newCustomersCount;
        this.stats.ordersCount = res.stats.ordersCount;
        this.stats.productsSold = res.stats.productsSold;
      },
      error: (error) => {
        console.log("Error in Dashboard Stats: ", error); 
      },
    });
  }

}

import { ApexOptions } from 'apexcharts';

import React, { useEffect, useState } from 'react';



export const TotalRevenueOptions: ApexOptions = {

  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: ['#475BE8', '#CFC8FF'],
  plotOptions: {
    bar: {
      borderRadius: 6,
      horizontal: false,
      columnWidth: '65%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ['transparent'],
    width: 5,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sept','Oct','Nov','Dec'],
  },
  yaxis: {
    title: {
      text: 'Rupees ',
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
  },
  tooltip: {
    y: {
      formatter(val: number) {
        return `Rupees ${val} `;
      },
    },
  },
};

export const TotalRevenueSeries =[
 {
 

    data: [95, 84, 72, 44, 108, 108, 47,67,34,120,56,190],
  },
];


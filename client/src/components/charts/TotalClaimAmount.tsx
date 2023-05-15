import ReactApexChart from 'react-apexcharts';
import { Box, Typography, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { TotalRevenueOptions } from './Charts.config'

import axios from 'axios';

const TotalClaimAmount = () => {
  const [arrayData, setArrayData] = useState<any[]>([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/claims/total');
        const responseData = response.data;
        setAmount(responseData);

        const response1 = await axios.get('/claims/claim-amount-by-month');
        const responseData1 = response1.data;
        setArrayData(responseData1);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const series = [
    {
      name: 'Series 1',
      data: arrayData,
    },
  ];

  return (
    <Box
      p={4}
      flex={0.5}
      bgcolor="#fcfcfc"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={20} fontWeight={6000} color="#11142d">
        Total Claim Amount
      </Typography>

      <Stack my="20px" direction="row" gap={4}>
        <Typography fontSize={16}>Rupees </Typography>
        <Typography fontSize={16}>{amount}</Typography>
        <Stack direction="column" alignItems="left" gap={1}></Stack>
      </Stack>
      <ReactApexChart
        series={series}
        type="bar"
        height={310}
        width={500}
        options={TotalRevenueOptions}
      />
    </Box>
  );
};

export default TotalClaimAmount;

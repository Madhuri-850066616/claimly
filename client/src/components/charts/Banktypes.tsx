import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Bankprecentage from 'constants/topbanks';

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}

const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
  <Box width="100%">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography fontSize={16} fontWeight={500} color="#11142d">
        {title}
      </Typography>
      <Typography fontSize={16} fontWeight={500} color="#11142d">
        {percentage}%
      </Typography>
    </Stack>
    <Box
      mt={2}
      position="relative"
      width="100%"
      height="8px"
      borderRadius={1}
      bgcolor="#e4e8ef"
    >
      <Box
        width={`${percentage}%`}
        bgcolor={color}
        position="absolute"
        height="100%"
        borderRadius={1}
      />
    </Box>
  </Box>
);

const Banktypes = () => {
  const [data, setData] = useState<ProgressBarProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const banks = await Bankprecentage();
        setData(banks);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      p={4}
      bgcolor="#fcfcfc"
      id="chart"
      minWidth={490}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={20} fontWeight={600} color="#11142d">
         Top 5 Claimed Banks
      </Typography>
      <Stack my="20px" direction="column" gap={4}>
        {data.map((bar: ProgressBarProps) => (
          <ProgressBar key={bar.title} {...bar} />
        ))}
      </Stack>
    </Box>
  );
};

export default Banktypes;

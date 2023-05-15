import React, { useEffect, useState } from 'react';
import axios from 'axios';
const getRandomColor = (): string => {
    const colors = ['#6C5DD3', '#7FBA7A', '#FFCE73', '#FFA2C0', '#F45252'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };


interface Bank {
  bank_name: string;
  percentage: number;
}

const fetchBankData = async (): Promise<Bank[]> => {
  try {
    const response = await axios.get<Bank[]>('claims/calculatepercentage');
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

const Bankprecentage = async (): Promise<{
  title: string;
  percentage: number;
  color: string;
}[]> => {
  const banks = await fetchBankData();

  const updatedBankPercentage = banks.map((bank) => ({
    title: bank.bank_name,
    percentage: bank.percentage,
    color: getRandomColor(),
  }));

  const staticBanks = [
    {
      title: 'HDFC',
      percentage: 40,
      color: '#7FBA7A',
    },
    {
      title: 'CANARA',
      percentage: 50,
      color: '#FFCE73',
    },
    {
      title: 'BANK OF BARODA',
      percentage: 80,
      color: '#FFA2C0',
    },
    {
      title: 'KOTAK MAHINDRA',
      percentage: 15,
      color: '#F45252',
    },
    {
      title: 'SBI',
      percentage: 15,
      color: '#F45252',
    },
    {
      title: 'SIB',
      percentage: 15,
      color: '#F45252',
    },
    {
      title: 'OTHERS',
      percentage: 15,
      color: '#F45252',
    },
  ];

  return banks.length > 0 ? updatedBankPercentage : staticBanks;
};

export default Bankprecentage;

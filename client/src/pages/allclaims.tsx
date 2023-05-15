import React from 'react'
import {Add} from '@mui/icons-material';
import { useTable } from '@refinedev/core';
import {Box,Stack,Typography} from '@mui/material'
import { useNavigation } from "@refinedev/core";
import { CustomButton} from "components";
import {ClaimCard} from "components"

import { Edit } from '@mui/icons-material';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import { useNavigate } from "react-router-dom";

import {EditClaims,CreateClaims,Claimdetails} from '../pages'


import { BrowserRouter as Router, Route } from 'react-router-dom';

const AllClaims = () => {
  const navigate = useNavigate();
  const {
    tableQueryResult:{data,isLoading,isError}

  }=useTable();

  const allclaims=data?.data??[];
  if(isLoading)return <Typography>Loading...</Typography>
  if(isError) return <Typography>Error...</Typography>


  console.log(data);
  return (
    <Box>
    <Stack direction="row"
    justifyContent="space-between"
    alignItems="center" >
      <Typography fontSize={25} fontWeight={700} color="#11142d"
      > ALL CLAIMS </Typography>
      
      {/* <CustomButton 
      title='Approve Claims'
      handleClick={ ()=> navigate("/claims/claim/edit")}
      backgroundColor="#475be8"
      color='#fcfcfc'
      icon={<TaskOutlinedIcon/>}
      />
      <CustomButton 
      title='Create Claims'
      handleClick={ ()=> navigate("/claims/claim/create")}
      backgroundColor="#475be8"
      color='#fcfcfc'
      icon={<Add/>}
      /> */}
   
    </Stack>
    <Box mt="20px" sx={{display:'flex',flexWrap:'wrap',gap:3}}>
      {allclaims.map((claim)=>(
    <ClaimCard
    key={claim._id}
    _id={claim._id}
    user_id={claim.user_id}
    admin_id={claim.admin_id}
    insurance_type={claim.insurance_type}
    bank_name={claim.bank_name}
    Comments={claim.Comments}
    status={claim.status}
    claims_proof={claim.claims_proof}
    aadhar_proof={claim.aadhar_proof}

    />
     
      )
      )}

    </Box>
    </Box>
  )
}

export default AllClaims
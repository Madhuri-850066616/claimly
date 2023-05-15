
import React from 'react';

import { useGetIdentity, useShow } from '@refinedev/core';
import { useParams, useNavigate } from 'react-router-dom';
import { Edit } from '@mui/icons-material';
import { CustomButton } from 'components';
import axios from 'axios';
import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import {Box,Typography,FormControl,FormHelperText,TextField,TextareaAutosize,Stack,Button,MenuItem,Select} from "@mui/material"

const EditClaims = () => {




  const navigate = useNavigate();
  const { id } = useParams();
  const { queryResult } = useShow();
  const { data, isLoading, isError } = queryResult;
  const claimdetails = data?.data ?? {};

  const status=claimdetails.status
  console.log(status)

  
  const [selectedStatus, setSelectedStatus] = useState(claimdetails.status);
  const [enteredComments, setEnteredComments] = useState(claimdetails.Comments);

  const handleChangeStatus = (event: SelectChangeEvent<any>) => {
    setSelectedStatus(event.target.value as string);
  };
  
  const handleChangeComments = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredComments(event.target.value);
  };
  

  const updateinfo= async () => {
    try {
      const updatedData = {
        status: selectedStatus,
        Comments: enteredComments,
      };
      console.log("where",selectedStatus)
     
      await axios.put(`/claims/claim/adm/${claimdetails._id}`, updatedData);
      navigate('/claims/claim');
    } catch (error) {
      console.error(error);
    }
  }
  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>ERROR</div>;
 console.log(claimdetails._id)









  return (

    <Box borderRadius="15px" padding="20px" bgcolor="fcfcfc" width="fit-content">
          <Typography fontSize={25} fontWeight={700} color="11142d">
       EDIT
    </Typography>
    
    <Stack direction="row" gap="8px">
    <Box mt="20px" display="flex" flexDirection={{ xs: 'column', lg: 'row' }} gap={4}>
    <Box flex={1} maxWidth={500}>
      <img
        src={claimdetails.claims_proof}
        height={400}
        width={400}
        style={{  borderRadius: '10px' }}
      />
    </Box>
    <Box flex={1} maxWidth={500}>
      <img
        src={claimdetails.aadhar_proof}
        height={400}
        width={400}
        style={{  borderRadius: '10px'}}
      />
    </Box>
    </Box>
    </Stack>
    <Box>
    
    <Stack gap="15px">

    <FormHelperText sx={{ fontSize: 16 }}>Change the status</FormHelperText>
           <Select
           variant="outlined"
           color="info"
           value={selectedStatus}
           onChange={handleChangeStatus}
           inputProps={{'aria-label':'Without label'}}
            >
             
             <MenuItem value="Initiated">Initiated</MenuItem>
             
             <MenuItem value="Verification-Completed">Verification-Completed</MenuItem>
             <MenuItem value="Rejected">Rejected</MenuItem>


           </Select>
           <FormControl>
  <FormHelperText sx={{ fontSize: 16 }}>Add Comments</FormHelperText>
  <TextField
    fullWidth
    id="outlined-basic"
    color="info"
    variant="outlined"
   
    value={enteredComments}
    onChange={handleChangeComments}
    
  />

</FormControl>
<CustomButton
        title="Submit Changes"
        backgroundColor='#475BE8'
        color="#fcfcfc"
        handleClick={()=>{
         updateinfo()
            
        }

        }
        />
</Stack>
</Box>

</Box>

   
     
  );

  };
export default EditClaims;
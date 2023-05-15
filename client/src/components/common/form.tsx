import React from 'react'
import {Box,Typography,FormControl,FormHelperText,TextField,TextareaAutosize,Stack,Button,MenuItem,Select} from "@mui/material"
import {FormProps} from 'interfaces/common';


import CustomButton from './custombuttons';
const Form = ({type,register,handleSubmit,handleImageChange,handleImageChangeaa,formLoading,onFinishHandler,claims_proof,aadhar_proof}:FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a Claim

        <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc" >
          <form style={{marginTop:'20px', width:'100%',display:'flex',flexDirection:'column',gap:'20px'}}
         onSubmit={handleSubmit(onFinishHandler)}
         >
           <FormControl>
             <FormHelperText>Enter the bank name</FormHelperText>
             <TextField
             fullWidth
             id="outlined-basic"
             color='info'
             variant='outlined'
             {
               ...register('bank_name')
             }
             />
           </FormControl>
           <FormControl>
             <FormHelperText>Enter the insurance_type</FormHelperText>
             <TextField
             fullWidth
             id="outlined-basic"
             color='info'
             variant='outlined'
             {
               ...register('insurance_type')
             }
             />
           </FormControl>
           <FormControl>
             <FormHelperText>Enter the policy_type</FormHelperText>
             <TextField
             fullWidth
             id="outlined-basic"
             color='info'
             variant='outlined'
             {
               ...register('policy_type')
             }
             />
           </FormControl>
           <FormControl>
             <FormHelperText>Enter the uin</FormHelperText>
             <TextField
             fullWidth
             id="outlined-basic"
             color='info'
             variant='outlined'
             {
               ...register('uin')
             }
             />
           </FormControl>
           <FormControl>
             <FormHelperText>Enter the Account Number</FormHelperText>
             <TextField
             fullWidth
             id="outlined-basic"
             color='info'
             variant='outlined'
             {
               ...register('account_number')
             }
             />
           </FormControl>
           <FormControl>
             <FormHelperText>Enter the bank branch</FormHelperText>
             <TextField
             fullWidth
             id="outlined-basic"
             color='info'
             variant='outlined'
             {
               ...register('bank_branch')
             }
             />
           </FormControl>
           <FormControl>
             <FormHelperText>Enter the hospital_name</FormHelperText>
             <TextField
             fullWidth
             id="outlined-basic"
             color='info'
             variant='outlined'
             {
               ...register('hospital_name')
             }
             />
           </FormControl>
           <FormControl>
             <FormHelperText>Enter the doctor name</FormHelperText>
             <TextField
             fullWidth
             id="outlined-basic"
             color='info'
             variant='outlined'
             {
               ...register('doctor name')
             }
             />
           </FormControl>
           <FormHelperText>Enter the status</FormHelperText>
           <Select
           variant="outlined"
           color="info"
           displayEmpty
           inputProps={{'aria-label':'Without label'}}
           defaultValue="Initiated"
           {...register('status')}
           >
             <MenuItem value="Initiated">Initiated</MenuItem>
             <MenuItem value="In-Progress">In-Progress</MenuItem>
             <MenuItem value="Verification-Completed">Verification-Completed</MenuItem>


           </Select>
            <Stack direction="column" gap={2}>
            <Stack direction="row" gap={2}>
            <Typography>Claims proof</Typography>
            <Button component="label" sx={{width:'fit-content'}}>UPLOAD
            <input 
            accept="image/*"
            type="file"
            onChange={(e)=>{
              //@ts-ignore
              handleImageChange(e.target.files![0])
              console.log("image change called")
            }
          }
          
            />
            </Button>
            <Typography fontSize={14} sx={{wordBreak:'break-all'}}>{claims_proof?.name}</Typography>
            </Stack>

            <Typography>aadhar proof</Typography>
            <Button component="label" sx={{width:'fit-content'}}>UPLOAD</Button>
            <input 
            accept="image/*"
            type="file"
            onChange={(e)=>{
              //@ts-ignore
              handleImageChangeaa(e.target.files![0])
            }
          }
            ></input>
            <Typography fontSize={14} sx={{wordBreak:'break-all'}}>{aadhar_proof?.name}</Typography>

            
          
          
          </Stack>
          <CustomButton
                        type="submit"
                        title={formLoading ? "Submitting..." : "Submit"}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                    />
         </form>

        </Box>

      </Typography>
    </Box>
  )
}

export default Form
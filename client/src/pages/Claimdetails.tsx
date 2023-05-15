import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import { useGetIdentity, useShow } from '@refinedev/core';
import { useParams, useNavigate } from 'react-router-dom';
import { Edit } from '@mui/icons-material';
import { CustomButton } from 'components';

const Claimdetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { queryResult } = useShow();
  const { data, isLoading, isError } = queryResult;
  const claimdetails = data?.data ?? {};

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>ERROR</div>;
  console.log(claimdetails._id)

  return (
    <Box borderRadius="15px" padding="20px" bgcolor="fcfcfc" width="fit-content">
      <Typography fontSize={25} fontWeight={700} color="11142d">
        Details
      </Typography>
      <Stack direction="column" gap='4px'>
      <Box mt="20px" display="flex" flexDirection={{ xs: 'column', lg: 'row' }} gap={4}></Box>
    
      <Box flex={1} maxWidth={764}>
        <Typography fontSize={22} fontWeight={800}>Claim -Details</Typography>
        <img
          src={claimdetails.claims_proof}
          height={546}
          style={{ objectFit: 'cover', borderRadius: '10px' }}
        />
      

      </Box>
      <Box>
        <Typography fontSize={22} fontWeight={800}>Aadhar -Details</Typography>
        <img src={claimdetails.aadhar_proof} alt="Aadhar Proof" />

        {/* {claimdetails.aadhar_proof.endsWith('.pdf') ? (
          <iframe src={claimdetails.aadhar_proof} width="100%" height="600px">
            This browser does not support PDFs. Please download the PDF to view it.
          </iframe>
        ) : null} */}
       
       
      </Box>
      </Stack>


      <Box mt="15px">
        <Stack direction="column" gap={6}>
        { claimdetails.insurance_type ?(
          <Stack direction="row" gap={4}>
          
            <Typography fontSize={22} fontWeight={800}>
              Bank-Name:
            </Typography>
            <Typography fontSize={18}>{claimdetails.bank_name}</Typography>
          </Stack>
          ):(
            <Typography></Typography>
          )}
       {claimdetails.insurance_type && (
            <Stack direction="row" gap={4}>
              <Typography fontSize={22} fontWeight={800}>
                Insurance-Type:
              </Typography>
              <Typography fontSize={18}>{claimdetails.insurance_type}</Typography>
            </Stack>
          )}
          { claimdetails.policy_number &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
             Policy-Number:
            </Typography>
            <Typography fontSize={18}>{claimdetails.policy_number}</Typography>
          </Stack>
            )}
          { claimdetails.uin &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
            UIN:
            </Typography>
            <Typography fontSize={18}>{claimdetails.uin}</Typography>
          </Stack>
        
           
          )}
          { claimdetails.nominee_name &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
            Nominee-Name:
            </Typography>
            <Typography fontSize={18}>{claimdetails.nominee_name}</Typography>
          </Stack>
         
          )}
          { claimdetails.nominee_relation &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
            Nominee-Relation:
            </Typography>
            <Typography fontSize={18}>{claimdetails.nominee_relation}</Typography>
          </Stack>

        
        )
        }
        { claimdetails.account_number &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
            Account Number:
            </Typography>
            <Typography fontSize={18}>{claimdetails.account_number}</Typography>
          </Stack>

       
        )
        }
             { claimdetails.bank_branch &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
              Bank Branch:
            </Typography>
            <Typography fontSize={18}>{claimdetails.bank_branch}</Typography>
          </Stack>

        
        )
        }
           { claimdetails.ifsc_code &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
              IFSC CODE:
            </Typography>
            <Typography fontSize={18}>{claimdetails.ifsc_code}</Typography>
          </Stack>

        
        )
        }
           { claimdetails.aadhar_number &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
              Aadhar Number:
            </Typography>
            <Typography fontSize={18}>{claimdetails.aadhar_number}</Typography>
          </Stack>

        
        )
        }
          { claimdetails.policy_type &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
               Policy Type:
            </Typography>
            <Typography fontSize={18}>{claimdetails.policy_type}</Typography>
          </Stack>

        
        )
        }
          { claimdetails.cause_of_death &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
              Cause of Death:
            </Typography>
            <Typography fontSize={18}>{claimdetails.cause_of_death}</Typography>
          </Stack>

     
        )
        }
          { claimdetails.dod &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
              Date Of Death:
            </Typography>
            <Typography fontSize={18}>{claimdetails.dod}</Typography>
          </Stack>

   
        )
        }
          { claimdetails.fir_number &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
              Fir Number:
            </Typography>
            <Typography fontSize={18}>{claimdetails.fir_number}</Typography>
          </Stack>
        )
        }
          { claimdetails.vehicle_damage &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
              Vehicle Damage:
            </Typography>
            <Typography fontSize={18}>{claimdetails.vehicle_damage}</Typography>
          </Stack>
        )
        }
          { claimdetails.chassis_number &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
              Chassis-Number
            </Typography>
            <Typography fontSize={18}>{claimdetails.chassis_number}</Typography>
          </Stack>

        
        )
        }
          { claimdetails.vehicle_number &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
              Vehicle Number:
            </Typography>
            <Typography fontSize={18}>{claimdetails.vehicle_number}</Typography>
          </Stack>
        )
        }
          { claimdetails.opd_number &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
              Opd Number:
            </Typography>
            <Typography fontSize={18}>{claimdetails.opd_number}</Typography>
          </Stack>
        )
        }
          { claimdetails.hospital_name &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
              Hospital-Name:
            </Typography>
            <Typography fontSize={18}>{claimdetails.hospital_name}</Typography>
          </Stack>
        )
        }
          { claimdetails.doa &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
              Date of Admission:
            </Typography>
            <Typography fontSize={18}>{claimdetails.doa}</Typography>
          </Stack>
        )
        }
          { claimdetails.doctor_name &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
              Doctor Name:
            </Typography>
            <Typography fontSize={18}>{claimdetails.doctor_name}</Typography>
          </Stack>

        )
        }
          { claimdetails.claim_amount &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
              Claim Amount:
            </Typography>
            <Typography fontSize={18}>{claimdetails.claim_amount}</Typography>
          </Stack>

        )
        }
          { claimdetails.Comments &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
              Comments:
            </Typography>
            <Typography fontSize={18}>{claimdetails.Comments}</Typography>
          </Stack>
        )
        }
          { claimdetails.status &&(
          <Stack direction="row" gap={4}>
            <Typography fontSize={22} fontWeight={800}>
              Status:
            </Typography>
            <Typography fontSize={18}>{claimdetails.status}</Typography>
          </Stack>

        )
        }
        
      
        </Stack>
      </Box>

      <Stack direction={"column"} gap="80px" >


      <CustomButton
        title="EDIT"
        backgroundColor='#475BE8'
        color="#fcfcfc"
        icon={<Edit/>}
        handleClick={()=>{
            
            navigate(`/claims/claim/edit/${claimdetails._id}`);
        }

        }
        />
      </Stack>
    </Box>
    
  );
};

export default Claimdetails;

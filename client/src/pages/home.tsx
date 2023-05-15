
import React, { useEffect, useState } from 'react';
import axios from 'axios'

import { Typography,Box,Stack } from '@mui/material'
import {
  Piechart,
 
  TotalClaimAmount,
  Banktypes

} from 'components'


 

const Home = () => {
  const [claims, setclaims] = useState(0);
  const [customers,setcustomers]=useState(0);
  const[bank,setbanks]=useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/claims/count');
        const responseData = response.data;
        setclaims(responseData);
        const temp1=await axios.get('users/users/count')
        const temp1data=temp1.data;
        setcustomers(temp1data)
        const temp2=await axios.get('/claims/unique')
        const temp2data=temp2.data;
        setbanks(temp2data)

      } catch (error) {
        
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);


  return (
  <Box>
<Typography fontSize={25} fontWeight={700} color="#11142D">
  Dashboard
</Typography>
<Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
<Piechart
title="Total Claims"
value={claims}
series={[claims,500]}
colors={['#475be8' , '#e4e8ef']}
/>
<Piechart
title="Partnered Banks"
value={8}
series={[8,200]}
colors={['#375be8' , '#e4e8ef']}
/>
<Piechart
title="Total customers"
value={customers}
series={[customers,500]}
colors={['#475be9' , '#e4e9ef']}
/>
</Box>

<Stack mt="5px"  width="100%"
direction={{xs:'column',lg:'row'}} gap={4}>
  
  <TotalClaimAmount/>
    <Banktypes/>
    </Stack>
  </Box>
  )
}

export default Home
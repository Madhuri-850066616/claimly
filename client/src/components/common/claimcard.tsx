import { FormatUnderlined, Place } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
    Typography,
    Box,
    Card,
    CardMedia,
    CardContent,
    Stack,
} from "@mui/material";

import { ClaimCardProps } from "interfaces/claims";

const ClaimCard = ({
      _id,
     user_id,
    admin_id,
    insurance_type,
    bank_name,
  Comments,
  status,
  claims_proof,

}: ClaimCardProps) => {
    return (
        <Card
            component={Link}
            to={`/claims/claim/show/${_id}`}
            sx={{
                maxWidth: "330px",
                padding: "10px",
                "&:hover": {
                    boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.1)",
                },
                cursor: "pointer",
            }}
            elevation={0}
        >
            <CardMedia
                component="img"
                width="100%"
                height={210}
                image={claims_proof}
                alt="card image"
                sx={{ borderRadius: "10px" }}
            />
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "10px",
                    paddingX: "5px",
                }}
            >
                <Stack direction="column" gap={1}>
                    <Stack direction="row" gap={0.5}>
                    <Typography fontSize={16} fontWeight="bold" color="#11142d"  >
                       Claim-Id:
                    </Typography>
                    <Typography fontSize={14} fontWeight={300} color="#11142d" >
                        {_id}
                    </Typography>
                    </Stack>
                    <Stack direction="row" gap={1} alignItems="flex-start">
                        <Typography fontSize={16} color="#11142d">
                           User-Id:  {user_id}
                        </Typography>
                    </Stack>
                </Stack>
              
              <Stack direction="column" gap={1}>
                <Typography>
                    Bank:  {bank_name}
                </Typography>
                <Typography>
                    Insurance-Type: {insurance_type}
                </Typography>
                <Typography fontSize={16} fontWeight="bold"  >
                    Status:  {status}
                </Typography>
                <Typography>
                    Comments: {Comments}
                </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default ClaimCard;
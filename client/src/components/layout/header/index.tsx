import React from "react";
import { useGetIdentity } from "@refinedev/core";
import { AppBar, Avatar, Stack, Toolbar, Typography } from "@mui/material";


export const Header: React.FC = () => {
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
      
    });
    const showUserInfo = user && (user.name || user.avatar || user.email);

    return (
        <AppBar
            color="default"
            position="sticky"
            elevation={0}
            sx={{ background: "#fcfcf" }}
        >
            <Toolbar>
                <Stack
                    direction="row"
                    width="100%"
                    justifyContent="flex-end"
                    alignItems="center"
                    gap="4"
                >
                    {showUserInfo && (
                        <Stack direction="row" gap="16px" alignItems="center" >
                            {user.avatar && (
                                <Avatar src={user?.avatar} alt={ user?.name }  />
                            )}
                            {user.name && (
                                <Typography variant="subtitle2">
                                    {user?.name}
                                    <br />
                                    {user?.email}
                                </Typography>
                            )}
                        </Stack>
                    )}
                </Stack>
            </Toolbar>
        </AppBar>
    );
};
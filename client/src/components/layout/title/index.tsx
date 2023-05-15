import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import { Button } from "@mui/material";

import { logo, logo1, logo2 } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={logo2} alt="Claimly" width="58px" />
                ) : (
                    <img src={logo1} alt="Claimly" width="200px" height="80px"  />
                )}
            </Link>
        </Button>
    );
};
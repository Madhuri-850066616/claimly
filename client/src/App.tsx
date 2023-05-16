import React from "react";
import { MuiInferencer } from "@refinedev/inferencer/mui";
import { BrowserRouter as Router } from "react-router-dom";

import 'index.css'


import {
    
    Refine,
    Authenticated,
    LegacyAuthProvider as AuthProvider,
} from "@refinedev/core";
import {
    notificationProvider,
    RefineSnackbarProvider,
    ReadyPage,
    ErrorComponent,
    ThemedLayout,

} from "@refinedev/mui";
import { CssBaseline, GlobalStyles } from "@mui/material";
 

import dataProvider from "@refinedev/simple-rest";
import routerProvider from "@refinedev/react-router-v6/legacy";
import axios, { AxiosRequestConfig } from "axios";

import { Title, Sider, Layout, Header } from "components/layout"
//import { ColorModeContextProvider } from "contexts";
import { CredentialResponse } from "interfaces/google";
import { parseJwt } from "utils/parse-jwt";

import { AccountCircleOutlined,ChatBubbleOutline ,PeopleAltOutlined,StarBorderOutlined,MonetizationOnOutlined, Person2Outlined,AnalyticsOutlined,HandshakeOutlined, Label, Home} from "@mui/icons-material";
import { Login } from "pages/Login"
import {
  home,
  MyProfile,
  allclaims,
  Allcustomers,
  EditClaims,
  CreateClaims,
  Claimdetails

} from "pages";

import { ColorModeContextProvider } from "contexts/color-mode";
const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (request.headers) {
        request.headers["Authorization"] = `Bearer ${token}`;
    } else {
        request.headers = {
            Authorization: `Bearer ${token}`,
        };
    }

    return request;
});


function App() {
    const authProvider: AuthProvider = {
        login: async ({ credential }: CredentialResponse) => {
            const profileObj = credential ? parseJwt(credential) : null;

            if (profileObj) {
                const response = await fetch(
                    "/admin/adm",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            name: profileObj.name,
                            email: profileObj.email,
                            avatar: profileObj.picture,
                        }),
                       
                    },
                    
                );
                

                const data = await response.json();

                if (response.status === 200) {
                    
                    localStorage.setItem(
                        "user",
                        JSON.stringify({
                            ...profileObj,
                            avatar: profileObj.picture,
                            userid: data._id,
                            email:data.email
                        }),
                    );
                }
                // else if(response.status!==200)
                // {
                //     alert("you are not the Admin")
                //     return Promise.reject();

                // }
                 else {
                    alert("Ur not the admin ")
                   return Promise.reject();
                }
            }
            localStorage.setItem("token", `${credential}`);

            return Promise.resolve();
        },
        logout: () => {
            const token = localStorage.getItem("token");

            if (token && typeof window !== "undefined") {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                axios.defaults.headers.common = {};
                window.google?.accounts.id.revoke(token, () => {
                    return Promise.resolve();
                });
            }

            return Promise.resolve();
        },
        checkError: () => Promise.resolve(),
        checkAuth: async () => {
            const token = localStorage.getItem("token");

            if (token) {
                return Promise.resolve();
            }
            return Promise.reject();
        },

        getPermissions: async () => null,
        getUserIdentity: async () => {
            const user = localStorage.getItem("user");
            if (user) {
                
                return Promise.resolve(JSON.parse(user));
            }
        },
    };



    return (
        <ColorModeContextProvider>
            
            <CssBaseline />
            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
            <RefineSnackbarProvider>
                <Refine
                     dataProvider={dataProvider("https://random-jl1z.onrender.com")}

                    notificationProvider={notificationProvider}
                    ReadyPage={ReadyPage}
                    catchAll={<ErrorComponent />}
                    resources={[
                      {
                        name: "claims/claim",
                        list: allclaims,
                        create: CreateClaims,
                        show:Claimdetails,
                        edit: EditClaims,
                        options: { label: "All-Claim" },
                        icon: <MonetizationOnOutlined />
                      },
                      {
                        name: "customers",
                        list: Allcustomers,
                        icon:<PeopleAltOutlined></PeopleAltOutlined>
                      },
                      
                    //   {
                    //     name: "MyProfile",
                    //     list: MyProfile,
                    //     options:{label:"My-Profile"},
                    //     icon:<Person2Outlined></Person2Outlined>
                    //   },
                      {
                        name:"claims",
                        options:{label:"Create-claim"},
                        icon:<AnalyticsOutlined></AnalyticsOutlined>
                      }
                    
                    ]}
      
                    Title={Title}
                    Sider={Sider}
                    Layout={Layout}
                    Header={Header}
                    legacyRouterProvider={routerProvider}
                    legacyAuthProvider={authProvider}
                    LoginPage={Login}
                    DashboardPage={home}
                />
            </RefineSnackbarProvider>
        </ColorModeContextProvider>
    );
}

export default App;
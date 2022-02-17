import React from "react";
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import { Button, Grid } from "@mui/material";
import { createMember } from "../service/apiservice";

export default function Form(props){
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        ssn: ""
    })

    const change = (event) => {
        setUserData({
            ...userData,
            [event.target.id] : event.target.value
        })
    }

    const submitData = () => {
        console.log(userData);
        props.submitData(userData);
        setUserData({
            firstName: "",
            lastName: "",
            address: "",
            ssn: ""
        })
    }

    return(
        <Grid container spacing={2}>
            <Grid item>
                <TextField
                    required
                    id="firstName"
                    label="Name"
                    value =  { userData.firstName } 
                    onChange={change}
                />
            </Grid>
            <Grid item>
                <TextField
                    required
                    id="lastName"
                    label="Last name"
                    value =  { userData.lastName } 
                    onChange={change}
                />
            </Grid>
            <Grid item>
                <TextField
                    required
                    id="address"
                    label="Address"
                    value =  { userData.address } 
                    onChange={change}
                />
            </Grid>
            <Grid item>
                <TextField
                    required
                    id="ssn"
                    label="SSN"
                    defaultValue="999-9992-30"
                    value =  { userData.ssn } 
                    onChange={change}
                />
            </Grid>
            <Grid item>
            <Button variant="contained" onClick={submitData}>Submit</Button>
            </Grid>
        
        </Grid>
        
    )
}
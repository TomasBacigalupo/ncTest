import React from "react";
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import { Button, Grid } from "@mui/material";
import { login } from "../service/authservice";

export default function LoginForm(props){
    const [userData, setUserData] = useState({
        name: "",
        lastname: "",
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
        login(userData.username, userData.password)
        props.handleClose();    
        setUserData({
            username: "",
            password: "",
        })
    }

    return(
        <Grid container spacing={2}>
            <Grid item>
            <br/>
                <TextField
                    required
                    id="username"
                    label="Name"
                    value =  { userData.username } 
                    onChange={change}
                />
            </Grid>
            <Grid item>
            <br/>
                <TextField
                    required
                    id="password"
                    label="Password"
                    type="password"
                    value =  { userData.password } 
                    onChange={change}
                />
            </Grid>

            <Grid item>
            <br/>
                <Button variant="contained" onClick={submitData}>Submit</Button>
            </Grid>
            
        </Grid>
        
    )
}
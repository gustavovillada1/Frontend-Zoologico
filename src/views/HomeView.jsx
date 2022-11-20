import React,{useState, useEffect} from "react";
import { Grid, TextField, Paper, Avatar, Button, Typography, Link, FormControl, FormLabel, Alert, Stack } from "@mui/material";
import { LoadingButton } from '@mui/lab'
import fondo from '../assets/images/background.png'
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';
import axios  from "axios";
import {  useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { green, pink } from '@mui/material/colors';

const LoginView=() => {   

    const [nombre,setNombre] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();


    const handleSubmit = (email,password) => {
        alert("Datos::sa: "+email+password);
    }



    //Styles
    const backgroundStyle={
        backgroundImage: `url(${fondo})` ,
        height:'100vh'
    }

    const paperStyle={
        padding:20,height:'50vh', width:"100vh", margin: '20px auto', marginTop:'0px'
    }

    const avatarStyle={
        backgroundColor:'green'
    }

    const textFieldStyle={
        margin:'20px auto'
    }
    return (
        <div>
            <Navbar></Navbar>
            <Grid style={backgroundStyle} >
              <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}></Avatar>
                    <h3>  Bienvenido al administrador del Zoologico </h3>
                    <h2>  ¿Qué deseas hacer? </h2>

                </Grid>

            <Stack direction="row" spacing={3} marginTop="50px">
                <Paper elevation={5} style={{padding:20,height:'100px', width:"33vh", margin: '20px auto', marginTop:'10px'}}>
                    <Stack direction="row">
                        <Avatar sx={{ bgcolor: green[500] }}>
                            <SearchIcon />
                        </Avatar>
                        <h4>Buscar animal</h4>
                    </Stack>
                    <Button variant="contained" fullWidth href="/search">Buscar</Button>


                </Paper>

                <Paper elevation={5} style={{padding:20,height:'120px', width:"33vh", margin: '20px auto', marginTop:'0px'}}>
                    <Stack direction="row">
                        <Avatar sx={{ bgcolor: green[500] }} >
                            <AddIcon />
                        </Avatar>
                         <h4>Registrar nuevo animal</h4>
                    </Stack>
                    <Button variant="contained" fullWidth href="/register">Registrar</Button>

                </Paper>
                <Paper elevation={5} style={{padding:20,height:'100px', width:"33vh", margin: '20px auto', marginTop:'10px'}}>
                    <Stack direction="row">
                        <Avatar sx={{ bgcolor: green[500] }}>
                            <FormatListBulletedIcon />
                        </Avatar>
                        <h4>Listar animales</h4>
                    </Stack>
                    <Button variant="contained" fullWidth href="/animals">Listar</Button>

                </Paper>
            </Stack>

              </Paper>

            </Grid>//
        </div>
        )
    
}

export default LoginView
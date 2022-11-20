import Navbar from '../components/Navbar';
import fondo from '../assets/images/background.png'
import { Alert,Stack, Grid, TextField, Paper, Avatar, Button, Typography, Link, FormControl, MenuItem, Box } from "@mui/material";
import React,{useState, useEffect} from "react";
import axios from 'axios';
import AnimalCard from '../components/AnimalCard';

function SearchAnimalView() {

    const [nameSearch,setNameSearch] = useState("");

    const [animalSearched,setAnimalSearched]=useState();
    const [animalLoad,setAnimalLoad]=useState(false);

    let cardAnimal;
    if(animalLoad){
        cardAnimal=<AnimalCard animal={animalSearched}></AnimalCard>
    }else{
        cardAnimal=<h4></h4>
    }

    

    //Styles
    const backgroundStyle={
        backgroundImage: `url(${fondo})` ,
        height:'100vh'
    }

    const paperStyle={
        padding:20,height:'50vh', width:"40vh", margin: '20px auto', marginTop:'0px'
    }

    const avatarStyle={
        backgroundColor:'green'
    }

    const textFieldStyle={
        margin:'20px auto'
    }

    
    function buscarAnimal(){

            const nameString=String(nameSearch)
            const url = "http://localhost:8080/animals/"+nameString;

            axios.get(url)
            .then(function (response) {
                if(response.data.mother!==null){
                    response.data.mother=response.data.mother.name
                    response.data.father=response.data.father.name
                }

              setAnimalSearched(response.data)

              if(response.data.id!==null|| response.data.id!=="" || response.data.id!=="null"){
                setAnimalLoad(true)
              }else{
                setAnimalLoad(false)
              }
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });
        
    }

  return (

        <div>
            <Navbar></Navbar>


            <Grid style={backgroundStyle} >
              <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}></Avatar>
                    <h2> Buscar animal </h2>

                </Grid>
                <form>
                     <TextField 
                            id="text_field_name" 
                            label="Nombre" 
                            type='text'
                            name="name"
                            placeholder="Escribe el nombre" 
                            fullWidth required 
                            value={nameSearch}
                            onChange={(e)=>setNameSearch(e.target.value)}
                            style={textFieldStyle}/>
                    <Button variant="contained" fullWidth style={textFieldStyle}  onClick={buscarAnimal} >Buscar</Button> 
                </form>

                {cardAnimal}

              </Paper>

            </Grid>//
        </div>

    )
}


export default SearchAnimalView

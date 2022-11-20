import * as React from 'react';

import { useEffect, useState } from 'react';
import AnimalCard from '../components/AnimalCard';
import Navbar from '../components/Navbar';
import {Stack,Box,Grid} from '@mui/material';
import axios from 'axios';

export default function ButtonAppBar() {

    const [animals,setAnimals]= useState([]);

      useEffect(() => {
        async function getAnimalParents(){
            const url = "http://localhost:8080/animals/";
            const result = await axios.get(url);
            setAnimals(result.data);

        }
            getAnimalParents();
      },[animals.length]);


    function searchNameFather(animal){
        for (var i = 0; i < animals.length; i++) {
            if(animals[i].id==animal.father){
                animal.father=animals[i].name
            }
          }
    }

    function searchNameMother(animal){
        for (var i = 0; i < animals.length; i++) {
            if(animals[i].id==animal.mother){
                animal.mother=animals[i].name
            }
          }
    }
    

  return (
    <div>
        <Navbar></Navbar>


        <Box m={10}>
            <h3 >Hay {animals.length} animales registrados</h3>
            <Grid container direction={{xs: "column", md: "row"}}>
            {
                        animals.map((animal,index)=>{
                            searchNameFather(animal)
                            searchNameMother(animal)
                            
                            return(
                                <AnimalCard sx animal={animal}></AnimalCard>
                            );
                        })
                    }

            </Grid>
            <Stack direction="row" >

            </Stack>
        </Box>


    </div>

  );
}


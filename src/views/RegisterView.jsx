import { Alert,Stack, Grid, TextField, Paper, Avatar, Button, Typography, Link, FormControl, MenuItem, Box } from "@mui/material";
import React,{useState, useEffect} from "react";
import fondo from '../assets/images/background.png'
import Select from 'react-select';
import axios from 'axios';
import Navbar from '../components/Navbar';

const RegisterView=()=> {

    const [load,setLoad] = useState(false);
    const [name,setName] = useState("");
    const [gender,setGender] = useState("");
    const [weight,setWeight] = useState("");
    const [height,setHeight] = useState("");
    const [age,setAge] = useState("");
    const [uidMother,setUidMother] = useState("");
    const [uidFather,setUidFather] = useState("");

    const [animals,setAnimals]= useState([]);
    const [animalsNames,setAnimalsNames]= useState([]);






    const genders =[
        { value: 'Female', label: 'Hembra' },
        { value: 'Male', label: "Macho" }
      ];

      useEffect(() => {

        async function getAnimalParents(){
            const url = "http://localhost:8080/animals/";
            const result = await axios.get(url);
            setAnimals(result.data);
            setAnimalsNames(result.data);
            for (let i = 0; i < animals.length; i++) {
                animalsNames[i].value=animals[i].id
                animalsNames[i].label=animals[i].name
              }
      
        }
            getAnimalParents();
      },[animals.length]);

      const registrarAnimal = () =>{
        const url = "http://localhost:8080/animals/";

        console.log("name: "+name,"| gender: "+gender,"|weight: "+weight,"|age: "+age,"|height: "+height,"|uidFather: "+uidFather,"|uidMother: "+uidMother)
        axios.post(url,
            {
                    "name": name,
                    "gender": gender,
                    "weight": weight,
                    "age": age,
                    "height": height,
                    "mother": uidMother,
                    "father": uidFather,
                    "arrivalDate": "2022-09-22 17:54:44"
            }
          ).then(function (response) {
            // handle success
            setName("")
            setGender("")
            setWeight("")
            setAge("")
            setHeight("")
            setUidFather("")
            setUidMother("")
            alert("Animal agregado exitosamente")


          })
          .catch(function (error) {
            // handle error
            const message= error.response.data.message.split("-")[1]
            alert(message)
        });


        }




        //Styles
        const backgroundStyle={
            backgroundImage: `url(${fondo})` ,
            height:'100vh'
        }
    
        const paperStyle={
            padding:20,height:'60vh', width:600, margin: '0px auto'
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
        <Box style={backgroundStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}></Avatar>
                    <h2>  Registrar animal </h2>
                </Grid>

                <form>
                    <TextField 
                            id="text_field_name" 
                            label="Nombre" 
                            type='text'
                            name="name"
                            placeholder="Escribe el nombre" 
                            fullWidth required 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            style={textFieldStyle}/>

                <Stack direction="row" spacing={3} >

                    <TextField 
                                id="test_field_age" 
                                label="Edad (Años)" 
                                name="age"
                                placeholder="Escribe la edad" 
                                type="number" 
                                fullWidth required 
                                value={age}
                                onChange={(e)=> setAge(e.target.value)}
                                style={textFieldStyle}/>

                            <TextField 
                                id="test_field_weight" 
                                label="Peso (Kg)" 
                                name="weight"
                                placeholder="Escribe el peso (Kg)" 
                                type="number" 
                                fullWidth required 
                                value={weight}
                                onChange={(e)=> setWeight(e.target.value)}
                                style={textFieldStyle}/>

                            <TextField 
                                id="test_field_height" 
                                label="Altura (cm)" 
                                name="weight"
                                placeholder="Escribe la altura (cm)" 
                                type="number" 
                                fullWidth required 
                                value={height}
                                onChange={(e)=> setHeight(e.target.value)}
                                style={textFieldStyle}/>


                </Stack>


                <Stack direction="row">
                        < div style={{width:'33vh', position:'relative'}}>
                            Género 
                        </div>  
                        < div style={{width:'33vh', position:'relative'}}>
                            Padre 
                        </div>  
                        < div style={{width:'33vh', position:'relative'}}>
                            Madre 
                        </div>  
                </Stack>


                <Stack direction="row">
                        
                        <div style={{width:'33vh', position:'relative'}}>
                                <select onChangeCapture={(e)=>{
                                        const opcion=e.target.value
                                        setGender(opcion)
                                    }}>
                                    <option value={0}>Selecciona un género</option>
                                        { genders.map((item, i)=>(
                                                <option value={item.value}>{item.label}</option>
                                            ))
                                        }
                                </select>
                        </div>  


                        <div style={{width:'33vh', position:'relative'}}>
                                <select onChangeCapture={(e)=>{
                                        const opcion=e.target.value
                                        setUidFather(opcion)
                                    } }>
                                    <option value={-1}>Ninguno</option>
                                        { animals.map((item, i)=>(
                                                <option value={item.id}>{item.name}</option>
                                            ))
                                        }
                                </select>
                        </div>  


                        <div style={{width:'33vh', position:'relative'}}>
                                <select onChange={(e)=>{
                                        const opcion=e.target.value
                                        setUidMother(opcion)
                                    }}>
                                    <option value={-1}>Ninguna</option>
                                        { animals.map((item, i)=>(
                                                <option value={item.id}>{item.name}</option>
                                            ))
                                        }
                                </select>
                        </div>  
                    </Stack>

                    <Button variant="contained" fullWidth style={textFieldStyle}  onClick={registrarAnimal} >Registrar</Button>

                </form>

            </Paper> 
        </Box>
    </div>

 )
}


export default RegisterView

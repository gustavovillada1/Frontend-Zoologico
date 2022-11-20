import * as React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function AnimalCard({animal}) {


  return (



<Box sx={{ minWidth: 275, maxWidth:300, padding:'10px' }} >
<Paper elevation={10}>

      <Card variant="outlined" >

                <React.Fragment>

                <CardMedia
        component="img"
        alt="Zorro Cañero"
        height="100"
        image="images/zorro_cañero.png"
      />
                <CardContent>

                    <Typography variant="h5" component="div">
                        {animal.name}
                    </Typography>


                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {animal.gender}
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Age: {animal.age}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Height: {animal.height}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Weight: {animal.weight}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Arrival date: {animal.arrivalDate}
                    </Typography>

                    {animal.father!=null?
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Father: {animal.father}
                                        </Typography>
                    :
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    </Typography>}

                    {animal.mother!=null?
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Mother: {animal.mother}
                                        </Typography>
                    :
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    </Typography>}
        

                </CardContent>
            </React.Fragment>
      </Card>
      </Paper>

    </Box>

  );
}

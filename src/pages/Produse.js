import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AccesoriiData from '../data/accesorii.json'
import HartieData from '../data/hartie.json'
import CernealaData from '../data/cerneala.json'

export default function Produse() {
  const [type, setType] = React.useState('cartuse');

  const handleChange = (event, newType) => {
    setType(newType);
  };
  return (
    <Container maxWidth="lg" >
        <ToggleButtonGroup
          color="primary"
          value={type}
          exclusive
          onChange={handleChange}
          aria-label="Produse"
          sx={{mt: 2, mb: 2}}

        >
          <ToggleButton value="cartuse">cartuse</ToggleButton>
          <ToggleButton value="cerneala">cerneala</ToggleButton>
          <ToggleButton value="hartie">hartie</ToggleButton>
          <ToggleButton value="accesorii">accesorii</ToggleButton>
        </ToggleButtonGroup>

        {type === "cartuse" &&
          <Cartuse />
        }
        {type === "cerneala" &&
          <Cerneala />
        }
        {type === "hartie" &&
          <Hartie />
        }
        {type === "accesorii" &&
          <Accesorii />
        }

    </Container>
  )
}


function Cartuse() {
  return (
    <div>Cartuse</div>
  )
}
function Cerneala() {
  const [data, setData] = React.useState(CernealaData);

  return (
    <Grid container spacing={2} sx={{textAlign: 'center'}}>
    {data.map((d) => (
      <Grid item xs={12} sm={6} md={3} sx={{textAlign: 'center'}}>
          <Card sx={{ maxWidth: 345, mb: 2 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={d.photo}
              title={d.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {d.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Producator: {d.producator}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Culori disponibile: {d.culori}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Pentru modele de imprimante: {d.modele}
              </Typography>
              <Typography variant="h5" color="text.primary">
                {d.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
    ))}
    </Grid>
  )
}
function Hartie() {
  const [data, setData] = React.useState(HartieData);

  return (
    <Grid container spacing={2} sx={{textAlign: 'center'}}>
    {data.map((d) => (
      <Grid item xs={12} sm={6} md={3} sx={{textAlign: 'center'}}>
          <Card sx={{ maxWidth: 345, mb: 2 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={d.photo}
              title={d.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {d.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Producator: {d.producator}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Densitate: {d.densitate}
              </Typography>
              <Typography variant="h5" color="text.primary">
                {d.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
    ))}
    </Grid>
  )
}

function Accesorii() {
  const [data, setData] = React.useState(AccesoriiData);

  return (
    <Grid container spacing={2} sx={{textAlign: 'center'}}>
    {data.map((d) => (
      <Grid item xs={12} sm={6} md={3} sx={{textAlign: 'center'}}>
          <Card sx={{ maxWidth: 345, mb: 2 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={d.photo}
              title={d.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {d.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Producator: {d.producator}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lungimea: {d.lungimea}
              </Typography>
              <Typography variant="h5" color="text.primary">
                {d.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
    ))}
    </Grid>
  )
}

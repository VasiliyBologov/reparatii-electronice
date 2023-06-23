import React from 'react'
import { Container, Grid, Typography } from '@mui/material'

function Servicii() {
  return (
    <>
    <Container maxWidth="lg" sx={{mt: 2, mb: 2}}>
        {/* Service 1 */}
        <Grid container spacing={2} sx={{textAlign: 'left'}}>
          <Grid item xs={12} sm={4} md={4} sx={{textAlign: 'center'}}>
            <img
              src={"https://www.clipartmax.com/png/middle/225-2251164_electrical-service-electric-man-vector.png"}
              alt={"photo_1"}
              height={200}
              loading="lazy"
            />
            {/* тут нужна какая то картинка векторная , про которуя мы говорили 
                какртинки как подберёшь то потом прикрутим
            */}
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={{textAlign: 'right'}}>
            <Typography variant="h5" color="text.primary">
            Reparații PC/Laptop. Efectuăm reparații PC/Laptopuri 
            </Typography>
            <Typography variant="h5" color="text.primary">
            Цена: 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            DIAGNOSTICARE PC/LAPTOP
            Diagnosticare Laptop / PC gratuita
            REPARATII PC/LAPTOP
            Efectuam orice tip de reparatii. Efectuam reparatii cu piese originale si compatibile.
            Reparatii Alimentatoare Laptopuri. Reparatii Surse ATX. Reparatii diverse electronice
            CURATARE PC/LAPTOP
            Curatire si schimbare pasta termica are avantajele semnificative:
            Prelungirea duratei de functionare; Diminuarea apararitiei unui defect;

            </Typography>
          </Grid>
        </Grid>

        {/* Service 1 */}
        <Grid container spacing={2} sx={{textAlign: 'left'}}>
          <Grid item xs={12} sm={6} md={6} sx={{textAlign: 'дуае'}}>
            <Typography variant="h5" color="text.primary">
            Reparatii imprimante/Multifunctionale
            </Typography>
            <Typography variant="h5" color="text.primary">
            Цена: 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            reparatia imprimante/ Multifunctionale de model: CANON, HP, SAMSUNG, EPSON, XEROX, KYOCERA, PANASONIC, BROTHER, KONICA MINOLTA, LENOVO si alte.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} sx={{textAlign: 'center'}}>
            <img
              src={"https://www.clipartmax.com/png/middle/225-2251164_electrical-service-electric-man-vector.png"}
              alt={"photo_1"}
              height={200}
              loading="lazy"
            />
            {/* тут нужна какая то картинка векторная , про которуя мы говорили 
                какртинки как подберёшь то потом прикрутим
            */}
          </Grid>
        </Grid>


        {/* Service 3 */}
        <Grid container spacing={2} sx={{textAlign: 'left'}}>
          <Grid item xs={12} sm={4} md={4} sx={{textAlign: 'center'}}>
            <img
              src={"https://www.clipartmax.com/png/middle/225-2251164_electrical-service-electric-man-vector.png"}
              alt={"photo_1"}
              height={200}
              loading="lazy"
            />
            {/* тут нужна какая то картинка векторная , про которуя мы говорили 
                какртинки как подберёшь то потом прикрутим
            */}
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={{textAlign: 'right'}}>
            <Typography variant="h5" color="text.primary">
            Reincarcare cartuse/ Regenerare cartuse
            </Typography>
            <Typography variant="h5" color="text.primary">
            Цена: 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Reincarcare si regenerare cartuse de model: CANON, HP, SAMSUNG, EPSON, XEROX, KYOCERA, PANASONIC, BROTHER, KONICA MINOLTA, LENOVO si alte.
            </Typography>
          </Grid>
        </Grid>

        {/* Service 4 */}
        <Grid container spacing={2} sx={{textAlign: 'left'}}>
          <Grid item xs={12} sm={6} md={6} sx={{textAlign: 'дуае'}}>
            <Typography variant="h5" color="text.primary">
            Reparatii TV/Monitor LED si LCD
            </Typography>
            <Typography variant="h5" color="text.primary">
            Цена: 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Reparatii Televizoare LED
            Reparatii Televizoare LCD
            Reparatii bloc de alimentare TV/ Monitor
            Reparatii Monitoare LED, LCD
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} sx={{textAlign: 'center'}}>
            <img
              src={"https://www.clipartmax.com/png/middle/225-2251164_electrical-service-electric-man-vector.png"}
              alt={"photo_1"}
              height={200}
              loading="lazy"
            />
            {/* тут нужна какая то картинка векторная , про которуя мы говорили 
                какртинки как подберёшь то потом прикрутим
            */}
          </Grid>
        </Grid>        

    </Container>
    </>
  )
}

export default Servicii
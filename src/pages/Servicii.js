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
            Текст какой то который описывает что ты тут делаешь
            </Typography>
            <Typography variant="h5" color="text.primary">
            Цена: 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            что то ещё
            </Typography>
          </Grid>
        </Grid>

        {/* Service 1 */}
        <Grid container spacing={2} sx={{textAlign: 'left'}}>
          <Grid item xs={12} sm={6} md={6} sx={{textAlign: 'дуае'}}>
            <Typography variant="h5" color="text.primary">
            Текст какой то который описывает что ты тут делаешь
            </Typography>
            <Typography variant="h5" color="text.primary">
            Цена: 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            что то ещё
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
            Текст какой то который описывает что ты тут делаешь
            </Typography>
            <Typography variant="h5" color="text.primary">
            Цена: 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            что то ещё
            </Typography>
          </Grid>
        </Grid>

        {/* Service 4 */}
        <Grid container spacing={2} sx={{textAlign: 'left'}}>
          <Grid item xs={12} sm={6} md={6} sx={{textAlign: 'дуае'}}>
            <Typography variant="h5" color="text.primary">
            Текст какой то который описывает что ты тут делаешь
            </Typography>
            <Typography variant="h5" color="text.primary">
            Цена: 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            что то ещё
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
import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Contact() {
  return (
    <>

      <Typography stextAlign="left">
        Chisinau sec. Buiucani str. Nicolae Costin 44/2
        <br/>Program de lucru:<br/>Luni — Vineri:&nbsp; 9-00&nbsp; 18-00<br/>
        Sambata : 10-00&nbsp; 15-00<br/>Duminica: zi libera<br/>tel: 079363726 / 068053329
      </Typography>

      <Box>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.225433892975!2d28.785319015432744!3d47.03580703522598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d735085ce2d%3A0x7ad2cbded21e5c5a!2zaW5jYXJjYXJlLm1kIGluY2FyY2FyZSBjYXJ0dXNlIENoaXNpbmF1IEJ1aXVjYW5pIC8g0LfQsNC_0YDQsNCy0LrQsCDQutCw0YDRgtGA0LjQtNC20LXQuSDQmtC40YjQuNC90LXQsiDQkdGD0Y7QutCw0L3Riw!5e0!3m2!1sro!2s!4v1601628651744!5m2!1sro!2s" 
          allowfullscreen="" aria-hidden="false" tabindex="0" 
          width="800" height="600" frameborder="0"
          >

          </iframe>
      </Box>

    </>

  );
}
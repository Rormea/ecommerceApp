import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'




export const ScreenLoading = () => {

    return (



        <Box display='flex'
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            // height={'calc(100vh - 200px)'}
            height={'30vh'}
        >

            <Typography sx={{ mb: 3 }} variant='h2' fontWeight={200} fontSize={40} >Cargando...</Typography>

            <CircularProgress thickness={2} />

        </Box>


    )
};

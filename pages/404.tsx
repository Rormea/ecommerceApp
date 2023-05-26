import React from 'react'
import { ShopLayout } from '../components/layouts'
import { Box, Typography } from '@mui/material'



const Custom404 = () => {
    return (
        <ShopLayout title={'Page not found'} pageDescription={'Página en Construcción'}  >
            <Box display='flex' justifyContent={'center'} alignContent={'center'} height={'calc(100vh - 200px)'} sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                <Typography variant='h1' component={'h1'} fontSize={80} fontWeight={200} > 404 |</Typography>
                <Typography marginLeft={2} marginTop={5}> Pagina en construcción, vuelva al Home porfavor. </Typography>
            </Box>
        </ShopLayout>
    )
}

export default Custom404
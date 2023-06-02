import { Box, Link, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import { RemoveShoppingCartOutlined } from "@mui/icons-material"

import NextLink from 'next/link'




const EmptyPage = () => {
    return (
        <ShopLayout title="Carrito Vacío" pageDescription="No hay articulos en la carrito">
            <Box display='flex'
                justifyContent='center'
                alignContent='center'
                height='calc(100vh-200px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <RemoveShoppingCartOutlined sx={{ fontSize: 50, xs: { justifyContent: 'center' } }} />
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} marginLeft={5} >
                    <Typography variant='h5'  > Aún no tiene productos en el carrito</Typography>

                    <NextLink href={'/'} passHref legacyBehavior >
                        <Link typography={'h4'} color={'secondary'} >
                            Regresar
                        </Link>
                    </NextLink>
                </Box>

            </Box>
        </ShopLayout>
    )
}

export default EmptyPage
import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material'
import { CartList, OrderSummary } from '../../components/cart'
import NextLink from 'next/link'



const Summarypage = () => {
    return (
        <ShopLayout title={'Resumen de la orden'} pageDescription={'Resumen de la orden'}>

            <Typography variant='h1' component={'h1'} >Resumen de la orden</Typography>

            <Grid container >
                <Grid item xs={12} sm={7} >
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card' >
                        <CardContent>
                            <Typography variant='h2' >Resumen de Orden (3 productos)</Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box display={'flex'} justifyContent={'end'}>
                                <NextLink href={'/checkout/address'} passHref legacyBehavior>
                                    <Link underline='always' >
                                        Editar Datos
                                    </Link>
                                </NextLink>
                            </Box>
                            <Typography variant='subtitle1' >Dirección de Entrega</Typography>
                            <Typography>Ronald Ormea</Typography>
                            <Typography>Villa Municipal</Typography>
                            <Typography>Lima</Typography>
                            <Typography>Perú</Typography>
                            <Typography>+51 993274781</Typography>

                            <Divider sx={{ my: 1 }} />

                            <Box display={'flex'} justifyContent={'end'} marginTop={1} >
                                <NextLink href={'/cart'} passHref legacyBehavior>
                                    <Link underline='always' >
                                        Editar Compra
                                    </Link>
                                </NextLink>
                            </Box>
                            {/* aqui debe el summary de la compra imouestos descuetos etc */}
                            <OrderSummary />

                            <Box sx={{ mt: 3 }} >
                                <Button color="secondary" className='circular-btn' fullWidth >
                                    Confirmar Orden
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </ShopLayout>
    )
}

export default Summarypage
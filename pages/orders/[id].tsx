import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from '@mui/material'
import { CartList, OrderSummary } from '../../components/cart'
import NextLink from 'next/link'
import { CreditCardOffOutlined } from '@mui/icons-material'



const OrderPage = () => {
    return (
        <ShopLayout title={'Resumen de la orden 123456'} pageDescription={'Resumen de la orden'}>

            <Typography variant='h1' component={'h1'} >Orden: ABC123</Typography>

            <Chip
                sx={{ my: 2 }}
                label='Pendente de Pago'
                variant='outlined'
                color='error'
                icon={<CreditCardOffOutlined />}
            />

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
                                <h1>Pagar</h1>

                                <Chip
                                    sx={{ my: 2 }}
                                    label='Pendente de Pago'
                                    variant='outlined'
                                    color='error'
                                    icon={<CreditCardOffOutlined />}
                                />

                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </ShopLayout>
    )
}

export default OrderPage
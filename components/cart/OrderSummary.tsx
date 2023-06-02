import { Grid, Typography } from '@mui/material'


export const OrderSummary = () => {
    return (
        <Grid container >


            <Grid item xs={6} >
                <Typography>N° de Productos</Typography>
            </Grid>
            <Grid item xs={6} display={'flex'} justifyContent={'center'} >
                <Typography>3</Typography>
            </Grid>

            <Grid item xs={6} marginTop={1} >
                <Typography>Subtotal</Typography>
            </Grid>
            <Grid item xs={6} display={'flex'} justifyContent={'center'} marginTop={1} >
                <Typography>{`$${185.69}`}</Typography>
            </Grid>

            <Grid item xs={6} marginTop={1} >
                <Typography>Taxes (15%)</Typography>
            </Grid>
            <Grid item xs={6} display={'flex'} justifyContent={'center'} marginTop={1} >
                <Typography>{`$${12.52}`}</Typography>
            </Grid>

            <Grid item xs={6} marginTop={2} >
                <Typography><strong>Total</strong></Typography>
            </Grid>
            <Grid item xs={6} display={'flex'} justifyContent={'center'} marginTop={2} >
                <Typography><strong>{`$${258.52}`}</strong></Typography>
            </Grid>







        </Grid>
    )
}

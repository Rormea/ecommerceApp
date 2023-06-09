import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../../components/layouts"
import NextLink from 'next/link';




const RegisterPage = () => {
    return (
        <AuthLayout title={"Identificarse"}  >

            <Box sx={{ width: 350, padding: '10px 20px' }} >
                <Grid container spacing={2} >

                    <Grid item xs={12}  >
                        <Typography variant="h1" component={"h1"} >Crear Cuenta</Typography>
                    </Grid>

                    <Grid item xs={12} >
                        <TextField label="Nombre de usuario" variant="filled" fullWidth />
                    </Grid>

                    <Grid item xs={12} >
                        <TextField label="Correo" variant="filled" fullWidth />
                    </Grid>

                    <Grid item xs={12} >
                        <TextField label="Contraseña" type="password" fullWidth />
                    </Grid>

                    <Grid item xs={12} >
                        <Button color="secondary" className="circular-btn" size="large" fullWidth >
                            Crear Cuenta
                        </Button>
                    </Grid>

                    <Grid item xs={12} display={"flex"} justifyContent={"end"} >
                        <NextLink href="/auth/login" passHref legacyBehavior >
                            <Link underline="always" >
                                ¿Ya tienes una cuenta?
                            </Link>
                        </NextLink>
                    </Grid>

                </Grid>
            </Box>

        </AuthLayout >
    )
}

export default RegisterPage
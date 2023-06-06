
import React, { useContext } from 'react'

import { Typography, AppBar, Toolbar, Box, Link, Button, IconButton, Badge } from '@mui/material';
import NextLink from 'next/link';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { UIContext } from '../../context';



export const NavBar = () => {

    const { asPath } = useRouter()
    // console.log(asPath)

    const { toglleSideMenu } = useContext(UIContext)

    return (
        <AppBar>
            <Toolbar>
                <NextLink href='/' passHref legacyBehavior>
                    <Link
                        display='flex'
                        align='center'
                    >
                        <Typography variant='h6'>Teslo</Typography>
                        <Typography sx={{ ml: 0.5 }} variant='h6'>Shop</Typography>
                    </Link>
                </NextLink>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
                    <NextLink href='/category/men' passHref legacyBehavior>
                        <Link>
                            <Button color={asPath === '/category/men' ? 'primary' : 'info'} >Hombres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/category/women' passHref legacyBehavior>
                        <Link>
                            <Button color={asPath === '/category/women' ? 'primary' : 'info'}>Mujeres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/category/kids' passHref legacyBehavior>
                        <Link>
                            <Button color={asPath === '/category/kids' ? 'primary' : 'info'} >Niños</Button>
                        </Link>
                    </NextLink>
                </Box>


                <Box flex={1} />

                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <NextLink href='/cart' passHref legacyBehavior>
                    <Link>
                        <IconButton >
                            <Badge badgeContent={2} color='secondary' >
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>

                <Button onClick={toglleSideMenu} >Menu</Button>


            </Toolbar>

        </AppBar>
    )
}

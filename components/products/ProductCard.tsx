import React, { FC, useMemo, useState } from 'react'
import { IProduct } from '../../interfaces';
import { Grid, Card, CardActionArea, CardMedia, Typography, Box, Link } from '@mui/material';
import NextLink from 'next/link';

interface Props {
    product: IProduct;
}


export const ProductCard: FC<Props> = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false)
    const [isImgLoaded, setIsImgLoaded] = useState(false)


    const productImage = useMemo(() => {
        return isHovered
            ? `/products/${product.images[0]}`
            : `/products/${product.images[1]}`
    }, [isHovered, product.images])


    return (
        <Grid item sm={4} md={3}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card>
                <NextLink href={`/product/${product.slug}`} passHref prefetch={false} legacyBehavior >
                    <Link>
                        <CardActionArea>
                            <CardMedia
                                className='fadeIn'
                                component='img'
                                image={productImage}
                                alt={product.title}
                                onLoad={() => setIsImgLoaded(true)}
                            />
                        </CardActionArea>
                    </Link>
                </NextLink>
            </Card>

            <Box sx={{ mt: 1, display: isImgLoaded ? 'block' : 'none' }} className='fadeIn' >
                <Typography fontWeight={700}>{product.title}</Typography>
                <Typography fontWeight={500}>{`$ ${product.price}`}</Typography>
            </Box>
        </Grid >
    )
};

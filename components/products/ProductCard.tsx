import React, { FC } from 'react'
import { IProduct } from '../../interfaces';
import { Grid, Card, CardActionArea, CardMedia } from '@mui/material';

interface Props {
    product: IProduct;
}


export const ProductCard: FC<Props> = ({ product }) => {
    return (
        <Grid item sm={3} >
            <Card>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        image={`products/${product.images[0]}`}
                        alt={product.title}
                    />
                </CardActionArea>
            </Card>
        </Grid>
    )
}

import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts'
import { Typography } from '@mui/material'
import { initialData } from '../database/products'
import { ProductList } from '../components/products'





const Home: NextPage = () => {
  return (
    <ShopLayout title={'Teslo-Shop'} pageDescription={'Encuentra los mejoes productos aquí.'}>
      <Typography variant='h1' component='h1' >Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }} >Todos los productos</Typography>

      <ProductList products={initialData.products as any} />
      {/* <Grid container spacing={4}>
        {
          initialData && initialData.products.map(prod => (
            <Grid item sm={4} key={prod.slug} >
              <Card>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image={`products/${prod.images[0]}`}
                    alt={prod.title}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
      </Grid> */}

    </ShopLayout>
  )
}

export default Home

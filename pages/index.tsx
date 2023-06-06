import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts'
import { Typography } from '@mui/material'
import { ProductList } from '../components/products'
import { useProducts } from '../hooks'
import { ScreenLoading } from '../components/ui'



const Home: NextPage = () => {

  const { products, isLoading } = useProducts('/products')

  return (

    <ShopLayout title={'Teslo-Shop'} pageDescription={'Encuentra los mejoes productos aquí.'}>
      <Typography variant='h1' component='h1' >Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }} >Todos los productos</Typography>

      {
        isLoading ? <ScreenLoading /> : <ProductList products={products} />
      }




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

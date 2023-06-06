import { Box, Button, Chip, Grid, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
// import { initialData } from "../../database/products"
import { SizeSelector, Slideshow } from "../../components/products"
import { ItemCounter } from "../../components/ui"
// import { useRouter } from "next/router"
// import { useProducts } from "../../hooks"
// import Product from '../../models/Product';
// import { dbProduct } from "../../database"
import { IProduct } from "../../interfaces"
import { NextPage, GetServerSideProps, GetStaticProps, GetStaticPaths } from "next"
import { dbProduct } from "../../database"
import { getProductBySlug } from '../../database/dbProduct';


// const product = initialData.products[0]

interface Props {
    product: IProduct
}


const ProductPage: NextPage<Props> = ({ product }) => {

    // const router = useRouter();
    // console.log(router) query.slug
    // const { products: product, isLoading } = useProducts(`/products/${router.query.slug}`);



    return (
        <ShopLayout title={product.title} pageDescription={product.description}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}  >
                    {/* SLIDE SHOW */}
                    <Slideshow images={product.images} />
                </Grid>

                <Grid item xs={12} sm={5}  >
                    <Box display='flex' flexDirection={"column"} >
                        {/* titulos */}
                        <Typography variant="h1" component="h1"  >{product.title}</Typography>
                        <Typography variant="subtitle1" component="h2"  >{`$${product.price}`}</Typography>

                        <Box sx={{ my: 2 }}>
                            <Typography variant="subtitle2" >Cantidad</Typography>
                            {/* Items Caounter */}
                            <ItemCounter />
                            {/* tallas */}
                            <SizeSelector selectSize={product.sizes[0]} sizes={product.sizes} />
                        </Box>

                        {/* Agregar al carrito */}
                        <Button color="secondary" className="circular-btn" >
                            Agregar al Carrito
                        </Button>

                        {/* <Chip label="No hay disponibles" color="error" variant="outlined" /> */}

                        {/* Descripción */}

                        <Box sx={{ mt: 3 }}>
                            <Typography variant="subtitle2">Descripción</Typography>
                            <Typography variant="body2">{product.description}</Typography>
                        </Box>

                    </Box>
                </Grid>

            </Grid>
        </ShopLayout>
    )
}


//Implmentar getServerSideProps

// Esto es SSR server site rendering, son pedidos al servidor en tiempo real para cargar pagina e Hidratar
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {

//     const { slug = '' } = params as { slug: string };

//     const product = await dbProduct.getProductBySlug(slug);

// if (!product) {
//     return {
//         redirect: {
//             destination: '/',
//             permanent: false
//         }
//     }
// };

//     return {
//         props: {
//             product
//         }
//     }
// };


//Pero lo que queremos hacer es un SSG SITIO estatico y tenemos que usar primero PATHS y luego PROPS

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const productSlug = await dbProduct.getAllProductsSlug();


    const paths = productSlug.map(el => (
        {
            params: {
                slug: el.slug,
            }
        }
    ))

    return {
        paths,
        fallback: "blocking"
    }


}



// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { slug = '' } = params as { slug: string }

    const product = await dbProduct.getProductBySlug(slug)

    if (!product) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    };

    return {
        props: {
            product
        },
        revalidate: 60 * 60 * 24
    }
}

export default ProductPage
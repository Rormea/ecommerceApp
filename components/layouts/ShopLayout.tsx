import Head from "next/head"
import { FC } from 'react'
import { NavBar, SideMenu } from "../ui";



interface Props {
    title: string;
    pageDescription: string;
    imgFullUrl?: string;
    children?: any;
}


export const ShopLayout: FC<Props> = ({ children, title, pageDescription, imgFullUrl }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                {/* metas... */}
                <meta name="description" content={pageDescription} />

                <meta name="ogi.title" content={title} />
                <meta name="ogi.description" content={pageDescription} />
                {
                    imgFullUrl && (
                        <meta name="ogi.image" content={imgFullUrl} />
                    )
                }
            </Head>

            <nav>
                <NavBar />
            </nav>

            <SideMenu />



            <main
                style={{
                    margin: '80px auto',
                    maxWidth: '1440px',
                    padding: '0px 30px'
                }}>
                {children}

            </main>

            <footer>
                {/* Todo custom footer */}
            </footer>
        </>
    )
}

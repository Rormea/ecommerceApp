import { FC } from 'react';
import { Slide } from 'react-slideshow-image'
import s from './Slideshow.module.css'


interface Props {
    images: string[];
}


export const Slideshow: FC<Props> = ({ images }) => {
    return (
        <Slide
            easing='ease'
            duration={7000}
            indicators
        >
            {
                images.map((img) => {

                    const url = `/products/${img}`
                    return (
                        <div className={s['each-slide']} key={img}>
                            <div
                                style={{
                                    backgroundImage: `url(${url})`,
                                    backgroundSize: 'cover'
                                }}
                            >

                            </div>
                        </div>
                    )
                })
            }

        </Slide>
    )
}


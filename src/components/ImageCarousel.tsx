import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';


interface Props {
    carouselInfo: any
}

function ImageCarousel(props: Props) {
    const carouselInfo = props.carouselInfo
    console.log(carouselInfo[0]['image']);

    const OutputValue = (object:any):string => {
        //@ts-ignore
        return Object.values(object)
    }
    
    return (
        <>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
            }}
            modules={[Autoplay, Pagination]}
        >
            {carouselInfo.map((slideinfo:any) => (
            <SwiperSlide>
                <article className='article'>
                    <img className='image' src={OutputValue(slideinfo['image'])} alt="background" />
                    <div className='header text-center text-slate-100 bg-black bg-opacity-75 py-2'>
                        <div id='HeaderText'>
                            {slideinfo['title']}
                        </div>
                    </div>
                </article>
            </SwiperSlide>
            ))}
        </Swiper>
        </>
    )
}

export default ImageCarousel
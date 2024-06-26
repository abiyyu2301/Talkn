import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdScreenShare } from 'react-icons/md';

// HOOKS
import useVideos from '../../hooks/useVideos';

// COMPONENTS
import ChannelCard from '../../components/general/ChannelCard';

function LatestChannels() {
    const { channels } = useVideos();

    return (
        <>
            <section className='pb-5 '>
                <div className='container pb-5'>
                    <h2 className='text-lg lh-1 mb-3 d-flex align-items-center'>
                        <MdScreenShare size='3.5rem' className='text-primary' />
                        <span className='ms-2'>Latest Channels</span>
                    </h2>
                    <div className='row mb-4'>
                        <div className='col-lg-6'>
                        </div>
                    </div>

                    {channels?.sort((a, b) => b.createdAt - a.createdAt)?.length === 0 && (
                        <p className='lead'>There's no channels at the moment</p>
                    )}

                    <div className='swiper-slow swiper-wrapper-padding'>
                        <Swiper
                            spaceBetween={15}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                991: {
                                    slidesPerView: 2,
                                },
                                1200: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {channels
                                ?.sort((a, b) => b.createdAt - a.createdAt)
                                .map((channel, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div data-aos='fade-up' data-aos-delay={`${index * 100}`}>
                                                <ChannelCard {...channel} />
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LatestChannels;

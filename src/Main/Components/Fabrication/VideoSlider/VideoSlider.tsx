import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import styles from './videoSlider.module.css';
import classNames from "classnames/bind";

const cx = classNames.bind(styles)


// Типы для видео
interface VideoItem {
    id: string;
    title: string;
    description?: string;
}



const VideoSlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    // Массив с YouTube видео (только ID видео)
    const videos: VideoItem[] = [
        {
            id: 'dQw4w9WgXcQ',
            title: 'Вдохновляющее видео 1',
            description: 'Описание первого видео'
        },
        {
            id: '9bZkp7q19f0',
            title: 'Вдохновляющее видео 2',
            description: 'Описание второго видео'
        },
        {
            id: 'kJQP7kiw5Fk',
            title: 'Вдохновляющее видео 3',
            description: 'Описание третьего видео'
        }
    ];

    const handleSlideChange = (swiper: SwiperType): void => {
        setActiveIndex(swiper.activeIndex);
    };

    const handleThumbnailClick = (index: number): void => {
        if (swiperInstance) {
            swiperInstance.slideTo(index);
        }
    };

    return (
        <div className={cx("video-slider-container")}>
            <h2 className={cx("slider-title")}>Наши видео</h2>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                onSlideChange={handleSlideChange}
                onSwiper={setSwiperInstance}
                className={cx("video-swiper")}
            >
                {videos.map((video, index) => (
                    <SwiperSlide key={video.id}>
                        <div className={cx("video-slide")}>
                            <div className={cx("video-wrapper")}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                            <div className={cx("video-info")}>
                                <div className={cx("video-text")}>
                                    <h3 className={cx("video-title")}>{video.title}</h3>
                                    {video.description && (
                                        <p className={cx("video-description")}>{video.description}</p>
                                    )}
                                </div>
                                <div className={cx("slide-counter")}>
                                    <span className={cx("current-slide")}>{index + 1}</span>
                                    <span className={cx("total-slides")}> / {videos.length}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={cx("slider-thumbnails")}>
                {videos.map((video, index) => (
                    <button
                        key={video.id}
                        className={cx(`thumbnail-btn ${index === activeIndex ? 'active' : ''}`)}
                        onClick={() => handleThumbnailClick(index)}
                        aria-label={`Перейти к видео: ${video.title}`}
                        type="button"
                    >
                        <img
                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                            alt={`Превью видео: ${video.title}`}
                            loading="lazy"
                            width={120}
                            height={80}
                        />
                        <div className={cx("thumbnail-overlay")}>
                            <span className={cx("play-icon")} aria-hidden="true">▶</span>
                        </div>
                    </button>
                ))}
            </div>

            <div className={cx("slider-controls")}>
                <button
                    className={cx("control-btn prev-btn")}
                    onClick={() => swiperInstance?.slidePrev()}
                    aria-label="Предыдущее видео"
                    type="button"
                >
                    ←
                </button>
                <button
                    className={cx("control-btn next-btn")}
                    onClick={() => swiperInstance?.slideNext()}
                    aria-label="Следующее видео"
                    type="button"
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default VideoSlider;
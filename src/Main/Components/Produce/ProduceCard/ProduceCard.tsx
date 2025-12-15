import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './produceCard.module.css';

const cx = classNames.bind(styles);

interface VALLUE {
    id: string;
    category: string;
    name: string;
    productionTime: string;
    description: string;
    image_url: string[];
    price: number;
}

interface ProduceCardProps {
    product: VALLUE;
}

function ProduceCard({ product }: ProduceCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // При открытии карточки сбрасываем индекс изображения
    useEffect(() => {
        if (!isExpanded) {
            setCurrentImageIndex(0);
        }
    }, [isExpanded]);

    const handleCardClick = () => {
        setIsExpanded(!isExpanded);
    };

    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (product.image_url.length > 0) {
            setCurrentImageIndex((prev) =>
                prev === product.image_url.length - 1 ? 0 : prev + 1
            );
        }
    };

    const handlePrevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (product.image_url.length > 0) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? product.image_url.length - 1 : prev - 1
            );
        }
    };

    const getMainImage = () => {
        if (product.image_url.length > 0) {
            return product.image_url[currentImageIndex];
        }
        return ''; // или URL placeholder изображения
    };

    return (
        <div
            className={cx('produceCard', { expanded: isExpanded })}
            onClick={handleCardClick}
        >
            <div className={cx('cardContent')}>
                {/* Основной вид карточки (свернутый) */}
                {!isExpanded ? (
                    <div className={cx('compactView')}>
                        <div className={cx('imageContainer')}>
                            {product.image_url.length > 0 ? (
                                <img
                                    src={product.image_url[0]}
                                    alt={product.name}
                                    className={cx('productImage')}
                                />
                            ) : (
                                <div className={cx('imagePlaceholder')}>
                                    Нет фото
                                </div>
                            )}
                        </div>

                        <div className={cx('productInfo')}>
                            <h3 className={cx('productName')}>{product.name}</h3>
                            <div className={cx('detailsRow')}>
                                <span className={cx('category')}>{product.category}</span>
                                <span className={cx('productionTime')}>
                                    📅 {product.productionTime}
                                </span>
                            </div>
                            <div className={cx('priceRow')}>
                                <span className={cx('price')}>{product.price} ₽</span>
                                <span className={cx('expandHint')}>Нажмите для подробностей →</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Развернутый вид карточки */
                    <div className={cx('expandedView')}>
                        <div className={cx('expandedHeader')}>
                            <h2 className={cx('expandedName')}>{product.name}</h2>
                            <button
                                className={cx('closeButton')}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsExpanded(false);
                                }}
                            >
                                ✕
                            </button>
                        </div>

                        <div className={cx('expandedContent')}>
                            {/* Блок с изображениями */}
                            <div className={cx('gallerySection')}>
                                <div className={cx('mainGallery')}>
                                    {product.image_url.length > 0 ? (
                                        <>
                                            <img
                                                src={getMainImage()}
                                                alt={`${product.name} - фото ${currentImageIndex + 1}`}
                                                className={cx('expandedImage')}
                                            />

                                            {/* Навигация по изображениям */}
                                            {product.image_url.length > 1 && (
                                                <>
                                                    <button
                                                        className={cx('navButton', 'prevButton')}
                                                        onClick={handlePrevImage}
                                                    >
                                                        ‹
                                                    </button>
                                                    <button
                                                        className={cx('navButton', 'nextButton')}
                                                        onClick={handleNextImage}
                                                    >
                                                        ›
                                                    </button>

                                                    {/* Индикатор текущего изображения */}
                                                    <div className={cx('imageCounter')}>
                                                        {currentImageIndex + 1} / {product.image_url.length}
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <div className={cx('noImages')}>
                                            Изображения отсутствуют
                                        </div>
                                    )}
                                </div>

                                {/* Миниатюры (если есть несколько изображений) */}
                                {product.image_url.length > 1 && (
                                    <div className={cx('thumbnails')}>
                                        {product.image_url.map((url, index) => (
                                            <button
                                                key={index}
                                                className={cx('thumbnail', {
                                                    active: index === currentImageIndex
                                                })}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentImageIndex(index);
                                                }}
                                            >
                                                <img
                                                    src={url}
                                                    alt={`Миниатюра ${index + 1}`}
                                                    className={cx('thumbnailImage')}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Блок с информацией */}
                            <div className={cx('infoSection')}>
                                <div className={cx('infoGrid')}>
                                    <div className={cx('infoItem')}>
                                        <span className={cx('infoLabel')}>Категория:</span>
                                        <span className={cx('infoValue')}>{product.category}</span>
                                    </div>
                                    <div className={cx('infoItem')}>
                                        <span className={cx('infoLabel')}>Срок изготовления:</span>
                                        <span className={cx('infoValue')}>{product.productionTime}</span>
                                    </div>
                                    <div className={cx('infoItem')}>
                                        <span className={cx('infoLabel')}>Артикул:</span>
                                        <span className={cx('infoValue')}>{product.id}</span>
                                    </div>
                                    <div className={cx('infoItem', 'priceItem')}>
                                        <span className={cx('infoLabel')}>Цена:</span>
                                        <span className={cx('priceValue')}>{product.price} ₽</span>
                                    </div>
                                </div>

                                {/* Описание (скрыто в обычном виде) */}
                                <div className={cx('descriptionSection')}>
                                    <h3 className={cx('descriptionTitle')}>Описание</h3>
                                    <p className={cx('description')}>{product.description}</p>
                                </div>

                                {/* Кнопка действия */}
                                <div className={cx('actions')}>
                                    <button className={cx('actionButton', 'buyButton')}>
                                        Заказать
                                    </button>
                                    <button
                                        className={cx('actionButton', 'closeActionButton')}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsExpanded(false);
                                        }}
                                    >
                                        Свернуть
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProduceCard;
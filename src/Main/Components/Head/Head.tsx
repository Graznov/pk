import classNames from 'classnames/bind';
import styles from './head.module.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setWind} from "../../store/oneSlice.ts";


const cx = classNames.bind(styles);

const Header = () => {

    const dispatch = useDispatch();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Эффект для отслеживания скролла
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Закрытие меню при клике на ссылку (на мобильных)
    // const closeMenu = () => {
    //     setIsMenuOpen(false);
    // };

    return (
        <header className={cx('head', { scrolled })}>

            <div className={cx('content')}>

                <div className={cx('head_logo')}>
                    <img src="https://github.com/Graznov/pk/blob/dev/public/Temp/PK_TEMP_LOGO.png?raw=true" alt="Логотип кожевенного мастера" />
                </div>

                {/* Бургер-меню для мобильных */}
                <button
                    className={cx('menu_toggle', { active: isMenuOpen })}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Меню"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={cx('head_links', { active: isMenuOpen })}>
                    <li>
                        <NavLink
                            to={'/'}
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={()=>{
                                    dispatch(setWind('title'))
                                    setIsMenuOpen(false);
                                }
                            }
                        >
                            На главную
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/aboutme'}
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={()=>{
                                dispatch(setWind('aboutme'))
                                setIsMenuOpen(false);
                            }
                            }                    >
                            Обо мне
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/produce'}
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={()=>{
                                dispatch(setWind('produce'))
                                setIsMenuOpen(false);
                            }
                            }                    >
                            Мои изделия
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/service'}
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={()=>{
                                dispatch(setWind('service'))
                                setIsMenuOpen(false);
                            }
                            }                    >
                            Уход за изделиями
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/fabrication'}
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={()=>{
                                dispatch(setWind('fabrication'))
                                setIsMenuOpen(false);
                            }
                            }                    >
                            Процесс изготовления
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/recommendation'}
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={()=>{
                                dispatch(setWind('recommendation'))
                                setIsMenuOpen(false);
                            }
                            }                    >
                            Отзывы
                        </NavLink>
                    </li>
                </ul>

            </div>
        </header>
    );
};

export default Header;
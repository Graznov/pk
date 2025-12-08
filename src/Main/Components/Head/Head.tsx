import classNames from 'classnames/bind';
import styles from './head.module.css';
//
//
// import {NavLink} from "react-router-dom";
//
const cx = classNames.bind(styles);
//
// function Head(){
//
//     return (
//         <div className={cx('head')}>
//
//             <div className={cx('head_logo')}>
//                 <img src="../../../assets/Temp/icon2.png" alt="logo"/>
//             </div>
//
//             <ul className={cx('head_links')}>
//                 <li>
//                     <NavLink to={'/'}>На главную</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to={'/aboutme'}>Обо мне</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to={'/produce'}>Мои изделия</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to={'/service'}>Уход за кожаными изделиями</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to={'/fabrication'}>Процесс изготовления</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to={'/recommendation'}>Отзывы</NavLink>
//                 </li>
//             </ul>
//
//
//
//         </div>
//     )
//
// }
//
// export default Head;


import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
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
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={cx('head', { scrolled })}>
            <div className={cx('head_logo')}>
                <img src="../../../../public/Temp/PK_TEMP_LOGO.png" alt="Логотип кожевенного мастера" />
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
                        onClick={closeMenu}
                    >
                        На главную
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/aboutme'}
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={closeMenu}
                    >
                        Обо мне
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/produce'}
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={closeMenu}
                    >
                        Мои изделия
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/service'}
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={closeMenu}
                    >
                        Уход за кожаными изделиями
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/fabrication'}
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={closeMenu}
                    >
                        Процесс изготовления
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/recommendation'}
                        className={({ isActive }) => isActive ? 'active' : ''}
                        onClick={closeMenu}
                    >
                        Отзывы
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;
import classNames from 'classnames/bind';
import styles from './head.module.css';
import {NavLink} from "react-router-dom";

const cx = classNames.bind(styles);

function Head(){

    return (
        <div className={cx('head')}>

            <div className={cx('head__logo')}>
                <img src="../../../assets/Temp/icon2.png" alt="logo"/>
            </div>

            <ul className={cx('head__links')}>
                <li>aaaa
                    {/*<NavLink to={#}></NavLink>*/}
                </li>
                <li>bbbb
                    {/*<NavLink to={#}></NavLink>*/}
                </li>
                <li>cccc
                    {/*<NavLink to={#}></NavLink>*/}
                </li>
                <li>dddd
                    {/*<NavLink to={#}></NavLink>*/}
                </li>
                <li>eeee
                    {/*<NavLink to={#}></NavLink>*/}
                </li>
            </ul>



        </div>
    )

}

export default Head;
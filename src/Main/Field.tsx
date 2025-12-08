import classNames from 'classnames/bind';
import styles from './field.module.css';
import Head from "./Components/Head/Head.tsx";
import Basement from "./Components/Basement/Basement.tsx";
import {Outlet} from "react-router-dom";

const cx = classNames.bind(styles);



function Field(){

    return (
        <div className={cx('field')}>

            <Head/>

            <div className={cx('field_content')}>
                <Outlet/>
            </div>


            <Basement/>

        </div>
    )

}

export default Field;
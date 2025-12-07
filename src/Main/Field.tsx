import classNames from 'classnames/bind';
import styles from './field.module.css';
import Head from "./Components/Head/Head.tsx";
import Basement from "./Components/Basement/Basement.tsx";

const cx = classNames.bind(styles);

function Field(){

    return (
        <div className={cx('field')}>

            <Head/>

            ______

            <Basement/>

        </div>
    )

}

export default Field;
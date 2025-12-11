import classNames from 'classnames/bind';
import styles from './basement.module.css';

const cx = classNames.bind(styles);

function Basement() {

    return (
        <div className={cx('basement')}>
            <div className={cx("content")}>
                Basement

            </div>


        </div>
    )

}

export default Basement;
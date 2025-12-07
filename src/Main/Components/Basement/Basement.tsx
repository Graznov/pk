import classNames from 'classnames/bind';
import styles from './basement.module.css';

const cx = classNames.bind(styles);

function Basement() {

    return (
        <div className={cx('basement')}>

            Basement

        </div>
    )

}

export default Basement;
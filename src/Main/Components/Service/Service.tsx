import classNames from "classnames/bind";
import styles from './service.module.css'

const cx = classNames.bind(styles)

function Service() {

    return(
        <div className={cx('service')}>
            Service
        </div>
    )
}

export default Service

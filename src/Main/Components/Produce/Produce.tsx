import classNames from "classnames/bind";
import styles from './produce.module.css'

const cx = classNames.bind(styles)

function Produce() {

    return(
        <div className={cx('produce')}>
            Produce
        </div>
    )
}

export default Produce

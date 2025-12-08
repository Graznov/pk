import classNames from "classnames/bind";
import styles from './fabrication.module.css'

const cx = classNames.bind(styles)

function Fabrication() {

    return(
        <div className={cx('fabrication')}>
            Fabrication
        </div>
    )
}

export default Fabrication

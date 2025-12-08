import classNames from "classnames/bind";
import styles from './aboutme.module.css'

const cx = classNames.bind(styles)

function Aboutme() {

    return(
        <div className={cx('aboutme')}>
            About Me
        </div>
    )
}

export default Aboutme

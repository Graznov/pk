import classNames from "classnames/bind";
import styles from './recommendation.module.css'

const cx = classNames.bind(styles)

function Recommendation() {

    return(
        <div className={cx('recommendation')}>
            Recommendation
        </div>
    )
}

export default Recommendation

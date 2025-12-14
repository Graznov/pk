import classNames from "classnames/bind";
import styles from './produce.module.css'

const cx = classNames.bind(styles)

function Produce() {

    return(
        <div className={cx('produce')}>
            <div className={cx("content")}>
                Produce

                <div className={cx("produce_zagol")}>
                    Мои изделия...
                </div>

                <div className={cx('produce_card')}>
                    {

                    }
                </div>

            </div>
        </div>
    )
}

export default Produce

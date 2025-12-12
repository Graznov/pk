import classNames from "classnames/bind";
import styles from './service.module.css'
import {TEMP_VALLUES} from "../../../TEMP.ts";

const cx = classNames.bind(styles)

function Service() {

    return(
        <div className={cx('service')}>
            <div className={cx("content")}>

                <div className={cx("home_content")}>
                    <div className={cx("home_content_Left")}>
                        <div className={cx("zagol")}>
                            {TEMP_VALLUES.SERVICE.ZAGOL}
                        </div>
                        <div className={cx("text")}>
                            {TEMP_VALLUES.SERVICE.LONG_TEXT_1}
                        </div>
                    </div>

                    <div className={cx("home_content_Right")}>
                        <div className={cx("text")}>
                            {TEMP_VALLUES.SERVICE.LONG_TEXT_2}
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Service

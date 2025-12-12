import classNames from "classnames/bind";
import styles from './aboutme.module.css'
import {TEMP_VALLUES} from "../../../TEMP.ts";

const cx = classNames.bind(styles)

function Aboutme() {

    return(
        <div className={cx('aboutme')}>
            <div className={cx("content")}>

                <div className={cx("home_content")}>
                    <div className={cx("home_content_Left")}>
                        <img className={cx("home_content_Left_photo")} src="../../../../public/Temp/avatar.png" alt="photo"/>
                        <div className={cx("zagol")}>
                            {TEMP_VALLUES.ABOUTME.ZAGOL}
                        </div>
                        <div className={cx("text")}>
                            {TEMP_VALLUES.ABOUTME.LONG_TEXT_1}
                        </div>
                    </div>

                    <div className={cx("home_content_Right")}>
                        <div className={cx("text")}>
                            {TEMP_VALLUES.ABOUTME.LONG_TEXT_2}
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Aboutme

import classNames from 'classnames/bind';
import styles from './home.module.css';
import {TEMP_VALLUES} from "../../../TEMP.ts";

const cx = classNames.bind(styles);

function Home() {

    return (
        <div className={cx('home')}>
            <div className={cx("content")}>

                <div className={cx("home_content")}>
                    <div className={cx("home_content_Left")}>
                        <div className={cx("zagol")}>
                            {TEMP_VALLUES.HOME.ZAGOL}
                        </div>
                        <div className={cx("text")}>
                            {TEMP_VALLUES.HOME.LONG_TEXT}
                        </div>
                    </div>

                    <div className={cx("home_content_Right")}>
                        <div className={cx("text")}>
                            {TEMP_VALLUES.HOME.LONG_TEXT}
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )

}

export default Home;
import classNames from "classnames/bind";
import styles from './recommendation.module.css'
import {TEMP_VALLUES} from "../../../TEMP.ts";
import Review from "./Review/Review.tsx";

const cx = classNames.bind(styles)

function Recommendation() {

    return(
        <div className={cx('recommendation')}>
            <div className={cx("content")}>
                <div className={cx("recommendation_zagol")}>

                    {TEMP_VALLUES.RECOMENDATION.ZAGOL}
                </div>

                <Review/>



                {/*<div className={cx("home_content")}>*/}
                {/*    <div className={cx("home_content_Left")}>*/}
                {/*        <div className={cx("zagol")}>*/}
                {/*            {TEMP_VALLUES.HOME.ZAGOL}*/}
                {/*        </div>*/}
                {/*        <div className={cx("text")}>*/}
                {/*            {TEMP_VALLUES.HOME.LONG_TEXT}*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className={cx("home_content_Right")}>*/}
                {/*        <div className={cx("text")}>*/}
                {/*            {TEMP_VALLUES.HOME.LONG_TEXT}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>



        </div>
    )
}

export default Recommendation

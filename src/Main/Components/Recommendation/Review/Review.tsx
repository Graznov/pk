import classNames from "classnames/bind";
import styles from './review.module.css'
// import {TEMP_VALLUES} from "../../../TEMP.ts";

const cx = classNames.bind(styles)

function Review() {

    return(
        <div className={cx('review')}>

            <div className={cx('review_photo')}>
                <img src="#" alt="user photo"/>
            </div>

        </div>
    )
}

export default Review

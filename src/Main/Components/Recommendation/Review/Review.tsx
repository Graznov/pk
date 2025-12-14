import classNames from "classnames/bind";
import styles from './review.module.css'
import {JSX} from "react";
// import {TEMP_VALLUES} from "../../../TEMP.ts";

const cx = classNames.bind(styles)

interface cerdReviewProps {

    id: number,
    authorName: string,
    rating: number,
    date: string,
    text: string,
    avatarUrl: string,
    likes: number,
    dislikes: number,
    verifiedPurchase: boolean

}

function Review(props: cerdReviewProps): JSX.Element {

    return(
        <div className={cx('review')}>

            <div className={cx('review_photo')}>
                <img src={props.avatarUrl} alt="user photo"/>
            </div>

            <div className={cx('review_text')}>
                {props.text}
            </div>

            <div className={cx('review_name')}>
                {props.authorName}
            </div>

        </div>
    )
}

export default Review

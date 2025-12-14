import classNames from "classnames/bind";
import styles from './recommendation.module.css'
import {TEMP_VALLUES} from "../../../TEMP.ts";
import Review from "./Review/Review.tsx";
import {sampleReviews} from "../../../../public/Temp/review_content/VALLUES_REVIEW.ts";

const cx = classNames.bind(styles)

function Recommendation() {

    return(
        <div className={cx('recommendation')}>
            <div className={cx("content")}>
                <div className={cx("recommendation_zagol")}>

                    {TEMP_VALLUES.RECOMENDATION.ZAGOL}
                </div>

                <div className={cx('recommendation_card')}>
                    {
                        sampleReviews.map(elem =>
                            <Review
                                key = {elem.id}
                                id={elem.id}
                                authorName={elem.authorName}
                                rating={elem.rating}
                                date={elem.date}
                                text={elem.text}
                                avatarUrl={elem.avatarUrl}
                                likes={elem.likes}
                                dislikes={elem.dislikes}
                                verifiedPurchase={elem.verifiedPurchase}
                            />
                        )
                    }
                </div>





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

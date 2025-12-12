import classNames from "classnames/bind";
import styles from './fabrication.module.css'
import {TEMP_VALLUES} from "../../../TEMP.ts";

const cx = classNames.bind(styles)

function Fabrication() {

    return(

        <div className={cx('fabrication')}>
            <div className={cx("content")}>

                <div className={cx("home_content")}>
                    <div className={cx("zagol")}>
                        {TEMP_VALLUES.FABRICATION.ZAGOL}
                    </div>

                    <div className={cx("videos")}>


                        <iframe className={cx("videos_item item_One")} src="https://www.youtube.com/embed/y4fCbHMtvhc"
                                title="Zip wallet / Кошелек на молнии из кожи от #wildleathercraft. Free pattern PDF."
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>

                        <iframe className={cx("videos_item item_Two")} src="https://www.youtube.com/embed/Er49UHlEnI0"
                                title="Making a Bi-fold wallet from Pull-Up leather Tobacco by #wildleathercraft. Free pattern PDF."
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>

                        <iframe className={cx("videos_item item_Three")} src="https://www.youtube.com/embed/sBtuixpCZ_A"
                                title="Making a Handmade Traditional Bifold Wallet." frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default Fabrication

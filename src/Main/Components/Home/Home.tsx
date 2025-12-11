import classNames from 'classnames/bind';
import styles from './home.module.css';
import {TEMP_VALLUES} from "../../../TEMP.ts";

const cx = classNames.bind(styles);

function Home() {

    return (
        <div className={cx('home')}>

            <div className="home_content">
                <div className="home_content_Left">
                    <div className="zagol">
                        {TEMP_VALLUES.ZAGOL}
                    </div>
                    <div className="text">
                        {TEMP_VALLUES.LONG_TEXT}
                    </div>
                </div>

                <div className="home_content_Right">
                    <div className="text">
                        {TEMP_VALLUES.LONG_TEXT}
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Home;
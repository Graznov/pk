import classNames from "classnames/bind";
import styles from './produce.module.css'
import VALLUES_DATA_TEMP, {type VALLUE} from "../../../../public/Temp/Vallue/VALLUES_DATA_TEMP.ts";
import ProduceCard from "./ProduceCard/ProduceCard.tsx";

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
                        VALLUES_DATA_TEMP.map((item:VALLUE) =>
                            <ProduceCard product={item}/>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Produce

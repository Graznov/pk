import classNames from 'classnames/bind';
import styles from './home.module.css';

const cx = classNames.bind(styles);

function Home() {

    return (
        <div className={cx('home')}>

            Home

        </div>
    )

}

export default Home;
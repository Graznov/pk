import classNames from 'classnames/bind';
import styles from './field.module.css';
import Head from "./Components/Head/Head.tsx";
// import Basement from "./Components/Basement/Basement.tsx";
import {Outlet} from "react-router-dom";
// import {useDispatch} from "react-redux";
import {useAppSelector} from "./store/hooks.ts";
import {useEffect} from "react";
import Home from "./Components/Home/Home.tsx";

const cx = classNames.bind(styles);



function Field(){

// const dispatch = useDispatch();

const wind = useAppSelector(state => state.oneSlice.wind);

useEffect(()=>{
    console.log("%c"
        + `#######\n#\n#  Field.tsx\n#  wind: ${wind}\n#\n######`,
        "color:tomato;font-size:17px;");

},[wind])

    return (

        <div className={cx('field')}>

            {/*<div className="content">*/}
                <Head/>

                <div className={cx('field_content')}>
                    {
                        (wind === 'title') ? <Home/> : <Outlet/>
                    }
                </div>

                {/*<Basement/>*/}

            {/*</div>*/}

        </div>

    )

}

export default Field;
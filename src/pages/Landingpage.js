import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import styles from "../styles/landingpage.module.css"


function Landingpage() {
    const [padding, setpadding] = useState("")
    useEffect(()=>{
        setpadding(window.innerHeight)

    },[])
    console.log(padding)
    return (
        <>
<<<<<<< HEAD
        <div style={{backgroundImage:`url(bg.png)`,paddingBottom:`${padding/3}px`}} className={styles.background_img}>
            <div className={styles.upper_box}>
                <div className={styles.right_box}>
                    {/* <img src="logo_img.png" alt="" className={styles.logo} /> */}
                    <h1 className={styles.header_h1}>Billy</h1>

                </div>
                <div className={styles.left_box}>
                    <div className={styles.sigin}><Link to="/signup"><p className={styles.text_box} >Sigin</p></Link></div>
                    <div className={styles.login}><Link to="/login"><p className={styles.text_box} >Login</p></Link></div>
                </div>
            </div>
            <div className={styles.lower_box}>
                <div className={styles.lower_left}>
                    <h1 className={styles.cont_header}>Billy</h1>
                    <p className={styles.cont_p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore voluptates tenetur, quod sapiente accusantium aliquam reprehenderit nostrum alias provident a itaque ullam. Iusto consequatur cupiditate, esse perspiciatis praesentium adipisci? Quaerat.</p>
                    <div className={styles.left_box}>
                    <div className={styles.sigin}><Link to="/signup"><p className={styles.text_box} >Sigin</p></Link></div>

                </div>
                </div>
                <div className={styles.lower_right}>
                    <img src="cont_img.png" alt="" className={styles.cont_img} />
                </div>
            </div>
            </div>
=======
            <h1>Welcome to the Bill Splitter App!</h1>
            <h4>Let's get started</h4>
            <Link to='/login'>
                click me !
            </Link>
            <Link to='/profile'>
                profile!
            </Link>
            <Link to='/signup'>
                Signup
            </Link>
>>>>>>> e9c1f1a15518cc3b8e1a7c60d3c6976f4931808e
        </>
    )
}

export default Landingpage
import styles from "./Main.module.css";

function Main() {
    const classname="neon"
    return ( 
        <div className={styles.mainContainer}>

            <div>
                <div>
                    <img className={styles.bright}  src="https://themetakongz.com/_img/mv_kongz1.png" alt=""></img>
                    <img className={styles.dim} src="https://themetakongz.com/_img/mv_kongz1_off.png" alt=""></img>
                    <img className={styles.backImg} src="https://themetakongz.com/_img/mv_kongz2.png" alt=""></img>
                </div>
            </div>

            <p className={`${styles.neon} ${styles.neon1}`}></p>
            <p className={`${styles.neon} ${styles.neon2}`}></p>
            <p className={`${styles.neon} ${styles.neon3}`}></p>
            <p className={`${styles.neon} ${styles.neon4}`}></p>
            <p className={`${styles.neon} ${styles.neon5}`}></p>

            <div className={styles.text}>
                <h1 className={styles.animation}>THE APIENS : BEGINS</h1>
                <h1 className={styles.animation2}>THE APIENS : BEGINS</h1>
                <h1 style={{bottom:"6rem",left:"10px"}} className={styles.animation}>THE APIENS : BEGINS</h1>
                <h1 style={{bottom:"6rem",left:"10px"}} className={styles.animation2}>THE APIENS : BEGINS</h1>
                <h1 className={styles.actualh1}>THE APIENS <span>: BEGINS</span></h1>
                <p>The Kongz are unique and randomly generated 3D NFT PFP. Not only that, Kongz can make coins and can breed baby Kongz. What an aweeeeeesome creature it is!</p>
            </div>
        </div>
     );
}

export default Main;
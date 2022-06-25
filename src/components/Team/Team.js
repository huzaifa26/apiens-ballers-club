import styles from "./Team.module.css";
import {useRef} from "react";
import useOnScreen from "../Utils/useOnScreen";

function Team() {
    const firstImage=useRef();
    const isVisible1=useOnScreen(firstImage);

    const secondImage=useRef();
    const isVisible2=useOnScreen(secondImage);

    const line1=useRef();
    const isVisible3=useOnScreen(line1);

    const card1=useRef();
    const isVisible4=useOnScreen(card1);

    const card2=useRef();
    const isVisible5=useOnScreen(card2);

    const card3=useRef();
    const isVisible6=useOnScreen(card3);

    const card4=useRef();
    const isVisible7=useOnScreen(card4);

    const card5=useRef();
    const isVisible8=useOnScreen(card5);

    return ( 
        <div id="Team" className={styles.teamContainer}>
            <div className={styles.imgDiv}>
                <img className={isVisible1 && styles.fimg} ref={firstImage} src="./Apiens.png" alt=""/>
                <div ref={line1}>
                    <p className={`${styles.x} ${isVisible3 && styles.xAnime}`}></p>
                    <p className={`${styles.y} ${isVisible3 && styles.yAnime}`}></p>
                </div>
                <img className={isVisible2 && styles.simg} ref={secondImage} src="https://themetakongz.com/_img/sec_team_title2.png" alt=""/>
            </div>
            
            <div className={styles.team}>
                <div ref={card1} className={isVisible4 && styles.animation}>
                    <h3>Project Management</h3>
                    <p><span>#</span>Strongmin</p>
                </div>
                <div ref={card2} className={isVisible5 && styles.animation}>
                    <h3>Development</h3>
                    <p><span>#</span>iamdoo2 & LIKELION</p>
                </div>
                <div ref={card3} className={isVisible6 && styles.animation}>
                    <h3>Development</h3>
                    <p><span>#</span>Tripple.J</p>
                </div>
                <div ref={card4} className={isVisible7 && styles.animation}>
                    <h3>Marketing & CS</h3>
                    <p><span>#</span>Tom.H</p>
                </div>
                <div ref={card5} className={isVisible8 && styles.animation}>
                    <h3>Art & Design</h3>
                    <p><span>#</span>H.B.K.</p>
                </div>
            </div>
        </div>
     );
}

export default Team;
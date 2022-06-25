import styles from "./RoadMap.module.css";
import {useRef} from "react";
import useOnScreen from "../Utils/useOnScreen";

function RoadMap() {

    const ref1 = useRef()
    const isVisible1 = useOnScreen(ref1);

    const ref2 = useRef()
    const isVisible2 = useOnScreen(ref2);

    const ref3 = useRef()
    const isVisible3 = useOnScreen(ref3);

    const ref4 = useRef()
    const isVisible4 = useOnScreen(ref4);

    const ref5 = useRef()
    const isVisible5 = useOnScreen(ref5);

    const ref6 = useRef()
    const isVisible6 = useOnScreen(ref6);

    // const ref7 = useRef()
    // const isVisible7 = useOnScreen(ref7);

    // const ref8 = useRef()
    // const isVisible8 = useOnScreen(ref8);

    // const ref9 = useRef()
    // const isVisible9 = useOnScreen(ref9);

    // const ref10 = useRef()
    // const isVisible10 = useOnScreen(ref10);

    // const ref11 = useRef()
    // const isVisible11 = useOnScreen(ref11);

    // const ref12 = useRef()
    // const isVisible12 = useOnScreen(ref12);

    // const ref13 = useRef()
    // const isVisible13 = useOnScreen(ref13);

    // const ref14 = useRef()
    // const isVisible14 = useOnScreen(ref14);

    return ( 
        <div id="Roadmap" className={styles.outerDiv}>
            <h2>ROAD<span>MAP</span></h2>
                <div className={styles.rpadmapContainer}>
                    <div ref={ref1} className={`${styles.card1} ${isVisible1 && styles.card2}`}>
                        <h2>1</h2>
                        <p> Holder with more than 15 Apiens Ballers after minting will receive an AIRDROP <small>"Limited Edition NFT".</small></p>
                    </div>

                    <div  ref={ref2} className={`${styles.card1} ${isVisible2 && styles.card2}`}>
                        <h2>2</h2>
                        <p>There will be an official billboard in NYC to celebrate <small>"Apiens Baller is SOLD OUT"</small></p>
                    </div>

                    <div  ref={ref3} className={`${styles.card1} ${isVisible3 && styles.card2}`}>
                        <h2>3</h2>
                        <p><small>Buy lands</small> in the metaverse such as Sandbox, Decentraland, Cryptovoxels.</p>
                    </div>

                    <div  ref={ref4} className={`${styles.card1} ${isVisible4 && styles.card2}`}>
                        <h2>4</h2>
                        <p><small>COMMUNITY OWNED</small> Apiens Baller Club (ABC) holders will own and control the future of the Apiens Baller Metaverse governed through the community DAO."</p>
                    </div>

                    <div  ref={ref5} className={`${styles.card3} ${styles.cardUn} ${isVisible5 && styles.card2}`}>
                        <h2>5</h2>
                        <p><small>SOCIAL METAVERSE</small> Social deduction is the first game mode. Custom game modes, map makers, and metaverse expansion are planned for future releases</p>
                    </div>

                    <div  ref={ref6} className={`${styles.card1} ${isVisible6 && styles.card2}`}>
                        <h2>6</h2>
                        <p><small>APIENS BALLER 3D AIRDROP:</small> All Apiens Baller holders will get the opportunity to wrap their Apiens Baller into a 3D version. There will be times when you need your Apiens Baller 2D and times you’ll need it 3D. Stay tuned!"</p>
                    </div>

                    {/* <div  ref={ref7} className={`${styles.card3} ${styles.cardUn} ${isVisible7 && styles.card2}`}>
                        <h2>35<small>%</small></h2>
                        <p>The <small>governance</small> function will be added to the Kongz homepage.</p>
                    </div>

                    <div  ref={ref8} className={`${styles.card1} ${isVisible8 && styles.card2}`}>
                        <h2>40<small>%</small></h2>
                        <p>We will start the development of the <small>coin ecosystem and breeding function.</small></p>
                    </div>

                    <div  ref={ref9} className={`${styles.card3} ${styles.cardUn} ${isVisible9 && styles.card2}`}>
                        <h2>50<small>%</small></h2>
                        <p>The <small>‘Holder-Only Kongz Store’</small> will be unlocked on the official website.</p>
                    </div>

                    <div  ref={ref10} className={`${styles.card1} ${isVisible10 && styles.card2}`}>
                        <h2>60<small>%</small></h2>
                        <p>For globalization, we propose collaborations with <small>top domestic entertainment companies.</small></p>
                    </div>

                    <div  ref={ref11} className={`${styles.card3} ${styles.cardUn} ${isVisible11 && styles.card2}`}>
                        <h2>70<small>%</small></h2>
                        <p>The right to buy Limited edition NFT ‘00’ will be <small>open only to the holders.</small></p>
                    </div>

                    <div  ref={ref12} className={`${styles.card3} ${styles.cardUn} ${isVisible12 && styles.card2}`}>
                        <h2>80<small>%</small></h2>
                        <p>Send a <small>collaboration proposal email</small> to B.A.Y.C or CyberKongz</p>
                    </div>

                    <div  ref={ref13} className={`${styles.card3} ${styles.cardUn} ${isVisible13 && styles.card2}`}>
                        <h2>90<small>%</small></h2>
                        <p><small>Start game development</small> and Voxel avatar in Sandbox.</p>
                    </div>

                    <div  ref={ref14} className={`${styles.card4} ${styles.cardUn} ${isVisible14 && styles.card2}`}>
                        <h2>100<small>%</small></h2>
                        <p>Planet Escape! 'K-NFT Globalization' Version 2.0 is a full-fledged metaverse!</p>
                    </div> */}

                </div>
                {/* <div className={styles.btndiv}>
                    <button className={styles.button}>View detailed roadmap</button>
                    <button className={styles.button}>Download detailed roadmap</button>
                </div> */}
        </div>
     );
}

export default RoadMap;
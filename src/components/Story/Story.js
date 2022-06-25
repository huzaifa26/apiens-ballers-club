import styles from "./Story.module.css";

function Story() {
    return ( 
        <div id="Story" className={styles.storyContainer}>
            <div className={styles.firstDiv}>
                <img className={styles.banner} src="https://themetakongz.com/_img/story_pster.png" alt=""/>
                <img className={styles.ape} src="https://themetakongz.com/_img/story_kongz_bg.jpg" alt=""/>
            </div>
            <div className={styles.secondDiv}>
                <img className={styles.sDImg} src="https://themetakongz.com/_img/story_konz_1.png" alt=""/>

                <div className={styles.story}>
                    {/* <div>
                        <h2><span>#1.</span> Every holiday, people gather at the circus.</h2>
                        <p>In a glass cage, they groom each other, but even that is starting to get frustrating. They look outside and see people giggling and having fun, but what’s so fun?</p>
                        <p>Then one day, a poster flew in front of a yawning gorilla. A paradise of gorillas was depicted in the poster.</p>
                        <p>(The Most Complete Ecosystem: The newly built Half Moon National Park)</p>
                    </div>
                    <br/>
                    <div>
                        <h2><span>#2.</span> Is there really such a place?</h2>
                        <p>Now gorillas don’t even care about their trainers’ passionate training anymore.</p>
                        <p>The image from the poster floats in their minds while they jump over burning rings and play instruments.</p>
                        <p>Speaking of which, who has this poster now?</p>
                        <p>The gorillas look at each other and notice that they are all empty-handed.</p>
                        <p>The trainer gives up and exits the room. As soon as he turns off the lights, the gorillas hear a ZAP!!</p>
                        <p>In the circus, a light begins to emit from the manhole below them.</p>
                    </div>
                    <br/>

                    <div>
                        <h2><span>#3.</span> Have you ever seen a gorilla in a robe with goggles?</h2>
                        <p>In a white lab below the circus, a gorilla wearing goggles is assembling a large engine.</p>
                        <p>Paused, the gorilla asks the visitors to sit down. He then walks towards a wall and opens the curtains.</p>
                        <p>Two shoddy drawings and a poster</p>
                        <p>The gorilla points to the text and tilts his head and says.</p>
                        <p>"Still don’t understand?"</p>
                        <p>The text reads: (To the Paradise/Craft and Fly)</p>
                    </div>
                    <br/> */}

                    <div>
                        <h1>STORY <span>The Apiens Ballers</span></h1>

                        <h2><span>#1.</span> WHAT is Apiens Baller Club?</h2>
                        <p>Metaverses are boring without games, and competitive games lack social connection. There needs to be a middle ground. Social gaming bridges the gap between today’s Twitch culture and the future of immersive metaverses.</p>
                        <br/>
                        <p>Apiens Baller Club is a AAA social gaming metaverse that is truly player-owned and powered. Apiens Baller Club’ first game mode will be a social deduction game.</p>
                        <br/>
                        <p>The Apiens Baller Club's drop will give holders access to all Genesis Season events. Each event provides access to a different part of the BallerMataverse."</p>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default Story;
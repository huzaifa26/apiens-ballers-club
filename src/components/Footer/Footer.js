import styles from "./Footer.module.css";

function Footer() {
    return ( 
        <div className={styles.Footer}>
            <div className={styles.footerInfo}>
                <h1>Apiens ballers club</h1>
                {/* <div>
                    <ul>
                        <li>Meta Kongz</li>
                        <li>CEO Kangmin Lee</li>
                        <li>Boutiquemonaco B-2503, 1316-5, Seocho-daero, Seocho-gu, Seoul, Republic of Korea</li>
                        <li>E-mail kongz.project@gmail.com</li>
                    </ul>
                </div> */}
                <div>
                    <button>Terms of use</button>
                    <button>Copyright</button>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>
                    COPYRIGHT ⓒ Apiens Ballers. ALL RIGHTS RESERVED
                </p>
            </div>
        </div>
     );
}

export default Footer;
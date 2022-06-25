import { useState } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-scroll";

function MNav(){
    return(
        <div className={styles.mNav}>
            <ul>
                <li>STORY</li>
                <li>KONGZ NFT</li>
                <li>ROADMAP</li>
                <li>TEAM</li>
                <li>GOVERNANCE</li>
                <li>COMUNITY</li>
                <li>PARTNER</li>
            </ul>
        </div>
    )
}

function Nav() {

    const [showMobNav,setMobNav]=useState(false);
    const [showSocials,setSocials]=useState(false);
    
    const hamburgerClickHandler=()=>{
        setMobNav(true);
    }

    const crossClickHandler=()=>{
        setMobNav(false);
    }

    const socialsClickHandler=()=>{
        setSocials(!showSocials);
    }

    return (
        <>
        <div className={`${styles.navContainer} ${showMobNav && styles.navBlackContainer}`}>
            <nav>
                <h1>Apiens Ballers Club</h1>
                {/* <ul>
                    <li>
                        <Link to="Story"  activeClass="active" smooth={true}>
                            STORY
                        </Link>
                    </li>
                    <li>
                        <Link to="Nft"  activeClass="active" smooth={true}>
                            KONGZ NFT
                        </Link>
                    </li>
                    <li>
                        <Link to="Roadmap"  activeClass="active" smooth={true}>
                            ROADMAP
                        </Link>
                    </li>
                    <li>
                        <Link to="Team"  activeClass="active" smooth={true}>
                            TEAM
                        </Link>
                    </li>
                    <li>
                        <Link to="kcy"  activeClass="active" smooth={true}>
                            GOVERNANCE
                        </Link>
                    </li>
                    <li>
                        <Link to="kcy"  activeClass="active" smooth={true}>
                            COMUNITY
                        </Link>
                    </li>
                    <li>
                        <Link to="partner"  activeClass="active" smooth={true}>
                            PARTNER
                        </Link>
                    </li>
                </ul> */}
                <div className={styles.socials}>
                    <img onClick={socialsClickHandler} src="./link-solid.svg"/>
                    <p onClick={socialsClickHandler}>{'>'}</p>
                </div>

                {showSocials &&
                    <div className={styles.dropDown}>
                        <ul>
                        <li>
                            Github
                        </li>
                        <li>
                            Kakoo
                        </li>
                        <li>
                            Discord
                        </li>
                        <li>
                            Telegram
                        </li>
                        <li>
                            Twitter
                        </li>
                        <li>
                            Instagram
                        </li>
                        <li>
                            Youtube
                        </li>
                        </ul>
                    </div>
                }
                

                {!showMobNav &&
                <div onClick={hamburgerClickHandler}  className={styles.hamburger}>
                    <p></p>
                    <p></p> 
                    <p></p>
                    <p></p>
                </div>}

                {
                    showMobNav &&
                    <div onClick={crossClickHandler} className={`${styles.hamburger} ${styles.cross}`}>
                        <img src="./xmark-solid.svg"/>
                    </div>
                }
            </nav>
        </div>
        { showMobNav &&
            <MNav/>
        }
        </>
     );
}

export default Nav;
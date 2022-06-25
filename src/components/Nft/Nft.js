import styles from "./Nft.module.css";
import Slider from 'infinite-react-carousel';

const SimpleSlider = () => {
  let images=3;
  
  return(
    <Slider autoplaySpeed="2000" duration="10000" arrows="false" arrowsBlock="false" autoplayScroll={images} autoplay rows="1" slidesPerRow="3">
      <div className={styles.img}>
        <img src="./01.png" alt=""/>
      </div>
      <div className={styles.img}>
        <img src="./02.png" alt=""/>
      </div>
      <div className={styles.img}>
        <img src="./03.png" alt=""/>
      </div>
      <div className={styles.img}>
        <img src="./04.png" alt=""/>
      </div>
      <div className={styles.img}>
        <img src="./05.png" alt=""/>
      </div>
      <div className={styles.img}>
        <img src="./06.png" alt=""/>
      </div>
      <div className={styles.img}>
        <img src="./07.png" alt=""/>
      </div>
      <div className={styles.img}>
        <img src="./08.png" alt=""/>
      </div>
      <div className={styles.img}>
        <img src="./10.png" alt=""/>
      </div>
      <div className={styles.img}>
        <img src="./11.png" alt=""/>
      </div>
      <div className={styles.img}>
        <img src="./12.png" alt=""/>
      </div>
    </Slider>
  )};

function Nft() {
    return ( 
        <div id="Nft" className={styles.outerDiv}>
            <img className={styles.image} src="https://themetakongz.com/_img/icon_klay_nft.png" alt=""/>

            <div className={styles.NftContainer}>
                <div>
                    <h2>Apiens Ballers <span>NFT</span></h2>
                </div>
                <div className={styles.slider}>
                    <SimpleSlider />
                </div>
                <div className={styles.btndiv}>
                    {/* <button className={styles.button}>Buy on OpenSea</button> */}
                </div>
            </div>
        </div>
     );
}

export default Nft;
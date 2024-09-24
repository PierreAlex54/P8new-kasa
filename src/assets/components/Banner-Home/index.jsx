import styles from "./index.module.scss"
import imgBanHome from "../../../assets/imgBannerHome.png"

function BannerHome() {
  return (
    <div className={styles.banner} style={{ '--bgImage': `url(${imgBanHome})` }}>
        {/* <img className='bannerImg' src={imgBanHome} alt="bannière avec image de la mer" /> */}
        <h2 className={styles.textOver}>Chez vous, partout et ailleurs</h2>
    </div>
  )
}

export default BannerHome
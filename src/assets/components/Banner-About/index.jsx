import styles from "./index.module.scss"
import imgBanAbout from "../../../assets/imgBannerAbout.png"

function BannerAbout() {
  return (
    <div className={styles.banner} style={{ '--bgImage': `url(${imgBanAbout})` }}>
    </div>
  )
}

export default BannerAbout
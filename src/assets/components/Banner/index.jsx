import PropTypes from "prop-types"
import styles from "./index.module.scss"

function Banner({ title, bgImage, showOverlay = true }) {
  return (
    <div className={styles.banner} style={{ '--bgImage': `url(${bgImage})` }}>
      {showOverlay && <div className={styles.overlay}></div>}
      {title && <h2 className={styles.textOver}>{title}</h2>}
    </div>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  bgImage: PropTypes.string.isRequired, // Nécessaire pour définir l'image
  showOverlay: PropTypes.bool // Définit si l'overlay est affiché ou non
}

export default Banner
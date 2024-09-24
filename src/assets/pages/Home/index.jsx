import imgBanHome from "../../../assets/imgBannerHome.png"
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import RentGrid from '../../components/RentGrid'
import Footer from '../../components/Footer'

import "./index.scss"

function Home() {
  return (
    <div className='mainContainer'>
    <div><Header /></div>
    <div><Banner title={"Chez vous, partout et ailleurs"} bgImage={imgBanHome} /></div>
    <div><RentGrid /></div>
    <div><Footer /></div>
    </div>
  )
}

export default Home
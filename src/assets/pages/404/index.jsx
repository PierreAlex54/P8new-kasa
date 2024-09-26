import Header from "../../components/Header"
import Error404 from "../../components/404"
import Footer from "../../components/Footer"


function error() {
  return (
    <div>
    <div><Header /></div>
    <div><Error404 /></div>
    <div><Footer /></div>
    </div>
  )
}

export default error
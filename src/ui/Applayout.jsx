import { Outlet, useNavigation } from "react-router-dom"
import CartOverview from "../feature/cart/CartOverview"
import Header from "./Header"
import Loader from "./Loader";

function Applayout() {
  const navigation=useNavigation()
  // console.log(navigation);
  const isloading=navigation.state==='loading';
  return (
    <div className="layout">
      {isloading&&<Loader/>}
      <Header/>
      <main>
        <Outlet/>
      </main>
      <CartOverview/>
    </div>


  )
}

export default Applayout

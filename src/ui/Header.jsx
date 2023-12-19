
import {Link} from "react-router-dom"
import SearchOrder from "../feature/order/SearchOrder"

function Header() {
  return (
    <header>
      <Link to ='/'>Fast React Pizza co...</Link>
      <SearchOrder/>
      <p>Badal</p>
    </header>
  )
}

export default Header

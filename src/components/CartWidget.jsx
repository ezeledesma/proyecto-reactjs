import { MdOutlineShoppingCart } from "react-icons/md";
import "./CartWidget.css"

const CartWidget = () => {
  return (
	<div className="cart">
		<MdOutlineShoppingCart />
		<p>1</p>
	</div>
  )
}

export default CartWidget
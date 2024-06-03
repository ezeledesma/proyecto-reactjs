import "./NavBar.css"
import logo from "../img/logo.png"
import CartWidget from "./CartWidget"


const NavBar = () => {
  return (
    <nav className="navbar">
	<img className="logo" src={logo} alt="logo" />
	<ul>
		<li><button>Hamburguesas</button></li>
		<li><button>Helados</button></li>
		<li><button>Bebidas</button></li>
		<li><button>Mercados</button></li>
		<li><button>Mascotas</button></li>
	</ul>
	<CartWidget />
    </nav>
  )
}

export default NavBar
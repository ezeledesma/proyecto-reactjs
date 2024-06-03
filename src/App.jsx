import './App.css'
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {

return (
	<div>
		<NavBar />
		<ItemListContainer saludo="Bienvenido a la pagina!" />
	</div>
)
}

export default App

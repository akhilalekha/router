import "./App.css";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function App() {
	const td = {
		textDecorationColor: "rgb(148, 158, 177)"
	};
	return (
		<Router>
			<div className="App">
				<div className="nav">
					<Link to="/" style={td}>
						<h3>Home</h3>
					</Link>
					<Link to="/about" style={td}>
						<h3>About</h3>
					</Link>
					<Link to="/shop" style={td}>
						<h3>Shop</h3>
					</Link>
				</div>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/shop" exact component={Shop} />
					<Route path="/shop/:id" component={ItemDetail} />
				</Switch>
			</div>
		</Router>
	);
}

const Home = () => (
	<div>
		<h1>Home page</h1>
	</div>
);
export default App;

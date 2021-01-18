import "./App.css";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
	const td = {
		textDecorationColor: "white"
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
					<Route path="/shop" component={Shop} />
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

import {Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blue from './components/Blue';
import Red from './components/Red';
import './App.css';
import './index.css';

function App() {
	return (
		<div id='container'>
			<Navbar></Navbar>
			<div id='main-section'>
				<Routes>
					<Route path='/' element={<Home></Home>} />
					<Route path='/blue' element={<Blue></Blue>} />
					<Route path='/red' element={<Red></Red>} />
				</Routes>
			</div>
		</div>
	);
}

export default App

import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Cancel from './views/Cancel';
import Success from './views/Success';

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route index element={<Home />} />
				<Route path="/cancel" element={<Cancel />} />
				<Route path="/success" element={<Success />} />
			</Routes>
		</>
	);
}

export default App;

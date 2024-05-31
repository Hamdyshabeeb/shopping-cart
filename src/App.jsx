import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Cancel from './views/Cancel';

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route index element={<Home />} />
				<Route path="/cancel" element={<Cancel />} />
			</Routes>
		</>
	);
}

export default App;

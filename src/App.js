import { Fragment } from 'react';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {
	return (
		<Fragment>
			<Navbar />
			<Hero />
			<Featured />
			<Signup />
			<Footer />
		</Fragment>
	);
}

export default App;

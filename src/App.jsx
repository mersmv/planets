import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Router from './router/Router';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Header />
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;

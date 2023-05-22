import { Route, Routes } from 'react-router-dom';
import Planet from '../components/planet/Planet';
import { MENUS } from '../constants/menu';

const Router = () => {
	return (
		<Routes>
			{MENUS.map(menu => {
				return (
					<Route
						key={menu.idRouter}
						path={menu.link}
						element={<Planet name={menu.text}>{menu.text}</Planet>}
					/>
				);
			})}
		</Routes>
	);
};

export default Router;

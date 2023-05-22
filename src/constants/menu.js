import { v4 } from 'uuid';
import { COLORS } from '../styles/colors';

export const MENUS = [
	{
		idRouter: v4(),
		idMenu: v4(),
		text: 'mercury',
		link: '/',
		color: COLORS.mercury
	},
	{
		idRouter: v4(),
		idMenu: v4(),
		text: 'venus',
		link: '/venus',
		color: COLORS.venus
	},
	{
		idRouter: v4(),
		idMenu: v4(),
		text: 'earth',
		link: '/earth',
		color: COLORS.earth
	},
	{
		idRouter: v4(),
		idMenu: v4(),
		text: 'mars',
		link: '/mars',
		color: COLORS.mars
	},
	{
		idRouter: v4(),
		idMenu: v4(),
		color: COLORS.jupiter,
		text: 'jupiter',
		link: '/jupiter'
	},
	{
		idRouter: v4(),
		idMenu: v4(),
		color: COLORS.saturn,
		text: 'saturn',
		link: '/saturn'
	},
	{
		idRouter: v4(),
		idMenu: v4(),
		color: COLORS.uranus,
		text: 'uranus',
		link: '/uranus'
	},
	{
		idRouter: v4(),
		idMenu: v4(),
		color: COLORS.neptune,
		text: 'neptune',
		link: '/neptune'
	}
];

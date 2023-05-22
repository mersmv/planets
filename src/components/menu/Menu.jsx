import { MENUS } from '../../constants/menu';
import { StyledLink, StyledMenu, StyledMenuItem, StyledNav } from './styles';

const Menu = ({ open, setOpen }) => {
	return (
		<StyledNav open={open}>
			<StyledMenu>
				{MENUS.map(menu => {
					return (
						<StyledMenuItem key={menu.idMenu}>
							<StyledLink
								onClick={() => setOpen(false)}
								to={menu.link}
								color={menu.color}
							>
								{menu.text}
							</StyledLink>
						</StyledMenuItem>
					);
				})}
			</StyledMenu>
		</StyledNav>
	);
};

export default Menu;

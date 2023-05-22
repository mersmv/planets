import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledNav = styled.nav`
	position: absolute;
	top: 85px;
	left: -2rem;
	width: calc(100% + 4rem);
	transition: transform 0.3s;
	transform: translateX(${({ open }) => (open ? 0 : '100%')});
	background-color: ${COLORS.bgColor};
`;

const StyledMenu = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	width: 100%;
	height: calc(100vh - 85px);
	font-weight: 700;
	text-transform: uppercase;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

const StyledMenuItem = styled.li`
	padding: 1.5rem 0;
	width: 85%;
	margin-left: auto;
	margin-right: auto;
	&:not(:last-child) {
		border-bottom: 1px solid rgb(151 151 151 / 0.5);
	}
`;

const StyledLink = styled(NavLink)`
	position: relative;
	left: 50px;
	color: white;

	&::after {
		content: '';
		position: absolute;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		top: 50%;
		left: -55px;
		transform: translateY(-50%);
		background-color: rgb(151 151 151 / 0.5);
	}

	&.active {
		color: ${({ color }) => color};

		&::after {
			background-color: ${({ color }) => color};
		}
	}
`;

export { StyledNav, StyledMenu, StyledMenuItem, StyledLink };

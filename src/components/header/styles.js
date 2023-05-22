import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const { bgColor } = COLORS;

const StyledHeader = styled.header`
	position: relative;
	display: flex;
	justify-content: space-between;
	flex-direction: start;
	align-items: flex-start;
	padding: 1px 0;
	background-color: ${bgColor};
	/* overflow: hidden; */
`;

const StyledHeaderTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 85px;
	width: 100%;
`;

export { StyledHeader, StyledHeaderTop };

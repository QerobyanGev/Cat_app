import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
	position: fixed;
	left: 5px;
	top: 0;
	width: 175px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10px;
	gap: 15px;
	background: rgb(3, 0, 28);
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	transition: all 0.2s ease-in;
	z-index: 1;

	@media (max-width: 600px) {
		display: none;
	}
`;

export const SidebarButton = styled.button`
	width: 150px;
	padding: 15px 0;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	color: black;
	border-radius: 6px;
	cursor: pointer;
	transition: all 0.2s ease-in;
	background: ${(p) => (p.isSelected ? 'burlywood' : 'rgb(157, 178, 191)')};

	:hover {
		background: burlywood;
	}

	@media (max-width: 600px) {
		display: none;
	}
`;

export const MinimizedSideBar = styled.button`
	position: fixed;
	top: 15vh;
	left: 25px;
	width: 50px;
	height: 50px;
	border-radius: 5px;
	display: none;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	@media (max-width: 600px) {
		display: flex;
	}
`;

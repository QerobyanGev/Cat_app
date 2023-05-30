import styled from 'styled-components';

export const ContentWrapper = styled.section`
	position: relative;
	width: 100%;
	padding: 100px 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px;
`;


export const CardWrapper = styled.div`
	min-width: 200px;
	min-height: 250px;
	background-color: rgb(39, 55, 77);
	background-image: url(${(p) => p.url});
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	cursor: pointer;
`;

export const LoadMoreBTN = styled.button`
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);
	width: 250px;
	padding: 15px 25px;
	background: rgb(35, 41, 50);
	border: none;
	color: #9db2bf;
	border-radius: 30px;
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.3s ease;

	:hover {
		background: #9db2bf;
		color: rgb(35, 41, 50);
	}
`;


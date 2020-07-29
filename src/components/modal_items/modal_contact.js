import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PhoneIcon } from '../../assets/svg/call-outline.svg';
import { ReactComponent as FacebookIcon } from '../../assets/svg/logo-facebook.svg';
import { ReactComponent as UrlIcon } from '../../assets/svg/globe-outline.svg';

export default function ModalContact({ selectedRestaurantData }) {
	return (
		<ContactWrapper>
			{selectedRestaurantData.contact?.phone ? (
				<ContactItemWrapper>
					<PhoneIcon />
					<Text>{selectedRestaurantData.contact?.phone}</Text>
				</ContactItemWrapper>
			) : null}
			{selectedRestaurantData.contact?.url ? (
				<ContactItemWrapper>
					<UrlIcon />
					<Link
						href={selectedRestaurantData.contact?.url}
						target='_blank'
						rel='noopener noreferrer'
					>
						link to restaurant page
					</Link>
				</ContactItemWrapper>
			) : null}
			{selectedRestaurantData.contact?.facebook ? (
				<ContactItemWrapper>
					<FacebookIcon />
					<Link
						href={`https://facebook.com/${selectedRestaurantData.contact?.facebook}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						{selectedRestaurantData.contact?.facebook}
					</Link>
				</ContactItemWrapper>
			) : null}
		</ContactWrapper>
	);
}
const ContactWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 200px;
	color: ${({ theme }) => theme.blueGrey900};
	margin: 10px 0;
	padding: 10px 0;
`;
const ContactItemWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 200px;
`;
const Text = styled.p`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.blueGrey900};
	font-size: ${(props) => (props.name ? '1.8rem' : '1.5rem')};
	font-weight: ${(props) => (props.name ? '800' : '')};
`;
const Link = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: ${({ theme }) => theme.blueGrey900};
	font-size: ${(props) => (props.name ? '1.7rem' : '1.5rem')};
	font-weight: ${(props) => (props.name ? '600' : '')};
	margin: 5px 0;
	transition: 0.3s;
	&:hover {
		color: ${({ theme }) => theme.amber600};
	}
`;

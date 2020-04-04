import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { platform, IOS, Input } from '@vkontakte/vkui';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import './Album.css';
import noPhoto from '../img/nophoto.jpg';
import Icon24Share from '@vkontakte/icons/dist/24/share';

const osName = platform();


function Hero(props) {
	const [heroes, setHeroes] = useState([]);
	const [textFio, updateText] = useState(props.last_name);
	const [textCount, setCount] = useState(0);

	function isEmpty(str, zapaska) {
		if (str == null)
			return zapaska;

		return str;
	}

	function isEmptyString(str, zapaska) {
		if (str == '')
			return zapaska;

		return str;
	}

	function getUser() {
		//setHeroes(<ScreenSpinner size='large' />);
		let url = 'https://skynets.space/hero?search=' + textFio;
		axios.get(url)
			.then(function (response) {
				// handle success	
				console.log(response.data);
				setHeroes(response.data.items);
				setCount(response.data.count);

			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	}

	function getInfoRepost(item) {
		return item.Lastname + ' ' + item.Firstname + ' ' + item.Patronymic 
		+ 'те\n Звание:' + isEmptyString(item.Rank,'не заполнено') + ' ';
	}
	return (
		<div>
			<Input
				type="text"
				name="FIO"
				placeholder="ФИО"
				value={textFio} onChange={e => updateText(e.target.value)}
			/>
			<Div>
				<Button size="xl" level="2" onClick={getUser}>
					Поиск героев
			</Button>
			</Div>

			<h1>Найдено героев: {textCount}</h1>



			<div class="flex">
				{heroes.map(item => (
					<div class="item" data-key={item.id}>

						<img src={isEmpty(item.MainPhoto, noPhoto)}></img>
						<p>{getInfoRepost(item)}</p>

						<Button size="xl" level="2" onClick={props.share} data-count={textCount} data-mes={getInfoRepost(item)} data-img={isEmpty(item.MainPhoto, noPhoto)}>
							<Icon24Share />  	героя
						</Button>
					</div>
				))}
			</div>
		</div>
	);
}

const Album = props => (

	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
			</PanelHeaderButton>}
		>
			Галлерея героев
		</PanelHeader>

		< Hero
			last_name={props.fetchedUser.last_name}
			share={props.share}
		/>
	</Panel>

);

Album.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	share: PropTypes.func,
};

export default Album;
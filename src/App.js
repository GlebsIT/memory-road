import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Gallery';
import Album from './panels/Album';
import AddInfo from './panels/AddInfo';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const share = per => {
		//connect.send("VKWebAppphotos.saveWallPhoto",{});
		//connect.send("VKWebAppShowWallPostBox", {"message": per.currentTarget.dataset.mes, "attachments": per.currentTarget.dataset.img});
		//connect.send("")
		bridge.send("VKWebAppShowWallPostBox", {"message": per.currentTarget.dataset.mes, "attachments": per.currentTarget.dataset.img})
		.then(res => { // then print response status
			console.log(fetchedUser.id);	
			console.log(res);
			console.log(per.currentTarget.dataset.count);
		}).catch(function (error) {
			// handle error
			console.log(error);
		})

		/*		
					bridge.send("VKWebAppGetAuthToken", { "app_id": 7384847, "scope": "friends,status,photos" })
					.then(res => { // then print response status
						console.log(res.access_token);
						let url = 'https://api.vk.com/method/photos.getWallUploadServer';
						axios.get(url)
							.then(function (response) {
								// handle success	
								console.log(response);


							})
							.catch(function (error) {
								// handle error
								console.log(error);
							})
							.finally(function () {
								// always executed
							});
						console.log(fetchedUser.id);
					})

		*/

		};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<AddInfo id='addinfo' fetchedUser={fetchedUser} go={go} />
			<Album id='album' fetchedUser={fetchedUser}  share={share}  go={go} />
			
			
		</View>
	);
}

export default App;


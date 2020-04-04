import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import React from "react";
import axios from 'axios';
import { FormLayout, FormLayoutGroup, Input, File } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';

const osName = platform();
//const senderID = '';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Foto: null,
      FotoFile: null,
      Famili: null,
      Name: null,
      Surname: null,
      BirthDate: null,
      BirthPlace: null,
      CallPlace: null,
      CallYear: null,
      CallLocation: null,
      Ranking: null,
      DeathDate: null,
      History: null,
      OtherSite: null,
      MailFile: null,
      MailFile1: null,
    };

    //this.publish = this.publish.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  onChangeHandler = event => {

    this.setState({
      FotoFile: event.target.files[0],
      loaded: 0,
    })
  }

  onChangeHandler2 = event => {

    this.setState({
      MailFile1: event.target.files[0],
      loaded: 0,
    })
  }

  publish() {

    const data = new FormData()
    data.append('Foto', this.state.FotoFile)
    data.append('MailFile', this.state.MailFile1)
    data.append('Famili', this.state.Famili)
    data.append('Name', this.state.Name)
    data.append('Surname', this.state.Surname)
    data.append('BirthDate', this.state.BirthDate)
    data.append('BirthPlace', this.state.BirthPlace)
    data.append('CallPlace', this.state.CallPlace)
    data.append('CallYear', this.state.CallYear)
    data.append('CallLocation', this.state.CallLocation)
    data.append('Ranking', this.state.Ranking)
    data.append('DeathDate', this.state.DeathDate)
    data.append('History', this.state.History)
    data.append('OtherSite', this.state.OtherSite)
    data.append('id_user', this.props.id_user)
    //data.append('SenderID', senderID)

    axios.post("https://skynets.space", data, {
      // receive two    parameter endpoint url ,form data
    })
      .then(res => { // then print response status
        console.log(res.data)
      })
  };


  render() {
    return <div>
      <FormLayout>
        <FormLayoutGroup>
          <Input
            type="file"
            name="Foto"
            placeholder="Доюавьте фотографию"
            value={this.state.Foto}
            onChange={this.onChangeHandler}
          />
          <Input
            type="text"
            name="Famili"
            placeholder="Фамилия"
            value={this.state.Famili}
            onChange={this.handleChange}
          />

          <Input
            type="text"
            name="Name"
            placeholder="Имя"
            value={this.state.Name}
            onChange={this.handleChange}
          />

          <Input
            type="text"
            name="Surname"
            placeholder="Отчество"
            value={this.state.Surname}
            onChange={this.handleChange}
          />

          <Input
            type="text"
            name="BirthDate"
            placeholder="Год / Дата рождения"
            value={this.state.BirthDate}
            onChange={this.handleChange}
          />

          <Input
            type="text"
            name="BirthPlace"
            placeholder="Место рождения / Область"
            value={this.state.BirthPlace}
            onChange={this.handleChange}
          />

          <Input
            type="text"
            name="CallPlace"
            placeholder="Место призыва / Область"
            value={this.state.CallPlace}
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="CallYear"
            placeholder="Год / Дата призыва"
            value={this.state.CallYear}
            onChange={this.handleChange}
          />

          <Input
            type="text"
            name="CallLocation"
            placeholder="Место службы"
            value={this.state.CallLocation}
            onChange={this.handleChange}
          />

          <Input
            type="text"
            name="Ranking"
            placeholder="Воинское звание"
            value={this.state.Ranking}
            onChange={this.handleChange}
          />

          <Input
            type="text"
            name="DeathDate"
            placeholder="Год / Дата смерти"
            value={this.state.DeathDate}
            onChange={this.handleChange}
          />

          <Input
            type="text"
            name="History"
            placeholder="История героя"
            value={this.state.History}
            onChange={this.handleChange}
          />

          <Input
            type="text"
            name="OtherSite"
            placeholder="Ссылка на сторонний ресурс"
            value={this.state.OtherSite}
            onChange={this.handleChange}
          />

          <Input
            type="file"
            name="MailFile"
            placeholder="Письма героя"
            value={this.state.MailFile}
            onChange={this.onChangeHandler2}
          />

          <Button size="xl" level="2" value="Send" onClick={this.publish()}>Опубликовать</Button>
        </FormLayoutGroup>
      </FormLayout>

    </div>
  }
}


const AddInfo = props => (

  <Panel id={props.id}>
    <PanelHeader
      left={<PanelHeaderButton onClick={props.go} data-to="home">
        {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
      </PanelHeaderButton>}
    >
      Добавление данных
		</PanelHeader>
    {props.fetchedUser.id}
    <App
      id_user={props.fetchedUser.id}
    />

    <Div>
      <Button size="xl" level="2" onClick={props.go} data-to="home">
        На главную
				</Button>
    </Div>

  </Panel>

);

AddInfo.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default AddInfo;

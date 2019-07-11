import React, { Component } from 'react';
import {
  View, StyleSheet, Text, AsyncStorage
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Routes from './Routes';
import colors from './config/colors';


const styles = StyleSheet.create({
  nextButton: {
    fontWeight: 'bold',
    color: colors.secondary,
    marginRight: 5,
    fontSize: 16
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  text: {
    color: colors.primary,
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 14,
    fontSize: 16,
    fontWeight: '700'

  },
  title: {
    fontSize: 22,
    color: colors.primary,
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold'
  }
});

const slides = [
  {
    name: 'welcome',
    title: 'Seja bem vindo ao meu App!',
    text: 'Este é um simples exemplo de uma lista de profissionais. A seguir estão duas formas diferentes de listar e ver mais informações de um item da lista.',
    backgroundColor: 'white',
  },
  {
    name: 'screen1',
    title: 'Primeiro Exemplo',
    text: 'Na primeira Aba (Empresas) temos um exemplo de uma FlatList, ao clicar em algum item disparamos uma função do React Navigation para navegar para uma tela especifica em prol de exibir os detalhes do item.',
    backgroundColor: 'white',

  },
  {
    name: 'screen2',
    title: 'Segundo Exemplo',
    text: 'Na segunda aba (Serviços) temos um exemplo de uma Flatlist para renderizar a lista, porém, no topo da tela temos um card com os valores controlados por state utilizando o recém lançado React Hooks que elimina a necessidade de um Class Component, podendo haver utilização do state em Functional Components. Ao clicar em um item disparamos a função do Hooks para trocar os valores atuais do Card para os valores escolhidos.',
    backgroundColor: 'white',

  }
];


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: true
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('onboardingFirstUse')
      .then((value) => {
        if (value) {
          this.setState({ showRealApp: true });
        } else {
          this.setState({ showRealApp: false });
        }
      });
  }

  _renderItem = ({ item }) => (
    <View style={styles.mainContent}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  )

  _onDone = () => {
    this.setState({ showRealApp: true });
    AsyncStorage.setItem('onboardingFirstUse', 'false');
  }

  _renderNextButton = () => (
    <Text style={styles.nextButton}>Próximo</Text>
  )

  _renderDoneButton = () => (
    <Text style={styles.nextButton}>Concluir</Text>
  )

  render() {
    if (this.state.showRealApp) {
      return (
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      );
    }
    return (
      <AppIntroSlider
        slides={slides}
        onDone={this._onDone}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderItem={this._renderItem}
        activeDotStyle={{ backgroundColor: colors.secondary }}
      />
    );
  }
}

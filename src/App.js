import React, { Component } from 'react';
import {
  View, StyleSheet, Text, Image, AsyncStorage, Platform
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
    justifyContent: 'space-around'
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
    title: 'Seja bem vindo!',
    text: 'lorem ipsum!',
    backgroundColor: 'red',
  },
  {
    name: 'screen1',
    title: 'Tudo ao seu alcance!',
    text: 'lorem ipsum!',
    backgroundColor: 'white',

  },
  {
    name: 'screen2',
    title: 'lorem ipsum!',
    text: 'lorem ipsum!',
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
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 32 : 0 }}>
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

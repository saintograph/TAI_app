import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Text, Footer, Button, Thumbnail } from 'native-base';
import MainView from './components/main_view'
import styles from './styles/theme';

class TAI_app extends Component {


  render() {
    return (
        <MainView />
    );
  }
}

AppRegistry.registerComponent('TAI_app', () => TAI_app);

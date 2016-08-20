import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Text, Footer, Button, Thumbnail } from 'native-base';
import styles from './styles/theme';

class TAI_app extends Component {
  render() {
    return (
        <Container>
            <Content>
              <View>
                <Image source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} style={{width: 450, height: 400}} >
                  <Header style={styles.headerBackground}>
                  </Header>
                  <Text style={styles.headerTitle}>May 10</Text>
                  <Text style={styles.headerDisplay}>The Arctic this week</Text>
                </Image>
              </View>
              <Card style={styles.cardMargin}>
                  <CardItem header style={styles.marginAll}>
                  </CardItem>
                  <CardItem style={styles.cardMain}>
                      <Text style={styles.cardHeading}>
                          The Arctic is browning
                      </Text>
                      <Text style={styles.cardContent}>
                        The trend of a greening Arctic observed in the past 30 years.
                        Lorem Ipsum has been the industry's standard dummy text ever 
                        since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived 
                        not only five centuries, but also the leap into electronic 
                        typesetting, remaining essentially unchanged.
                      </Text>
                      <Text style={styles.textAuthor}>by Mieke Coppes</Text>
                  </CardItem>
                  <CardItem header style={styles.cardCategoryTab}>
                      <Text style={styles.cardCategory}>Climate and Environment</Text>
                  </CardItem>
              </Card>
            </Content>
        </Container>
    );
  }
}

AppRegistry.registerComponent('TAI_app', () => TAI_app);

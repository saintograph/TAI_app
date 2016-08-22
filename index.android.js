import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Text, Footer, Button, Thumbnail } from 'native-base';
import styles from './styles/theme';

class TAI_app extends Component {
  render() {
    return (
        <Container>
            <Content>
              <View style={styles.headerContainer}>
                <Image source={{uri: 'https://unsplash.it/450/400/?image=684'}} style={styles.headerImage}>
                  <Header style={styles.headerBackground}>
                  </Header>
                  <Text style={styles.headerTitle}>May 10</Text>
                  <Text style={styles.headerDisplay}>The Arctic this week</Text>
                </Image>
              </View>
              <Card style={styles.cardMargin}>
                  <CardItem style={styles.cardMain}>
                      <Text style={styles.cardHeading}>
                          The Arctic is browning
                      </Text>
                      <Text style={styles.cardContent}>
                        Lorem Ipsum has been the industry's standard dummy text ever 
                        since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived 
                        not only five centuries, but also the leap into electronic 
                        typesetting, remaining essentially unchanged.
                      </Text>
                      <Text style={styles.textAuthor}>by Mieke Coppes</Text>
                  </CardItem>
                  <View style={styles.cardFooter}>
                    <CardItem header style={styles.cardCategoryTab}>
                        <Text style={styles.cardCategory}>Shipping and Economics</Text>
                        <Image source={require('./img/_climate.png')} style={styles.cardCategoryImage} />
                    </CardItem>
                  </View>
              </Card>
              <Card style={styles.cardMargin}>
                  <CardItem style={styles.cardMain}>
                      <Text style={styles.cardHeading}>
                          Suez Canal still preferred shipping route
                      </Text>
                      <Text style={styles.cardContent}>
                        Lorem Ipsum has been the industry's standard dummy text ever 
                        since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived 
                        not only five centuries, but also the leap into electronic 
                        typesetting, remaining essentially unchanged.
                      </Text>
                      <Text style={styles.textAuthor}>by Mieke Coppes</Text>
                  </CardItem>
                  <View style={styles.cardFooter}>
                    <CardItem header style={styles.cardCategoryTab}>
                        <Text style={styles.cardCategory}>Shipping and Economics</Text>
                        <Image source={require('./img/_shipping.png')} style={styles.cardCategoryImage} />
                    </CardItem>
                  </View>
              </Card>
              <Card style={styles.cardMargin}>
                  <CardItem style={styles.cardMain}>
                      <Text style={styles.cardHeading}>
                          A new Canadian government; so what?
                      </Text>
                      <Text style={styles.cardContent}>
                        Lorem Ipsum has been the industry's standard dummy text ever 
                        since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived 
                        not only five centuries, but also the leap into electronic 
                        typesetting, remaining essentially unchanged.
                      </Text>
                      <Text style={styles.textAuthor}>by Mieke Coppes</Text>
                  </CardItem>
                  <View style={styles.cardFooter}>
                    <CardItem header style={styles.cardCategoryTab}>
                        <Text style={styles.cardCategory}>Shipping and Economics</Text>
                        <Image source={require('./img/_strategy.png')} style={styles.cardCategoryImage} />
                    </CardItem>
                  </View>
              </Card>
              <Card style={styles.cardMargin}>
                  <CardItem style={styles.cardMain}>
                      <Text style={styles.cardHeading}>
                          The issues behind Arctic youth perspectives
                      </Text>
                      <Text style={styles.cardContent}>
                        Lorem Ipsum has been the industry's standard dummy text ever 
                        since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived 
                        not only five centuries, but also the leap into electronic 
                        typesetting, remaining essentially unchanged.
                      </Text>
                      <Text style={styles.textAuthor}>by Mieke Coppes</Text>
                  </CardItem>
                  <View style={styles.cardFooter}>
                    <CardItem header style={styles.cardCategoryTab}>
                        <Text style={styles.cardCategory}>Shipping and Economics</Text>
                        <Image source={require('./img/_society.png')} style={styles.cardCategoryImage} />
                    </CardItem>
                  </View>
              </Card>
            </Content>
        </Container>
    );
  }
}

AppRegistry.registerComponent('TAI_app', () => TAI_app);

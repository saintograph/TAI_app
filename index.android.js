import React, { Component } from 'react';
import { AppRegistry, ListView, View, Image, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Text, Footer, Button, Thumbnail } from 'native-base';
import styles from './styles/theme';


var REQUEST_URL = 'http://app.thearcticinstitute.org/wp-json/wp/v2/posts';

const TAI_app = React.createClass ({

  getInitialState: function(){
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,

    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    var currentUrl = REQUEST_URL
    
    fetch(currentUrl)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        });
      })
      .done();
  },
  renderStory: function(story) {
    return (
        <Card style={styles.cardMargin}>
            <CardItem style={styles.cardMain}>
                <Text style={styles.cardHeading}>
                    {story.title.rendered}
                </Text>
                <Text style={styles.cardContent}>
                    {story.excerpt.rendered}
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
    );
  },
  onEndReached: function() {
    this.fetchData();
  },
  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
        <Container>
            <Content>
                <View style={styles.headerContainer}>
                    <Image source={{uri: 'https://unsplash.it/450/400/?image=971'}} style={styles.headerImage}>
                        <Header style={styles.headerBackground}>
                        </Header>
                        <Text style={styles.headerTitle}>May 10</Text>
                        <Text style={styles.headerDisplay}>The Arctic this week</Text>
                    </Image>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderStory}
                    onEndReached={this.onEndReached}
                />
            </Content>
        </Container>
    );
  },
  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading the Arctic this week...
        </Text>
      </View>
    );
  },
})

AppRegistry.registerComponent('TAI_app', () => TAI_app);

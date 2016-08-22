import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({


// Header styles

  headerImage: {
    height: 225,
    width: 450,
    // marginBottom: 15,
  
  },

  headerBackground: {
    backgroundColor: 'rgba(0,0,0,0)',
  },

  headerTitle: {
    // color: '#4a4a4a',
    color: 'white',
    textAlign: 'left',
    fontSize: 24,
    marginLeft: 25,
    marginTop: -45,
  },
  
  headerDisplay: {
    color: 'white',
    marginLeft: 25,
  },

// Card Styles

  cardMain: {
    borderColor: '#F5F5F5',
  },

  cardMargin: {
    margin: 10,
    minHeight: 275,
  },

  marginAll: {
    borderColor: 'white',
    backgroundColor: 'white',
  },

  cardHeading: {
    fontSize: 24,
    marginLeft: 10,
    marginRight: 15,
    paddingTop: 15,
    lineHeight: 36,    
    minHeight: 80,
    // marginBottom: 15,
  },  
  
  cardContent: {
    fontSize: 14,
    marginLeft: 12,
    marginRight: 15,
    lineHeight: 21,
    color: "#212121",
  },

  cardCategoryTab: {
    borderColor: '#F5F5F5',
    backgroundColor: '#F5F5F5',
  },

  textAuthor: {
    color: '#c5c5c5',
    marginTop: 15,
    marginLeft: 12,
    fontSize: 10,
    // marginBottom: 15,
  },

  cardCategory: {
    fontSize: 14,
    color: "#58b7dd",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#58b7dd',
    flex:1
  },

  cardFooter: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    // marginBottom: 5,
  },

  cardCategoryImage: {
    width: 30,
    height: 30,
    marginTop: 5,
  },

});
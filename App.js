/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Form,
  Item,
  Input,
  Icon,
  Spinner,
  Button,
  Text
} 'native-base';

import PaisList from './components/PaisList';

export default class App extends Component<{}> {

  state={
    search: '',
    listpaises: [],
    loading: false,
  };

  fetchPaises = async () => {
    if(this.state.search.length > 0){
      this.setState({loading: true});

      const response = await fetch(`https://api.github.com/search/repositories?q=${this.state.search}`)
      const listpaises = await response.json();

      this.setState({
        listpaises: listpaises.item,
        loading: false,
      })
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Busque os Países</Title>
          </Body>
        </Header>
        <Content padder>
          <Form>
            <Item last>
              <Icon active name="search"/>

              <Input 
                placeholder="Buscar palavra chave"
                value={this.state.search}
                onChangeText={ text => this.setState({search: text})}
              />
            </Item>
          </Form>
          <Button block stle={{ marginTop: 10}} onPress={}>
            <Text>Buscar</Text>
          </Button>
          { this.state.loading? 
          <Spinner color="#999" />:
          <PaisList listpaises={ this.state.listpaises } />
         }
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

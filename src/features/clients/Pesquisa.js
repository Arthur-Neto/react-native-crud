import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  Button,
} from 'react-native';
import { NavigationEvents } from "react-navigation";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class PagePesquisa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pessoasToDelete: [],
      pessoas: [],
    };

    this.pessoas();
  }

  static navigationOptions = {
    title: 'Pesquisa',
  };

  pessoas = () => {
    fetch('http://10.151.34.66/app/select.php')
    .then(response => {
      return response.json();
    })
    .then(json => {
      this.setState({ pessoas: json })
    })
  };

  delete = () => {
    /*
    fetch('http://10.151.34.66/app/delete.php', {
      method: 'POST',
      body: JSON.stringify({})
    })
    .then(response => {
      return response.json();
    })
    .then(json => {
      this.setState({ pessoas: json })
    })*/
  };

  selectItensToDelete = (item) => {
    this.setState({pessoasToDelete: item});
  };
  
  flatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          borderColor: 'black',
          borderWidth: 2,
          marginBottom: 20,
        }}
      />
    );
  };

  render() {
    return (
      <ScrollView>
        <NavigationEvents
          onWillFocus={() => {
            this.pessoas();
          }}
        />
        <View style={estilos.viewLista}>
          <Text style={estilos.titulo}>Lista de Clientes</Text>
          <FlatList
            data={this.state.pessoas}
            renderItem={({ item }) => 
              <TouchableOpacity onPress={() => this.selectItensToDelete(item)}>
                <View style={estilos.itemLista}>
                  <Text>{'Nome: ' + item.name + ' ' + item.surname}</Text>
                  <Text>{'Idade: ' + item.age}</Text>
                </View>
              </TouchableOpacity>
            }
            keyExtractor={(item) => String(item.id)}
            extraData={this.state}
            ItemSeparatorComponent={this.flatListItemSeparator}
          />
        </View>
        <View style={estilos.ultimoBotao}>
          <Button
            title="Deletar Selecionados"
            color="green"
            onPress={() =>
              this.delete()
            }
          />
        </View>
      </ScrollView>
    );
  }
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  viewLista: {
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'lightgrey',
    borderWidth: 5,
    borderColor: 'black',
  },
  ultimoBotao: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 2,
  },
});

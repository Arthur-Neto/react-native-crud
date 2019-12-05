import React from 'react';
import {
  Alert,
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';

var ip = '192.168.1.4';

export default class PageCadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobrenome: '',
      idade: '',
      pessoas: [],
    };
  }

  static navigationOptions = {
    title: 'Cadastro',
  };

  add = () => {
    if (
      this.state.idade === '' ||
      this.state.nome === '' ||
      this.state.sobrenome === ''
    ) {
      Alert.alert('Devem ser preenchidos todos os dados');
      return;
    }
    
    fetch('http://10.151.34.66/app/insert.php', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.nome,
        surname: this.state.sobrenome,
        age: this.state.idade
      })
    })
    .then(response => {
      return response.json();
    })
    .then(json => {
      Alert.alert(json);
      this.setState({ nome: '' });
      this.setState({ sobrenome: '' });
      this.setState({ idade: '' });
    })
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={estilos.viewExterna}>
          <Text style={estilos.titulo}>Cadastro de Clientes</Text>
          <View style={estilos.views}>
            <Text style={estilos.labels}>Nome: </Text>
            <TextInput
              style={estilos.caixaDeTexto}
              value={this.state.nome}
              onChangeText={text => this.setState({ nome: text })}
            />
          </View>
          <View style={estilos.views}>
            <Text style={estilos.labels}>Sobrenome:</Text>
            <TextInput
              style={estilos.caixaDeTexto}
              value={this.state.sobrenome}
              onChangeText={text => this.setState({ sobrenome: text })}
            />
          </View>
          <View style={estilos.views}>
            <Text style={estilos.labels}>Idade:</Text>
            <TextInput
              style={estilos.caixaIdade}
              value={this.state.idade}
              onChangeText={text => this.setState({ idade: text })}
            />
          </View>
          <View style={estilos.botoes}>
            <Button
              title="Adicionar"
              color="green"
              onPress={() => this.add()}
            />
          </View>
          <View style={estilos.ultimoBotao}>
            <Button
              title="Apagar"
              color="green"
              onPress={() =>
                this.setState({ nome: '', sobrenome: '', idade: '' })
              }
            />
          </View>
        </View>
      </View>
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
  viewExterna: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'lightgrey',
    borderWidth: 5,
    borderColor: 'black',
  },
  views: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  labels: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  caixaDeTexto: {
    flex: 1,
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 20,
    fontSize: 25,
    width: '100%',
  },
  caixaIdade: {
    width: 30,
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 20,
    fontSize: 25,
  },
  itemLista: {
    fontSize: 40,
    marginLeft: 40,
    marginBottom: 20,
  },
  botoes: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    borderColor: 'black',
    borderWidth: 2,
  },
  ultimoBotao: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 2,
  },
});

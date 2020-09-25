import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList
} from 'react-native';
import ItemContato from '../components/ItemContato';
import Cores from '../constantes/Cores';

const NovoContatoTela = (props) => {
  const [contatos, setContatos] = useState([]);
  const [contador, setContador] = useState(10);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const capturarNome = (nome) => {
    setNome(nome);
  };
  const capturarTelefone = (telefone) => {
    setTelefone(telefone);
  };

  const adicionarContato = (contato) => {
    setContatos((contatos) => {
      setContador(contador + 2);
      return [{ key: contador.toString(), value: contato }, ...contatos];
    });
  };

  const removerContato = (keyASerRemovida) => {
    setContatos((contatos) => {
      return contatos.filter((contato) => {
        return contato.key !== keyASerRemovida;
      });
    });
  };

  return (
    <View style={estilos.lembreteView}>
      <View style={estilos.textoEInput}>
        <Text style={estilos.text}>Nome:</Text>
        <TextInput
          placeholder="Digite seu nome..."
          style={estilos.contatoTextInput}
          value={nome}
          onChangeText={capturarNome}
        />
      </View>

      <View style={estilos.textoEInput}>
        <Text>Telefone:</Text>
        <TextInput
          placeholder="Digite seu telefone..."
          style={estilos.contatoTextInput}
          value={telefone}
          onChangeText={capturarTelefone}
        />
      </View>

      <Button
        title="inserir"
        color={Cores.button}
        onPress={() => {
          adicionarContato([nome, telefone]);
          setNome("");
          setTelefone("");
        }}
      />
      <View style={estilos.mb20}>
        <FlatList
          data={contatos}
          renderItem={(contato) => (
            <ItemContato
              chave={contato.item.key}
              contato={contato.item.value}
              remove={removerContato}
            />
          )}
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  lembreteView: {
    margin: 5
  },
  contatoTextInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 2,
    flex: 1,
    paddingLeft: 10,
    marginLeft: 5,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  textoEInput: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: "center",
  },
  mb20: {
    marginBottom: 20
  }
});

export default NovoContatoTela; 
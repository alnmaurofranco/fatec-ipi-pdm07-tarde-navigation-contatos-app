import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ItemContato = (props) => {
  return (
    <TouchableOpacity onPress={() => props.remove(props.chave)}>
      <View style={estilos.itemNaLista}>
        <Text style={estilos.titulo}>Contato de Usuario</Text>
        <Text style={estilos.item}>Nome: {props.contato[0]}</Text>
        <Text style={estilos.item}>Telefone: {props.contato[1]}</Text>
      </View>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 5,
  },
  item: {
    marginBottom: 4,
    fontSize: 20,
  },
  itemNaLista: {
    width: 560,
    padding: 22,
    backgroundColor: "#2196f3",
    borderWidth: 0.5,
    marginBottom: 8,
    borderRadius: 6,
    marginTop: 20,
  },
});

export default ItemContato;
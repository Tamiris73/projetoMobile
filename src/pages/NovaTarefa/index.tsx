  
import React, { useState } from "react";
import { useRoute } from "@react-navigation/core";
// import { useNavigation } from "@react-navigation/core";
import { Button, Header } from "../../components";
import { StyleSheet, SafeAreaView, View,Text, TextInput } from "react-native";
import {
  ListaParamProps
} from "../../interfaces/listagem.interface";
import colors from "../../styles/colors";
import { TarefaTypes } from "../../types/ScreenStack.types";

export default function Lista({ navigation }: TarefaTypes) {
  const route = useRoute();
  const data = route.params as ListaParamProps;
  console.log({ ...data });
  const [descricaoTarefa, setDescricaoTarefa] = useState(data.descricao);
  const [dataTarefa, setDataTarefa] = useState(data.data);
  function nomeChange(item: string) {
    setDescricaoTarefa(item);
  }
  function dataChange(item: string) {
    setDataTarefa(item);
  }
  // const navigation = useNavigation();
  function handleListaTarefa() {
    navigation.navigate("Tarefa", { ...data });
  }

  return (
    <SafeAreaView >
      <View style={styles.header}>
        <Header image={require("../../../assets/img/logo.png")} />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Tarefas</Text>
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={descricaoTarefa}
          onChangeText={(text) => nomeChange(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="dia/mês/ano"
          value={dataTarefa}
          onChangeText={(text) => dataChange(text)}
        />
        <Button size="define" title="Salvar" onPress={handleListaTarefa}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    width: "50%",
    margin: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.black,
    fontSize: 16,
    padding: 10,
    width: "50%",
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    borderBottomWidth: 1,
    borderColor: colors.black,
    fontSize: 16,
    padding: 10,
    width: "50%",
    marginTop: 20,
    marginBottom: 20,
  },
  header: {
    backgroundColor: 'rgb(60,179,113)',
  },
});
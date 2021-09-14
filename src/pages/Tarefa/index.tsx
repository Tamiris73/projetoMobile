import React from "react";
import { useRoute } from "@react-navigation/core";
// import { useNavigation } from "@react-navigation/core";
import { SafeAreaView, View, StyleSheet} from "react-native";
import { Header, Tarefas } from "../../components";
import { TarefaProps } from "../../interfaces/Tarefa.interface";
import { ListaParamProps } from "../../interfaces/listagem.interface";
import { TarefaTypes } from "../../types/ScreenStack.types";

export default function Tarefa({ navigation }: TarefaTypes) {
  const route = useRoute();
  const data = route.params as TarefaProps;
  function handleListaTarefa() {
    navigation.navigate("Tarefas", { ...data});
  }
  function ListaEdit(item: ListaParamProps) {
    navigation.navigate("Tarefas", { ...data, ...item });
  }
  function ListaRemove(item: ListaParamProps) {
    console.log("Tarefa", { ...data, ...item });
  }
  function voltar() {
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Header image={require("../../../assets/img/logo.png")}/>
      </View>
      <Tarefas
        title="Tarefas"
        onPress={handleListaTarefa}
        buttonEdit={ListaEdit}
        buttonRemove={ListaRemove}
        tarefa={data.tarefa}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(60,179,113)',
  },
});
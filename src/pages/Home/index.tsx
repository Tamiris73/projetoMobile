import React, { Component } from "react";
import { FlatList, StyleSheet, SafeAreaView, View} from "react-native";
//import { useNavigation } from "@react-navigation/core";
import { Header, ButtonHome } from "../../components";
import data from "../../services/data";
import { TarefaProps } from "../../interfaces/Tarefa.interface";
import { TarefaTypes } from "../../types/ScreenStack.types";

export default function Home({ navigation }: TarefaTypes) {
  //const navigation = useNavigation();
  function handleTarefa(item: TarefaProps) {
    navigation.navigate("Tarefa", { ...item });
  }
  return (
    <SafeAreaView style={styles.header}>
      <Header
        image={require("../../../assets/img/logo.png")}
      />
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ButtonHome
              key={item.id}
              title={item.title}
              onPress={() => handleTarefa(item)}
              image={item.image}
            />
          )}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    flex: 1,
    marginTop: 0,
    backgroundColor: 'rgb(60,179,113)',
  },
  container: {
    alignItems: "center",
    flex: 1,
    marginBottom: 110,
    marginTop: 100,
    backgroundColor: 'rgb(60,179,113)',
  },
});
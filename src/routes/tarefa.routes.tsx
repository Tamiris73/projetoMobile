import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Tarefa, NovaTarefa } from "../pages";
import { TarefaStackParamList } from "../types/ScreenStack.types";

const Stack = createStackNavigator<TarefaStackParamList>();

export default function TarefaRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tarefa" component={Tarefa} />
      <Stack.Screen name="tarefa" component={NovaTarefa} />
    </Stack.Navigator>
  );
}
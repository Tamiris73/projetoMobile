import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Tarefa } from "../pages";
import { TarefaStackParamList } from "../types/ScreenStack.types";

const Stack = createStackNavigator<TarefaStackParamList>();

export default function AnimalRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tarefa" component={Tarefa} />
    </Stack.Navigator>
  );
}
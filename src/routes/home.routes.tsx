import React from "react";
import { Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TarefaStack from "./tarefa.routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../styles/colors";
import { Camera } from "../pages";

const Drawer = createDrawerNavigator();

export default function HomeRoute() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.green },
        headerTintColor: colors.white,
        headerTitle: () => <Text style={styles.title}>Tarefas</Text>,
        drawerStyle: {
          backgroundColor: colors.green,
        },
        drawerInactiveTintColor: colors.gray,
        drawerActiveTintColor: colors.gray,
      }}
    >
      <Drawer.Screen
        name="TarefaStack"
        component={TarefaStack}
        options={{
          drawerLabel: "Tarefas",
          drawerIcon: () => (
            <MaterialCommunityIcons name="camera" size={24} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen name="Camera" component={Camera} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});
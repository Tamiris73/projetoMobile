import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Container,
  FormRow,
  Label,
  TextInput,
  Title,
  Form,
} from "../../styles/Login";
import { Button, ButtonText } from "../../components";

export default function Cadastrar() {
  const navigation = useNavigation();
  function handleLogin() {
    navigation.navigate("Login");
  }
  return (
    <Container>
      <Form>
        <Title>Your Planning</Title>
        <FormRow>
          <Label>Nome</Label>
          <TextInput placeholder="nome"></TextInput>
        </FormRow>
        <FormRow>
          <Label>E-mail</Label>
          <TextInput placeholder="e-mail"></TextInput>
        </FormRow>
        <FormRow>
          <Label>Senha</Label>
          <TextInput placeholder="senha"></TextInput>
        </FormRow>
        <Button title="Salvar" onPress={handleLogin} />
        <ButtonText title="Voltar" onPress={handleLogin} />
      </Form>
    </Container>
  );
}

import React from "react";
import { ButtonProps } from "../../interfaces/Button.interface";
import { ButtonStyle } from "./styles";

export default function ButtonAction({
  children,
  type,
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <ButtonStyle type={type} onPress={onPress} {...rest}>
      {children}
    </ButtonStyle>
  );
}

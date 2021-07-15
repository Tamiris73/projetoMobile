import React from "react";
import { Image } from "react-native";
import { HeaderProps } from "../../interfaces/Header.interface";
import {
  HeaderStyle,
  HeaderTitle,
  HeaderImage,
  HeaderHello,
  HeaderName,
} from "./styles";

export default function Header({ hello, name, image }: HeaderProps) {
  return (
    <HeaderStyle>
      <HeaderTitle>
        {hello && <HeaderHello>{hello}</HeaderHello>}
        <HeaderName>{name}</HeaderName>
      </HeaderTitle>
      <HeaderImage>
        <Image source={image} />
      </HeaderImage>
    </HeaderStyle>
  );
}

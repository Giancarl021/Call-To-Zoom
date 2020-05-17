import React from "react";
import { Container, Label } from "./styles";

export default function (props) {
  const { label, value, setState, isSelected } = props;

  return (
    <Container selected={isSelected} onPress={() => {setState(value)}}>
      <Label>{label}</Label>
    </Container>
  );
}

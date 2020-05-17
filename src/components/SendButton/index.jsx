import React from "react";
import { Container, Label } from "./styles";

export default function (props) {
  const { text, onClick, enabled } = props;

  return (
    <Container onPress={onClick} disabled={!enabled}>
      <Label>{text}</Label>
    </Container>
  );
}

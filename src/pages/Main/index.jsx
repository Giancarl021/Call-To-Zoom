import React, { useState } from "react";
import { Linking } from 'react-native';
import { Container, Title, Label, Number, Scroll } from "./styles";
import RadioButton from "../../components/RadioButton";
import SendButton from "../../components/SendButton";

export default function () {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [company, setCompany] = useState(0);
  const [option, setOption] = useState('');
  const radio = [
    // { label: "CTBC/Algar - 12", value: 12 },
    { label: "Vivo - 15", value: 15 },
    { label: "TIM - 41", value: 41 },
    { label: "Claro - 21", value: 21 },
    { label: "Oi - 14", value: 14 },
    { label: "Oi - 31", value: 31 },
    // { label: "Sercomtel - 43", value: 43 },
    // { label: "Nextel - 99", value: 99 },
  ];

  const options = [
    { label: "SP", value: '1146806788' },
    { label: "RJ", value: '2139587888' },
  ];

  return (
    <Container>
      <Scroll showsVerticalScrollIndicator={false}>
        <Title>Ligar para reunião do Zoom</Title>
        <Label>ID da Reunião:</Label>
        <Number
          keyboardType="number-pad"
          defaultValue={id}
          onChangeText={(text) => {
            validate(text, "id");
          }}
        />
        <Label>Senha da Reunião:</Label>
        <Number
          keyboardType="number-pad"
          defaultValue={pass}
          onChangeText={(text) => {
            validate(text, "pass");
          }}
        />
        <Label>Código de Operadora:</Label>
        {radio.map((item) => (
          <RadioButton
            key={String(item.value)}
            setState={setCompany}
            isSelected={company === item.value}
            {...item}
          />
        ))}
        <Label>Opção de Conexão:</Label>
        {options.map((item) => (
          <RadioButton
            key={String(item.value)}
            setState={setOption}
            isSelected={option === item.value}
            {...item}
          />
        ))}
        <SendButton enabled={id && pass & company && option} text="Ligar" onClick={call}></SendButton>
      </Scroll>
    </Container>
  );

  function validate(_text, state) {
    const text = _text.replace(/\D/g, "");
    switch (state) {
      case "id":
        setId(text);
        break;
      case "pass":
        setPass(text);
        break;
    }
  }

  function call() {
    Linking.openURL(`tel:+55${option},,${id}%23,,%23,${pass}%23}`);
  }
}

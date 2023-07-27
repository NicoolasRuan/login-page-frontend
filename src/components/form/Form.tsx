/* eslint-disable @typescript-eslint/no-misused-promises */
//import React from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

import Wrapper from "../layout/Wrapper";
import Button from "./Button";
import { WrapperField } from "../layout/Wrapper";

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

export default function Form() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    window.alert(JSON.stringify(data));
  return (
    <Wrapper>
      <FormField onSubmit={handleSubmit(onSubmit)}>
        <WrapperStyled>
          <Label>Nome</Label>
          <Input type="text" {...register("name")}></Input>
        </WrapperStyled>
        <WrapperStyled>
          <Label>Email</Label>
          <Input type="email" {...register("email")}></Input>
        </WrapperStyled>
        <WrapperStyled>
          <Label>Senha</Label>
          <Input type="password" {...register("password")}></Input>
        </WrapperStyled>

        <Button text="Cadastrar" />
        <Link>Ja tem login?</Link>
      </FormField>
    </Wrapper>
  );
}

const FormField = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

const WrapperStyled = styled(WrapperField)`
  padding: 10px 60px;
  display: flex;
  justify-content: start;
  align-items: normal;
`;

const Input = styled.input<{ $inputSize?: string }>`
  width: 100%;
  height: 40px;

  border-radius: 5px;
  color: #c3c3c3;

  padding: 0px 5px;

  background-color: #464949;

  outline: 1px solid #313333;
  border: none;

  font-size: ${(props) => props.$inputSize || "1vw"};
  font-weight: 700;
`;

const Label = styled.label<{ $labelSize?: string }>`
  font-size: ${(props) => props.$labelSize || "1vw"};
  color: #c3c3c3;
  font-weight: 700;
  opacity: 0.5;

  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #c3c3c3;
  text-decoration: underline;
  cursor: pointer;
`;

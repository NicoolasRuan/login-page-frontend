//import React from "react";
//import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

import Input from "./Input";
import Wrapper from "../layout/Wrapper";
import Button from "./Button";
//import { styled } from "styled-components";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function Form() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Input
        labelText="Nome"
        type="text"
        id="nome"
        refs={register("name", { required: true })}
      ></Input>
      <Input
        labelText="Email"
        type="email"
        id="email"
        {...register("email", { required: true })}
      ></Input>
      <Input
        labelText="Senha"
        type="password"
        {...register("password", { required: true })}
      ></Input>

      <Button text="Cadastrar" onclick={() => handleSubmit(onSubmit)()} />
    </Wrapper>
  );
}

// const FormField = styled.form`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;

//   width: 100%;
//   height: 100%;
// `;

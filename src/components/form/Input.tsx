//import React from "react";
import styled, { css } from "styled-components";
import { WrapperField } from "../layout/Wrapper";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  type: string;
  labelSize?: string;
  inputSize?: string;
  handleChange?: string;
}

export default function Input({
  labelText,
  type,
  labelSize,
  inputSize,
}: InputProps) {
  return (
    <WrapperStyled>
      <Label $labelSize={labelSize}>{labelText}</Label>
      <InputField $inputSize={inputSize} as="input" type={type} />
    </WrapperStyled>
  );
}

const Label = styled.label<{ $labelSize?: string }>`
  font-size: ${(props) => props.$labelSize || "1vw"};
  color: #c3c3c3;
  font-weight: 700;
  opacity: 0.5;

  margin-bottom: 10px;
`;

const InputField = styled.input<{ $inputSize?: string }>`
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

const WrapperStyled = styled(WrapperField)`
  padding: 10px 60px;
  display: flex;
  justify-content: start;
  align-items: normal;
`;

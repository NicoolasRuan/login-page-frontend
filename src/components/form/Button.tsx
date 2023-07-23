import styled from "styled-components";

interface ButtonProps {
  text: string;
  onclick?: () => Promise<void>;
}

export default function Button({ text, onclick }: ButtonProps) {
  return <Btn as="input" value={text} type="submit" onClick={onclick}></Btn>;
}

const Btn = styled.input`
  width: 200px;
  height: 50px;

  margin: 30px 10px;

  font-size: 1vw;
  font-weight: 700;

  background-color: #464949;

  border: none;
  opacity: 0.5;

  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  color: #fff;
  cursor: pointer;

  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;

  &:hover {
    background-color: #646868;
  }
`;

/*
<!-- HTML !-->
<button class="button-9" role="button">Button 9</button>

/* CSS */

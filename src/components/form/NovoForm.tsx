import { useForm } from "react-hook-form";
import Wrapper from "../layout/Wrapper";
import styled, { css } from "styled-components";
import { WrapperField } from "../layout/Wrapper";

const GoodForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: object): any => {
    console.log(data);
  };

  console.log("RENDER");

  return (
    <Wrapper>
      <WrapperStyled>
        <Label>Nome</Label>
        <InputField
          //className={errors?.name && "input-error"}
          type="text"
          placeholder="Seu nome"
          {...register("name")}
        />
        {/* {errors?.name && <p className="error-message">{errors?.name}</p>} */}
      </WrapperStyled>

      <WrapperStyled>
        <Label>E-mail</Label>
        <InputField
          //className={errors?.email && "input-error"}
          type="email"
          placeholder="Seu e-mail"
          {...register("email")}
        />
        {/* {errors?.email && <p className="error-message">{errors?.email}</p>} */}
      </WrapperStyled>

      <WrapperStyled>
        <Label>Senha</Label>
        <InputField
          //className={errors?.password && "input-error"}
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        {/* {errors?.password && (
          <p className="error-message">{errors?.password}</p>
        )} */}
      </WrapperStyled>

      <Wrapper>
        <Btn
          onClick={() => {
            void handleSubmit(onSubmit)();
          }}
        >
          Criar conta
        </Btn>
      </Wrapper>

      <Wrapper>
        <Link href="#">Ja tenho conta</Link>
      </Wrapper>
    </Wrapper>
  );
};

export default GoodForm;

const Link = styled.a`
  color: #c3c3c3;
  opacity: 0.5;
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

const Label = styled.label<{ $labelSize?: string }>`
  font-size: ${(props) => props.$labelSize || "1vw"};
  color: #c3c3c3;
  font-weight: 700;
  opacity: 0.5;

  margin-bottom: 10px;
`;

const WrapperStyled = styled(WrapperField)`
  padding: 10px 60px;
  display: flex;
  justify-content: start;
  align-items: normal;
`;

const Btn = styled.button`
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

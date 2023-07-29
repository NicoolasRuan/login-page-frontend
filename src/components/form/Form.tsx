//import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Wrapper from "../layout/Wrapper";
import Button from "./Button";

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

export default function Form() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    fetch("http://localhost:8080/user", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      console.log(res);
    });

    console.log(data);
  };
  return (
    <div className="w-full h-3/4 mt-4 flex flex-col justify-normal items-center">
      <form className="flex flex-col w-full h-4/5 justify-normal p-4 items-center gap-5">
        <div className="flex flex-col justify-between w-full h-3/5 items-center">
          <input
            className="h-11 text-2xl text-slate-300 pl-2 bg-transparent border-b-2 border-neutral-100 outline-none focus:bg-neutral-800 placeholder:opacity-50 w-3/4"
            type="text"
            placeholder="Digite o seu nome"
            {...register("name")}
          />
          <input
            className="h-11 text-2xl text-slate-300 pl-2 bg-transparent border-b-2 border-neutral-100 outline-none focus:bg-neutral-800 placeholder:opacity-50 w-3/4"
            type="email"
            placeholder="Digite o seu e-mail"
            {...register("email")}
          />
          <input
            className="h-11 text-2xl text-slate-300 pl-2 bg-transparent border-b-2 border-neutral-100 outline-none focus:bg-neutral-800 placeholder:opacity-50 w-3/4"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
        </div>

        <Button text="Cadastrar" onclick={handleSubmit(onSubmit)} />
      </form>
      <a href="#" className="text-slate-300 underline">
        Ja tem login?
      </a>
    </div>
  );
}

import React from "react";
import { useForm } from "react-hook-form";
import "./register.css";

export default function Register() {

  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

  const onSubmit = async data => { 
  	console.log(data); 
  };

  return (
  	<div className="register">

  		<h2>CADASTRAR</h2>

	    <form onSubmit={handleSubmit(onSubmit)}>
	      <input type="email"
	        {...register("email", { required: "Seu email" })}
	        placeholder="email@gmail.com" required
	      />
	      <input type="password"
	        {...register("password", { required: "Sua senha" })}
	        placeholder="senha" required
	      />
	      <input type="submit" className="registerButton" value="Cadastrar" />
	    </form>
    </div>
  );
}
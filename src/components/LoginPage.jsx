import React from 'react';
import style from './LoginPage.module.css';
import {useForm} from "react-hook-form";
import CustomButton from "./UI/CustomButton";


const LoginPage = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className={style.login}>
      <div className={`${style.login__container} _container`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Login:
            <div className={style.login__input}>
              <input
                {...register("login", {
                  required: "Please enter your login",
                  minLength: {
                    value: 5,
                    message: "Login must be longest than 4 symbols"
                  }
                })}
                placeholder="Login"
              />
            </div>
            {errors?.login &&
            <div className={style.login__error}>
              {errors?.login?.message}
            </div>
            }
          </label>
          <label>
            Password:
            <div className={style.login__input}>
              <input
                {...register("password", {
                  required: "Please enter your password",
                  minLength: {
                    value: 5,
                    message: "Password must be longest than 4 symbols"
                  }
                })}
                placeholder="Password"
              />
            </div>
            {errors?.password &&
            <div className={style.login__error}>
              {errors?.password?.message}
            </div>
            }
          </label>
          <div className={style.login__btn}>
            <CustomButton size="18px" type="submit">Login</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
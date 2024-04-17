import { FC } from "react"
import * as S from "./style.login"
import { LoginValueType } from "@/types"
import React from 'react';
import { Form, Field } from 'react-final-form'
import { loginValidate } from "@/utils/validations";

const DumbStyleLogin: FC<{ handleSubmit: (values: LoginValueType) => void }> = ({ handleSubmit }) => (
    <S.StyleLogin>
        <S.LoginFormWrapper>
            <Form
                onSubmit={handleSubmit}
                validate={loginValidate}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <S.FormGroup>
                            <S.Label>Email</S.Label>
                            <Field name="email"
                                render={({ input, meta }) => (
                                    <div>
                                        <S.Input {...input} type="text" placeholder="Enter your email" />
                                        {meta.error && <S.Span>{meta.error}</S.Span>}
                                    </div>
                                )}
                            />
                        </S.FormGroup>
                        <S.FormGroup>
                            <S.Label>Password</S.Label>
                            <Field name="password"
                                render={({ input, meta }) => (
                                    <div>
                                        <S.Input {...input} type="text" placeholder="Enter your password" />
                                        {meta.error && <S.Span>{meta.error}</S.Span>}
                                    </div>
                                )}
                            />
                        </S.FormGroup>
                        <S.Button type="submit">Login</S.Button>
                    </form>
                )}
            />
        </S.LoginFormWrapper>
    </S.StyleLogin >
)
export default DumbStyleLogin
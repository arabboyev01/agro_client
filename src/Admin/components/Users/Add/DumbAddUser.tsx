import * as S from "@/components/Login/style.login"
import { AddUserType } from "@/types"
import { addUserValidate } from "@/utils/validations"
import { FC } from "react"
import { Form, Field } from "react-final-form"

const DumbUserData: FC<{ onSubmit: (value: AddUserType) => void }> = ({ onSubmit }) => (
    (
        <S.StyleLogin>
            <S.LoginFormWrapper>
                <Form
                    onSubmit={onSubmit}
                    validate={addUserValidate}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <S.FormGroup>
                                <S.Label>Username</S.Label>
                                <Field name="username"
                                    render={({ input, meta }) => (
                                        <div>
                                            <S.Input {...input} type="text" placeholder="Enter your username" />
                                            {meta.error && <S.Span>{meta.error}</S.Span>}
                                        </div>
                                    )}
                                />
                            </S.FormGroup>
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
)
export default DumbUserData
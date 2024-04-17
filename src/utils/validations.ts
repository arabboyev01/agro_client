import { AddUserType, LoginValueType } from "@/types"

export const loginValidate = (values: LoginValueType) => {
  const errors: Partial<LoginValueType> = {}

  if (!values.email) {
    errors.email = "Required"
  }
  if (!values.password) {
    errors.password = "Required"
  }
  return errors
}
export const addUserValidate = (values: AddUserType) => {
  const errors: Partial<AddUserType> = {}

  if (!values.email) {
    errors.email = "Required"
  }
  if (!values.password) {
    errors.password = "Required"
  }

  if (!values.username) {
    errors.username = "Required"
  }
  return errors
}
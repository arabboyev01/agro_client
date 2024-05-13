import useMediaQuery from "@mui/material/useMediaQuery"
import { CButton, CSpinner } from "@coreui/react-pro"
import { Box } from "@mui/material"
import { Formik, FormikHelpers, FormikValues } from "formik"
import { ReactNode, useState } from "react"

interface AddFormProps<T> {
  children: ReactNode
  submit: (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => void
  initValue: FormikValues
  validate: T
  buttonText: string
}

const AddForm = <T,>({
  children,
  submit,
  initValue,
  validate,
  buttonText,
}: AddFormProps<T>) => {
  const isNonMobile = useMediaQuery("(min-width:600px)")
  const [loader, setLoader] = useState(false);

  const onSubmit = (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => {
    setLoader(true)
    submit(values, formikHelpers)
    setLoader(true)
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initValue}
      validationSchema={validate}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            {children}
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <CButton
              color="primary"
              type="submit"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              {buttonText}
              {loader && (
                <CSpinner
                  color="light"
                  style={{ width: "15px", height: "15px" }}
                />
              )}
            </CButton>
          </Box>
        </form>
      )}
    </Formik>
  )
}
export default AddForm

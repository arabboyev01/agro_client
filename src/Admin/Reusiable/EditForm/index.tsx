import { Box } from "@mui/material"
import { CButton, CSpinner } from "@coreui/react"
import { Fragment, ReactNode, useState } from "react"
import { Form, FormProps } from "react-final-form"
import { FormikValues } from "formik"

interface AddFormProps<T> {
    children: ReactNode
    submit: (values: FormikValues) => void
    initialValues: FormProps["initialValues"]
    validate: FormProps["validate"]
    buttonText: string
}

const EditForm = <T,>({ children, submit, initialValues, validate, buttonText }: AddFormProps<T>) => {

    const [loader, setLoader] = useState(false)

    const onSubmit = (values: FormikValues) => {
        setLoader(true)
        submit(values)
        setLoader(false)
    }

    return (
        <Box m="20px">
            <Form
                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Fragment>
                            {children}
                        </Fragment>
                        <div className="box">
                            <CButton color="primary" type="submit">
                                {buttonText}
                                {loader && (
                                    <CSpinner
                                        color="light"
                                        style={{ width: "15px", height: "15px" }}
                                    />
                                )}
                            </CButton>
                        </div>
                    </form>
                )}
            />
        </Box>
    )
}

export default EditForm

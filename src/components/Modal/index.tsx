import { FC, useState } from 'react'
import * as S from './style.modal'
import Modal from '@mui/material/Modal'
import { CloseSVG } from '@/assets/images'
import { Form, Field } from 'react-final-form'
import { MainButton } from '../Buttons/MainButton'
import { ProductType } from '@/types'
import { api } from '@/api'
import { toast } from 'react-toastify'
import { Language } from '@/hooks/language'

interface ModalComponentProps {
    open: boolean
    setOpen: (value: boolean) => void
    data: ProductType
}

const ModalComponent: FC<ModalComponentProps> = ({ open, setOpen, data }) => {

    const [loader, setLoader] = useState(false)
    const { lang } = Language()

    const onSubmit = (values: { name: string, phone: string }) => {
        setLoader(true)
        const payload = {
            customerName: values.name,
            phone: values.phone,
            productId: data.id
        }

        if (values.name && values.phone) {
            api.postData('orders', payload).then((data) => {
                if (data.success) {
                    toast.success("Your order has sent!", {
                        theme: "dark"
                    })
                    setOpen(false)
                    setLoader(false)
                } else {
                    toast.error(data.message, {
                        theme: "dark"
                    })
                    setLoader(false)
                }
            }).catch((err: any) => {
                toast.error(err.message, {
                    theme: "dark"
                })
                setLoader(false)
            })
        }
    }

    const initialValues = {
        name: "",
        phone: "+998"
    };

    const validate = (values: { name: string, phone: string }) => {
        const errors: { name?: string; phone?: string } = {}; 

        if(!values.name){
            errors.name = "required"
        }

        if(!values.phone){
            errors.phone = "required"
        }

        return errors
    }

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            hideBackdrop={true}
        >
            <S.ModalComponentContent>
                <S.HeaderModal>
                    <S.TextWrapper>
                        <S.ContactName>{lang('order.title')}</S.ContactName>
                        <S.ModalDesc>{lang('order.desc')}</S.ModalDesc>
                    </S.TextWrapper>

                    <S.CloseIcon onClick={() => setOpen(false)}>
                        <CloseSVG />
                    </S.CloseIcon>
                </S.HeaderModal>
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    initialValues={initialValues}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <S.Inputs>
                                <S.InputForms>
                                    <S.InputName>{lang('order.name')}:</S.InputName>
                                    <Field name="name">
                                        {({ input }) => (
                                            <S.Input {...input} placeholder={lang('order.full_name')}/>
                                        )}
                                    </Field>
                                </S.InputForms>
                                <S.InputForms>
                                    <S.InputName>{lang('order.phone')}:</S.InputName>
                                    <Field name="phone">
                                        {({ input, meta }) => (
                                            <S.Input {...input} type='tel' placeholder={lang('order.phone_number')}/>
                                        )}
                                    </Field>
                                </S.InputForms>
                                <S.ButtonWrapper>
                                    <MainButton width={200} height={42.55} text={lang('order.send')} textSize={14} loader={loader} />
                                    <S.CallButton onClick={() => setOpen(false)}>{lang('order.cancel')}</S.CallButton>
                                </S.ButtonWrapper>
                            </S.Inputs>
                        </form>
                    )}
                />

            </S.ModalComponentContent>
        </Modal>
    )
}
export default ModalComponent
import { FC, useState } from 'react'
import * as S from './style.modal'
import Modal from '@mui/material/Modal'
import { CloseSVG } from '@/assets/images'
import { Form, Field } from 'react-final-form'
import { MainButton } from '../Buttons/MainButton'
import { ProductType } from '@/types'
import { api } from '@/api'
import { toast } from 'react-toastify'

interface ModalComponentProps {
    open: boolean
    setOpen: (value: boolean) => void
    data: ProductType
}

const ModalComponent: FC<ModalComponentProps> = ({ open, setOpen, data }) => {

    const [loader, setLoader] = useState(false)

    const onSubmit = (values: { name: string, phone: string}) => {
        setLoader(true)
        const payload = {
            plantName: data?.name,
            plantVariety: 'none',    
            price: data.price,
            image: data.image,       
            customerName: values.name,
            phone: values.phone,
            productId: data.id
        }
        api.postData('orders', payload).then((data) => {
            if (data.success) {
                toast.success("Your order has sent!", {
                    theme: "dark"
                })
                setOpen(false)
                setLoader(false)
            }else {
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

    return(
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
                    <S.ContactName>Контактные данные</S.ContactName>
                    <S.ModalDesc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard</S.ModalDesc>
                </S.TextWrapper>

                <S.CloseIcon onClick={() => setOpen(false)}>
                    <CloseSVG />
                </S.CloseIcon>
            </S.HeaderModal>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <S.Inputs>
                            <S.InputForms>
                                <S.InputName>Имя:</S.InputName>
                                <Field name="name">
                                {({ input, meta }) =>(
                                    <S.Input {...input}/>
                                )}
                                </Field>
                            </S.InputForms>
                            <S.InputForms>
                                <S.InputName>Hомер телефона:</S.InputName>
                                <Field name="phone">
                                {({ input, meta }) =>(
                                    <S.Input {...input} type='number' />
                                )}
                                </Field>
                            </S.InputForms>
                            <S.ButtonWrapper>
                                <MainButton width={200} height={42.55} text='Отправить' textSize={14} loader={loader}/>
                                <S.CallButton>Позвонить</S.CallButton>
                            </S.ButtonWrapper>
                        </S.Inputs>
                    </form>
                )}
            />

        </S.ModalComponentContent>
    </Modal>
)}
export default ModalComponent
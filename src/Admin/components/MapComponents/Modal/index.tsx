import { LocationType, RegionType } from "@/Admin/types"
import { CButton, CModal, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react-pro"
import { FC, useState } from "react"
import * as S from "./style.modal"

type ModalProps = {
    visible: boolean,
    setVisible: (visible: boolean) => void
    data: LocationType
    l: any
}
const MapModal: FC<ModalProps> = ({ visible, setVisible, data, l }) => {

    if(!data) return null

    const regionName: string = (data?.region as RegionType)?.[`name_${l}` as keyof RegionType] as string
    const distrcictName: string = (data?.district as RegionType)?.[`name_${l}` as keyof RegionType] as string
  
    return(
        <>
            <CModal
                backdrop="static"
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="StaticBackdropExampleLabel"
            >
                <CModalHeader>
                    <CModalTitle id="StaticBackdropExampleLabel">Location details</CModalTitle>
                </CModalHeader>
                <S.ModalStyle>
                    <S.AddressName>
                        <strong>Address: </strong>
                        {regionName} Region, {distrcictName}, {data?.address}
                    </S.AddressName>
                </S.ModalStyle>
                <CModalFooter>
                    <CButton color="primary" onClick={() => setVisible(false)}>
                        Close
                    </CButton>
                </CModalFooter>

            </CModal>
        </>
    )
}
export default MapModal
import { LocationType, PlantType, RegionType } from "@/Admin/types"
import { CButton, CModal, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react-pro"
import { FC, useState } from "react"
import * as S from "./style.modal"

type ModalProps = {
    visible: boolean,
    handleCloseModal: () => void
    data: LocationType
    l: any
}
const MapModal: FC<ModalProps> = ({ visible, handleCloseModal, data, l }) => {

    if(!data) return null

    const regionName: string = (data?.region as RegionType)?.[`name_${l}` as keyof RegionType] as string
    const distrcictName: string = (data?.district as RegionType)?.[`name_${l}` as keyof RegionType] as string
  
    return(
        <>
            <CModal
                backdrop="static"
                visible={visible}
                onClose={handleCloseModal}
                aria-labelledby="StaticBackdropExampleLabel"
            >
                <CModalHeader>
                    <CModalTitle id="StaticBackdropExampleLabel"  style={{ fontSize: "24px"}}>Location details</CModalTitle>
                </CModalHeader>
                <S.ModalStyle>
                    <S.AddressName>
                        <strong>Address: </strong> <br />
                        {regionName} Region, {distrcictName}, {data?.address}
                    </S.AddressName>

                    <S.AddressName>
                        <strong>Ekilishi mumkin bo&apos;lgan ekinlar: </strong> <br />
                        <S.ListItem>
                            {data?.crops?.map((item: PlantType) => {
                                const name: string = item?.[`name_${l}` as keyof PlantType] as string
                                return <li key={item.id}>{name}</li>
                            })}
                        </S.ListItem>
                    </S.AddressName>
                    <S.AddressName last>
                        <strong>Tuproq haqida ma&apos;lumot: </strong> <br />
                        <S.ListItem>
                            {data && data?.soilsContent && JSON.parse(data?.soilsContent as any)?.map((item: { key: string, value: string }) => (
                                <li key={item.key}>{item.key}: {item.value}</li>
                            ))}
                        </S.ListItem>
                    </S.AddressName>

                </S.ModalStyle>
                <CModalFooter>
                    <CButton color="primary" onClick={handleCloseModal}>
                        Close
                    </CButton>
                </CModalFooter>

            </CModal>
        </>
    )
}
export default MapModal
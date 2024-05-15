import styled from "styled-components";

export const ModalStyle = styled.div`
  height: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`
type props = {
  last?: boolean
}
export const AddressName = styled.div<props>`
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 18px;
  border-bottom: ${({ last }) => last ? 'none' : "1px solid #ddd"};
 
`

export const ListItem = styled.div`
  padding-left: 28px;
`
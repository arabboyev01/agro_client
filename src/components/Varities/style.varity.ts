import styled from "styled-components"

export const VarityComponent = styled.div`
  width: 100%;
  height: 80vh;
  @media(max-width: 1000px){
    height: auto;
  }
`
export const VaritySelectors = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;

  > *:nth-child(3) {
    width: 200px;
  }

  @media(max-width: 1000px){
    flex-direction: column;
  }
`;

export const StyleDropDown = styled.div`
  position: relative;
  width: 100%;
`

export const DrowDownHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
  border: 1px solid #E6E6E6;
  padding: 12px 16px;
  border-radius: 6.3px;
`

export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  font-family: 'SF Pro Display';
`
interface Prop {
  active: boolean;
}

export const DropDownItems = styled.div<Prop>`
  position: absolute;
  top: 50px;
  right: 0;
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  min-width: 100px;
  background: #fff;
  box-shadow: 3px 0px 30px -7px rgba(0,0,0,0.3);
  border-radius: 8px;
  overflow: hidden;
  height: auto;
  width: 100%;
  z-index: 1000;
`

export const Items = styled.p`
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  padding: 12px 0 12px 24px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`

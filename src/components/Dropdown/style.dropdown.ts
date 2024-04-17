import styled from "styled-components";

export const StyleDropDown = styled.div`
  position: relative;
  z-index: 100;
`;
export const DrowDownHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  font-family: 'SF Pro Display';
`;
interface Prop {
  active: boolean;
}
export const DropDownItems = styled.div<Prop>`
  position: absolute;
  top: 35px;
  right: -15px;
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  min-width: 100px;
  background: #fff;
  box-shadow: 3px 0px 30px -7px rgba(0,0,0,0.3);
  border-radius: 8px;
  overflow: hidden;
  height: auto;
`;
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

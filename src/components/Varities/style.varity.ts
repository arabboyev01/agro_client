import styled from "styled-components";

export const VarityComponent = styled.div`
  width: 100%;
  height: 80vh;
  @media (max-width: 1000px) {
    height: auto;
  }
`;
export const VaritySelectors = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;

  > *:nth-child(3) {
    width: 200px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const StyleDropDown = styled.div`
  position: relative;
  width: 100%;
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
  width: 100%;
  border: 1px solid #e6e6e6;
  padding: 12px 16px;
  border-radius: 6.3px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  font-family: "SF Pro Display";
`;
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
  box-shadow: 3px 0px 30px -7px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;
  height: auto;
  width: 100%;
  z-index: 1000;
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
`;
export const VarietyContent = styled.div`
  margin-top: 76px;

  @media only screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;
export const MainText = styled.h1`
  font-size: 60.43px;
  line-height: 69.23px;
  font-weight: 900;
  color: #4f4f4f;
  text-transform: uppercase;
  font-family: "SF Pro Display", sans-serif;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 36px;
    line-height: 44px;
  }
`;
export const VaritiesWrapper = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  @media(max-width: 750px){
    flex-direction: column;
  }
`;

export const VarityType = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 50%;
  width: 100%;
  gap: 20px;
  margin-top: 40px;

  @media(max-width: 750px){
    max-width: 100%;
  }
`;

export const VarityImage = styled.img`
  width: 83px;
  height: 100px;
  object-fit: contain;
`;

export const VarityName = styled.h2`
  font-size: 30px;
  line-height: 32px;
  font-weight: 900;
  color: #4f4f4f;
  text-transform: uppercase;
  font-family: "SF Pro Display", sans-serif;

  @media(max-width: 750px){
    font-size: 20px;
  line-height: 22px;
  }
`
export const VarityText = styled.p`
  color: #828282;
  font-weight: 400;
  font-size: 12px;
  margin-top: 14px;
`
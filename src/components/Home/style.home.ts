import styled from "styled-components";

export const StyleHomePage = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 76px;
  margin-top: 46px;

  @media (max-width: 1200px) {
    gap: 45px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;
export const LeftContent = styled.div`
  flex: 0.1;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 32px;
  @media (max-width: 1000px) {
    flex: 1;
    flex-direction: column;
    align-items: center;
    width: 100%;
    order: 3;
    gap: 6px;
  }
`;
export const LeftItems = styled.div`
  width: 192px;
  height: 226px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 26px 0;
  box-shadow: 3px 0px 30px -7px rgba(0, 0, 0, 0.3);
  border-radius: 12px;

  @media (max-width: 1000px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;
export const LeftItemsText = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #828282;
  max-width: 168px;
  text-align: center;

  @media (max-width: 1000px) {
    max-width: 80%;
  }
`;
export const MiddleContent = styled.div`
  flex: 0.45;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  @media (max-width: 1000px) {
    flex: 1;
    order: 1;
  }
`;
export const MiddleTile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const GreenTitle = styled.h1`
  background: rgb(199, 98, 2);
  background: linear-gradient(
    90deg,
    rgba(199, 98, 2, 1) 0%,
    rgba(255, 124, 0, 1) 35%,
    rgba(218, 106, 0, 1) 63%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 93px;
  font-weight: 900;
  line-height: 100px;
  font-family: sans-serif;

  @media (max-width: 1500px) {
    font-size: 73px;
  }

  @media (max-width: 1400px) {
    font-size: 73px;
  }

  @media (max-width: 1200px) {
    font-size: 53px;
  }
`;
export const BlackTitle = styled.h1`
  background: linear-gradient(90deg, #48b760 0%, #6bb748 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 93px;
  font-weight: 900;
  line-height: 100px;
  font-family: sans-serif;

  @media (max-width: 1500px) {
    font-size: 73px;
  }

  @media (max-width: 1400px) {
    font-size: 73px;
  }

  @media (max-width: 1200px) {
    font-size: 53px;
  }
`;
export const Subtitle = styled.h5`
  font-weight: 500;
  line-height: 17px;
  color: #bdbdbd;
  font-size: 28px;
  margin: 18px 0 24px 0;
`;


export const MiddleContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 45px;
  margin-top: 200px;

  @media (max-width: 1000px) {
    margin-top: 20px;
    gap: 10px;
  }
`;
export const ContactInfo = styled.div`
  display: flex;
  background: #fff;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 3px 0px 30px -7px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
export const ContactText = styled.p``;
export const EndContent = styled.div`
  flex: 0.45;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;

  @media (max-width: 1000px) {
    flex: 1;
    order: 2;
  }
`;

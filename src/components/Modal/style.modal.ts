import styled from "styled-components";

export const ModalComponentContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  background-color: #fff;
  border: 3px solid #00b207;
  box-shadow: 24px;
  padding: 16px;
  border-radius: 10px;
  max-width: 716px;
  width: 100%;
  height: 437px;
  padding: 24px;
  background-image: url("../../assets/Group 397.svg");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 750px) {
    width: 90%;
    padding: 12px;
  }
`;
export const HeaderModal = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  cursor: pointer;
`;

export const CloseIcon = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #ddd;
    border-radius: 40px;
  }
`;
export const ContactName = styled.h3`
  padding: 12px 0;
  font-size: 36px;
  font-weight: 700;
  font-family: SF Pro Display;
  color: #828282;
  @media (max-width: 750px) {
    font-size: 26px;
  }
`;
export const TextWrapper = styled.div`
  width: 95%;
`;
export const ModalDesc = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #bdbdbd;
  @media (max-width: 750px) {
    font-size: 14px;
  }
`;
export const InputForms = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: start;
    padding-inline: 6px;
  }
`;
export const InputName = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #828282;
  @media (max-width: 430px) {
    padding-bottom: 5px;
  }
`;
export const Inputs = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Input = styled.input`
  width: 70%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  height: 45px;
  border-radius: 25px;
  padding-inline: 24px;
  font-size: 20px;
  color: #828282;
  @media (max-width: 750px) {
    width: 100%;
  }
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;
  gap: 24px;
  margin-top: 24px;
`;
export const CallButton = styled.div`
  border: none;
  font-size: 14px;
  background-color: transparent;
  font-weight: 600;
  color: #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 42.77px;
  cursor: pointer;
`;

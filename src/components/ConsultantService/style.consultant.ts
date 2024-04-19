import styled from "styled-components";

export const StyleConsultant = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 76px;
  margin-top: 35px;
  flex-wrap: wrap;

  @media(max-width: 650px){
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
export const ConsultantContent = styled.div`
  max-width: 275px;
  max-height: 380px;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 3px 0px 30px -7px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 26px 30px;
  margin-bottom: 20px;
`;
export const Image = styled.img`
  width: 136px;
  height: 136px;
  object-fit: contain;
  border-radius: 50%;
`;

export const Name = styled.h4`
  color: #64b74d;
  margin-top: 22px;
`;

export const Subject = styled.p`
  color: #696d6e;
  margin-top: 5px;
`;

export const Text = styled.p`
  color: #696d6e;
  margin-top: 12px;
  font-size: 14px;
  text-align: center;
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin: 22px 0;
  gap: 20px;
`

export const MessageButton = styled.button`
  color: #48B760;
  font-size: 14px;
  font-weight: 600;
  width: 98px;
  height: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:  rgba(72, 183, 96, 0.15);
  border: none;
  border-radius: 24px;
`
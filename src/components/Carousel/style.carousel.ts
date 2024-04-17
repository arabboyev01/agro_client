import styled from "styled-components";

export const StyleCarousel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
interface props {
  bg: any;
}
export const HeaderStyle = styled.div<props>`
  width: 570px;
  height: 630px;
  background-image: ${({ bg }) => `url(${bg})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 1500px) {
    width: 500px;
    height: 600px;
  }

  @media (max-width: 1400px) {
    width: 400px;
    height: 500px;
  }
  @media (max-width: 1200px) {
    width: 350px;
    height: 450px;
  }
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  width: 100%;
  gap: 25px;
`;

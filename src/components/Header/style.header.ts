import styled from "styled-components"

export const StyleHeader = styled.div`
  width: 100%;
  height: auto;
  @media(max-width: 500px){
   margin-top: 20px;
  }
`
export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const LogoImage = styled.img`
  cursor: pointer;
  width: 113px;
  height: 113px;
  object-fit: contain;

  @media(max-width: 500px){
    width: 80px;
    height: 80px;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`
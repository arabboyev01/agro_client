import styled from "styled-components"

interface Prop {
  width: number;
  height: number;
  backgroundImage: string;
  textSize: number | undefined;
}

export const StyledButton = styled.button<Prop>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border: none;
  border-radius: 24px;
  background: url(${(props) => props.backgroundImage}) center center no-repeat,
    linear-gradient(90deg, #48b760 0%, #6bb748 100%);
  font-size: ${({ textSize }) => (textSize ? `${textSize}px` : "16px")};
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 20px 50px -7px #6bb748;

  &:active{
    box-shadow: 0px 20px 50px -17px #6bb748;
  }
`;
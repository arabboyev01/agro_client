import styled from "styled-components"


export const StyleSeeds = styled.div`
  width: 100%;
  height: auto;
  @media (max-width: 430px) {
    justify-content: center;
  }
`;
export const SeachInput = styled.div`
  width: 312px;
  height: 45px;
  border: 1px solid #e6e6e6;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-inline: 12px;
  gap: 12px;
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  z-index: 1;

  &:focus {
    outline: none;

    ${SeachInput}{
      border: 1px solid #000;
    }
  }

  font-size: 16px;
`;

export const SeedsContent = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

export const IconsWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f2f2f2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Name = styled.p`
  font-weight: 400;
  color: #4D4D4D;
`;
export const SingleSeed = styled.div`
  min-width: 312px;
  max-width: 400px;
  height: 407px;
  background-color: #fff;
  box-shadow: 3px 0px 30px -7px rgba(0, 0, 0, 0.3);
  margin: 1px;
  border-radius: 12px;
  border: 1px solid #e6e6e6;

  transition: border 0.1s ease-in-out 0.1s, box-shadow 0.1s ease-in-out 0.1s;

  &:hover{
    border: 1px solid #20b52652;
    box-shadow: 3px 0px 30px -7px #20b52652;
    cursor: pointer;
    ${IconsWrapper}{
      background-color: #00B207;
      transition: background-color 0.1s ease-in-out 0.1s; 
    }
    ${Name}{
      color: #2C742F;
    }
  }

  @media(max-width: 430px){
    margin-inline: 20px;
  }
`;
export const SeedImage = styled.img`
  width: 302px;
  height: 302px;
  object-fit: contain;
  background-blend-mode: multiply;
`;
export const SeedContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 24px;
  padding-top: 12px;
`;
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
`;

export const Price = styled.p`
  font-weight: 500;
  color: #1A1A1A;
  font-size: 18px;
  font-family: Poppins;
`;

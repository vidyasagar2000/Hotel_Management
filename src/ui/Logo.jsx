import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

const ImageText = styled.p`
  letter-spacing: 2px;
  font-family: monospace;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/Hotel-Logo.png" : "/Hotel-Logo.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
      <ImageText>THE ROYAL PALACE</ImageText>
    </StyledLogo>
  );
}

export default Logo;

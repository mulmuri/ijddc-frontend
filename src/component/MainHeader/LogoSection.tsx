import styled from "@emotion/styled";

const StyledImage = styled.img`
  width: 216px;
  height: 72px;
  margin: 12px;
  position: absolute;
  left: 0px;
`

const LogoSection = () => {
  return (
    <StyledImage src="https://global.urbanscience.uos.ac.kr/static/media/hub-logo.f193d521.png"/>
  )
}

export default LogoSection;
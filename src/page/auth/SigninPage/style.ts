import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";


export const Frame = styled(Container)({
  height: '500px',
  marginTop: '50px'
});

Frame.defaultProps = {
  maxWidth: 'sm'
}



export const LogoSection = styled(Box)({
  width: '200px',
  height: '200px'
});

export const TitleSection = styled(Typography)({
  fontSize: '2em',
  color: 'black'
});

export const InputSection = styled(Box)({
  width: '300px',
  height: '56px',
  margin: '2px'
});
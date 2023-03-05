import { Box, styled, ThemeProvider, Typography } from "@mui/material";
import { footerTheme } from "../../../style/theme/footerTheme";
import { FooterInfoList } from "./info";
import { StyledFooter, StyledFooterBox } from "./style";



export interface FooterContentProps {
  imgurl?: string;
  text: string;
  link?: string;
}

export interface FooterBoxProps {
  title: string;
  content: FooterContentProps[];
}




const MainFooter = () => {
  return (
    <ThemeProvider theme={footerTheme}>
      <StyledFooter>
        {FooterInfoList.map((info) => (
          <StyledFooterBox key={info.title}>
            <Typography fontWeight={700}> {info.title}</Typography>
            {info.content.map((contentinfo) => (
              <Typography fontWeight={400} >{contentinfo.text}</Typography>
              ))}
          </StyledFooterBox>
          ))}
      </StyledFooter>
    </ThemeProvider>

  )
}

export default MainFooter;
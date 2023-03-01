import { Box, styled, ThemeProvider, Typography } from "@mui/material";
import { footerTheme } from "../../../style/theme/footerTheme";
import { FooterInfoList } from "./FooterInfo";



export interface FooterContentProps {
  imgurl?: string;
  text: string;
  link?: string;
}

export interface FooterBoxProps {
  title: string;
  content: FooterContentProps[];
}



const StyledFooter = styled(Box)({
  width: "100%",
  height: 200,
  backgroundColor: '#F3F4F5',
  display: 'inline-flex'

})

const StyledFooterBox = styled(Box)({
  padding: 30,
  margin: 5,
  maxWidth: 700,
})

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
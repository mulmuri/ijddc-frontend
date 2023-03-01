import { AppBar, Box, Paper, styled, Toolbar } from "@mui/material";
import DialSection from "./DialSection";
import LogoSection from "./LogoSection";
import TabSection from "./TabSection";




export const HeaderHeight = 100;

const StyledToolBar = styled(Toolbar)({
  alignItems: 'flex-middle',
  justifyContent: 'space-between',
  height: HeaderHeight,
  //color: 'background.default'
})



const HeaderWhiteSpace = styled(Box)({
  height: HeaderHeight
})


const MainHeader = () => {
  return (
    <>
    <AppBar>
      <StyledToolBar>
        <LogoSection/>
        <TabSection/>
        <DialSection/>
      </StyledToolBar>
    </AppBar>
    <HeaderWhiteSpace/>
    </>
  )
}

export default MainHeader;
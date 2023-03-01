import { Box, styled } from "@mui/material";
import { navInfoList } from "./navInfo";
import TabItem from "./TabItem";

const StyledBox = styled(Box)({
  justifyContent: 'space-between',
  display: 'inline-flex',
  alignItself: 'streatch'
})

const TabSection = () => {
  return (
    <StyledBox sx={{height: 56, alignSelf: 'flex-end'}} color="paper.default">
      {navInfoList.map((item) => (
        <TabItem title={item.title} index={item.index}/>
      ))}
    </StyledBox>
  )
}

export default TabSection;
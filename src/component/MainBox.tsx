import { styled } from "@mui/material";
import { ResponsivePaper } from "./Responsive";




const MainBox = styled(ResponsivePaper)({
  borderTopColor: '#3181F5',
  borderTopWidth: 5,
  borderTopStyle: 'solid',
  
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', // 가로정렬
  alignItems: 'center', // 세로정렬
});

MainBox.defaultProps = {
  square: true,
  elevation: 5
}

export default MainBox;
import { ResponsiveImg } from "../../Responsive";
import { Box, TitleSection } from "./style";



export interface ArchieveBoxProps {
  imgurl: string;
  title: string;
}


const ArchieveBox = ({imgurl, title}: ArchieveBoxProps) => {
  return (
    <Box>
      <ResponsiveImg src={imgurl}/>
      <TitleSection> title</TitleSection>
    </Box>
  )
}

export default ArchieveBox;
import { Box } from "@mui/material";


export interface ArticleSummaryBoxProps {
  title: string
  authors: string
  imgurl: string
  abstract: string
  status: string
}



const ArticleSummaryBox = ({title, authors, imgurl, abstract, status}: ArticleSummaryBoxProps) => {
  return (
    <Box>
      
    </Box>
  )
}

export default ArticleSummaryBox;
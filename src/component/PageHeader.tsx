import { Box, styled, Typography } from "@mui/material";




export interface PageHeaderProps {
  title: string;
}

const PageHeaderStyle = styled(Box)({
  height: 200,
  textAlign: 'center',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center'
  //align-items: center;
})


const PageHeader = ({title}: PageHeaderProps) => {
  return (
    <PageHeaderStyle>
      <Typography fontSize={40} fontWeight={800}>
        {title}
      </Typography>
    </PageHeaderStyle>
  )
}

export default PageHeader;
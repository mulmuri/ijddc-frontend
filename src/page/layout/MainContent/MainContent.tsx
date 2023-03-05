import { Box, Container, Stack, styled } from "@mui/material";
import { ChildrenProps } from "../../../type/basic";
import { footerHeight } from "../MainFooter/style";






const MainContent = ({children}: ChildrenProps) => {
  return (
    <Container maxWidth="md" sx={{
      m: "0 auto",
      p: 0,
      width: "100%",
      minHeight: `100vh`
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {children}
      </Stack>
    </Container>
  )
}

export default MainContent;
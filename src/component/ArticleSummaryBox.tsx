import { Box } from "@mui/material";
import styled from "styled-components";


export interface ArticleSummaryBoxProps {
  title: string
  authors: string
  imgurl: string
  abstract: string
  status: string
}


const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
`;

const Image = styled.div`
  flex: 0 0 auto;
  margin-right: 20px;

  img {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

const Content = styled.div`
  flex: 1 1 auto;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
`;


const ArticleSummaryBox = ({title, authors, imgurl, abstract, status}: ArticleSummaryBoxProps) => {
  return (
    <Container>
      <Image>
        <img src={imgurl} alt="Box Image" />
      </Image>
      <Content>
        <h2>{title}</h2>
        <p>{authors}</p>
      </Content>
    </Container>      
  )
}

export default ArticleSummaryBox;
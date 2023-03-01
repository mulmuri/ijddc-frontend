import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styled from "@emotion/styled";



export interface Markdown {
  content: string;
}

const MarkdownStyle = styled.div`
  font-size: 1rem;
  line-height: 2.5rem;
`


const MarkdownRenderer = ({content}: Markdown) => {
  return (
    <MarkdownStyle>
      <ReactMarkdown>{content}</ReactMarkdown>
    </MarkdownStyle>
  )
}

export default MarkdownRenderer;
import { useRecoilValue } from "recoil";
import InlineDivider from "../../../component/Divider/InlineDivider";
import OutlineDivider from "../../../component/Divider/LargeDivider";
import PageHeader from "../../../component/PageHeader";
import { PaperContentState } from "../../../store/PaperContent";



export interface PaperContentValue {
  no?: Number
}




const PaperContentPage = ({no}: PaperContentValue) => {

  const PaperContent = useRecoilValue(PaperContentState)
  const {title, abstract, reference } = PaperContent;

  return (
    <>
      <PageHeader title="논문"/>
      <OutlineDivider title={title}/>
      <InlineDivider title="abstract"/>\
      {abstract}
      <InlineDivider title="reference"/>
      {reference}
    </>
  )
}

export default PaperContentPage;
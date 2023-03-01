import { atom } from "recoil";
import { PaperContentDummy } from "../dummyData/PaperContent";



/*
{
  paperNo:
  bookNo:
  title:
  author:
  abstract:
  reference:
  pages:
  doi:
  pdfurl:
  tag: [string]
}
*/



export interface PaperContentProps {
  paperNo: number;
  title: string;
  author: string;
  abstract: string;
  reference: string;
  pages: string;
  tag: string[];
}


const PaperContentState = atom({
  key: 'PaperContentState',
  default: PaperContentDummy
})

export default PaperContentState
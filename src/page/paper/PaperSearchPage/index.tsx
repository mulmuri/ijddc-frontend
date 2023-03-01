import { Divider } from "@mui/material";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import API from "../../../api/api";
import ArticleSummaryBox from "../../../component/ArticleSummaryBox";
import FalsePagination from "../../../component/FalsePagination";
import FlexBox from "../../../component/FlexBox";
import PageHeader from "../../../component/PageHeader";
import SearchBar from "../../../component/SearchNavigation/SearchBar/SearchBar";
import StatusSelector from "../../../component/SearchNavigation/StatusSelector/StatusSelector";
import TypeSelector from "../../../component/SearchNavigation/TypeSelector/TypeSelector";
import publicPaperListState from "../../../store/PublicPaperList";



export interface PaperSearchValue {
  keyword?: string;
  bookno?: number;
  status?: string;
}


interface PaperSearchInfo {
  paperNo: number;
  title: string;
  authors: string;
  imgurl: string;
}







const PaperSearchPage = ({keyword, bookno, status}: PaperSearchValue) => {

  const PaperList = useRecoilValue(publicPaperListState);

  const typelist = [
    { name: "제목" },
    { name: "본문" },
    { name: "태그" },
  ]


  return (
    <>
      <PageHeader title="Index"/>
      <FlexBox>
        <TypeSelector
          style={{m: 1, width: '5ch'}}
          types={typelist}
        />
        <SearchBar
          style={{m: 1, width: '45ch'}}
          onClick={() => {}}
        />
        <StatusSelector
        />
      </FlexBox>

      {PaperList.map((paper, index) => 
      <React.Fragment key={index}>
        <Divider variant="middle" >
          Center
        </Divider>
        <ArticleSummaryBox {...paper}/>
      </React.Fragment>
      )
      }

      <FalsePagination/>
    </>
  )
}

export default PaperSearchPage;
import { Route, Routes } from "react-router-dom"
import queryStringParser from 'query-string';
import PaperSearch, { PaperSearchValue } from "./PaperSearchPage";
import PaperContent, { PaperContentValue } from "./PaperContentPage";


const PaperRouter = () => {

  const queryString = queryStringParser.parse(window.location.search);

  const paperSearchQueryString: PaperSearchValue = {...queryString, bookno: Number(queryString.bookno)};
  const paperContentQueryString: PaperContentValue = {no: Number(queryString.no)};

  return (
    <Routes>
      <Route path="/volume"  element={<></>}/>
      <Route path="/search"  element={<PaperSearch {...paperSearchQueryString}/>}/>
      <Route path="/content" element={<PaperContent {...paperContentQueryString}/>}/>
    </Routes>
  )
}

export default PaperRouter;
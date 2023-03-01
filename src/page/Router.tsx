import { Navigate, Route, Routes } from "react-router-dom";
import InitpassPage from "./auth/InitpassPage";
import RegisterByEmailPage from "./auth/RegisterByEmailPage";
import RegisterBySSOPage from "./auth/RegisterBySSOPage";
import RegisterSuccessPage from "./auth/RegisterSuccessPage";
import RegisterTOSPage from "./auth/RegisterTOSPage";
import SigninPage from "./auth/SigninPage";
import { ContributionContentPage, ContributionResultPage, ContributionSearchPage, ContributionWritingPage } from "./contribution";
import PaperBookPage from "./paper/PaperBookPage";
import MainPage from "./layout/MainPage";
import MemberListPage from "./manager/MemberListPage";
import RolePage from "./member/RolePage";
import PaperContentPage from "./paper/PaperContentPage";
import { PublishingContentPage, PublishingResultPage, PublishingSearchPage, PublishingWritingPage } from "./publishing";
import CollectionInfoPage from "./publishing/CollectionInfoPage";
import CollectionPaperListPage from "./publishing/CollectionPaperListPage";
import CollectionSuccessPage from "./publishing/CollectionSuccess";
import ReviewAssigningPage from "./publishing/ReviewAssigningPage";
import AboutUsPage from "./report/AboutUsPage";
import ContactUsPage from "./report/ContactUsPage";
import EditorialBoardPage from "./report/EditorialBoardPage";
import InstructionsForAuthorsPage from "./report/InstructionsForAuthorsPage";
import { ReviewingContentPage, ReviewingResultPage, ReviewingSearchPage, ReviewingWritingPage } from "./reviewing";
import { PaperSearchPage }from "./paper";



const MainRouter = () => {
  return (
    <Routes>
      <Route path=""     element={<Navigate replace to="home"/>} />
      <Route path="home" element={<MainPage/>}/>
      <Route path="report">
        <Route path="about-us"                 element={<AboutUsPage/>}/>
        <Route path="editorial-board"          element={<ContactUsPage/>}/>
        <Route path="instructions-for-authors" element={<EditorialBoardPage/>}/>
        <Route path="contact-us"               element={<InstructionsForAuthorsPage/>}/>
      </Route>
      <Route path="auth">
        <Route path="signin">
          <Route path=""         element={<SigninPage/>}/>
          <Route path="initpass" element={<InitpassPage/>}/>
        </Route>
        <Route path="register">
          <Route path="email"   element={<RegisterByEmailPage/>}/>
          <Route path="sso"     element={<RegisterBySSOPage/>}/>
          <Route path="success" element={<RegisterSuccessPage/>}/>
          <Route path="tos"     element={<RegisterTOSPage/>}/>
        </Route>
      </Route>
      <Route path="member">
        <Route path="role" element={<RolePage/>}/>
      </Route>
      <Route path="manager">
        <Route path="memberlist" element={<MemberListPage/>}/>
      </Route>
      <Route path="paper">
        <Route path="book"    element={<PaperBookPage/>}/>
        <Route path="search"  element={<PaperSearchPage/>}/>
        <Route path="content" element={<PaperContentPage/>}/>
      </Route>
      <Route path="contribution">
        <Route path="search"  element={<ContributionSearchPage/>}/>
        <Route path="content" element={<ContributionContentPage/>}/>
        <Route path="result"  element={<ContributionResultPage/>}/>
        <Route path="writing" element={<ContributionWritingPage/>}/>
      </Route>
      <Route path="reviewing">
        <Route path="search"  element={<ReviewingSearchPage/>}/>
        <Route path="content" element={<ReviewingContentPage/>}/>
        <Route path="result"  element={<ReviewingResultPage/>}/>
        <Route path="writing" element={<ReviewingWritingPage/>}/>
      </Route>
      <Route path="publishing">
        <Route path="paper">
          <Route path="search"    element={<PublishingSearchPage/>}/>
          <Route path="content"   element={<PublishingContentPage/>}/>
          <Route path="result"    element={<PublishingResultPage/>}/>
          <Route path="writing"   element={<PublishingWritingPage/>}/>
          <Route path="assigning" element={<ReviewAssigningPage/>}/>
        </Route>
        <Route path="collection">
          <Route path="paperlist" element={<CollectionPaperListPage/>}/>
          <Route path="info"      element={<CollectionInfoPage/>}/>
          <Route path="success"   element={<CollectionSuccessPage/>}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default MainRouter;
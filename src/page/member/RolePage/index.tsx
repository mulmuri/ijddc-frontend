import { Box, Paper, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../component/PageHeader";




interface userStatusValue {
  isMember: boolean;
  isManager: boolean;
  isContributor: boolean;
  isReviewer: boolean;
  isPublisher: boolean;
}


interface RoleCardProps {
  title: string;
  desc: string;
  to: string;
}


const RoleCardContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-evenly',
  flexDirection: 'row',
  gap: '2rem',
})
/*
const RoleCardStyle = styled(motion.div)({
  width: '100%',
  height: 200,
  display: 'flex',
  border: 'black 1px solid'
})
*/

const RoleCardStyle = styled(motion.div)`

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  cursor: pointer;

  h2 {
    margin: 0 0 10px;
    font-size: 20px;
  }

  p {
    margin: 0;
    color: #888;
  }
`;



const RoleCard = ({title, desc, to}: RoleCardProps) => {
  const navigate = useNavigate()

  return (
    <RoleCardStyle
      onClick={() => navigate(to)}
      whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h2>{title}</h2>
      <p>{desc}</p>
    </RoleCardStyle>
  )
}


const RolePage = () => {
  const userStatus: userStatusValue = {
    isMember: true,
    isManager: true,
    isContributor: true,
    isReviewer: true,
    isPublisher: true
  }

  const contributorProps: RoleCardProps = {
    title: 'Contributor',
    desc: '논문을 제출합니다.',
    to: '/contribution/search'
  }

  const reviewerProps: RoleCardProps = {
    title: 'Reviewer',
    desc: '논문을 심사합니다.',
    to: '/review/search'
  }

  const publisherProps: RoleCardProps = {
    title: 'Publisher',
    desc: '논문을 제출합니다.',
    to: '/publishing/paper/search'
  }

  return (
    <>
    <PageHeader title="선택"/>
    <RoleCardContainer>
      {userStatus.isContributor && <RoleCard {...contributorProps}/>}
      {userStatus.isReviewer    && <RoleCard {...reviewerProps}/>}
      {userStatus.isPublisher   && <RoleCard {...publisherProps}/>}
    </RoleCardContainer>
    </>
  )
}

export default RolePage;
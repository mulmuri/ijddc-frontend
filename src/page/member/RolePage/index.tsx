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

const RoleCardStyle = styled(motion.div)({
  width: '100%',
  height: 200,
  display: 'flex',
  border: 'black 1px solid'
})



const RoleCard = ({title, desc, to}: RoleCardProps) => {
  const navigate = useNavigate()

  return (
    <RoleCardStyle
      //elevation={13}
      onClick={() => navigate(to)}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2, type: 'ease' },
      }}
    >
      {title}
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